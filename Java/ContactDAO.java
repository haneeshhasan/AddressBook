package AddressBook.Java;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ContactDAO {
    // Database connection parameters
    private static final String URL = "jdbc:mysql://localhost:3306/addressbook";
    private static final String USERNAME = "root";
    private static final String PASSWORD = "root";
    
    // JDBC Driver
    private static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
    
    // Constructor
    public ContactDAO() {
        try {
            // Load the JDBC driver
            Class.forName(JDBC_DRIVER);
        } catch (ClassNotFoundException e) {
            throw new RuntimeException("Failed to load JDBC driver", e);
        }
    }
    
    // Get database connection
    private Connection getConnection() throws SQLException {
        return DriverManager.getConnection(URL, USERNAME, PASSWORD);
    }
    
    // Add a new contact
    public boolean addContact(Contact contact) {
        String sql = "INSERT INTO contacts (firstName, lastName, email, phone, address, notes) VALUES (?, ?, ?, ?, ?, ?)";
        
        try (Connection conn = getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            
            pstmt.setString(1, contact.getFirstName());
            pstmt.setString(2, contact.getLastName());
            pstmt.setString(3, contact.getEmail());
            pstmt.setString(4, contact.getPhone());
            pstmt.setString(5, contact.getAddress());
            pstmt.setString(6, contact.getNotes());
            
            return pstmt.executeUpdate() > 0;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }
    
    // Delete a contact by ID
    public boolean deleteContact(int id) {
        String sql = "DELETE FROM contacts WHERE id = ?";
        
        try (Connection conn = getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            
            pstmt.setInt(1, id);
            return pstmt.executeUpdate() > 0;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }
    
    // Get a contact by ID
    public Contact getContactById(int id) {
        String sql = "SELECT * FROM contacts WHERE id = ?";
        
        try (Connection conn = getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            
            pstmt.setInt(1, id);
            ResultSet rs = pstmt.executeQuery();
            
            if (rs.next()) {
                return extractContactFromResultSet(rs);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }
    
    // Get all contacts
    public List<Contact> getAllContacts() {
        List<Contact> contacts = new ArrayList<>();
        String sql = "SELECT * FROM contacts";
        
        try (Connection conn = getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {
            
            while (rs.next()) {
                contacts.add(extractContactFromResultSet(rs));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return contacts;
    }
    
    // Update an existing contact
    public boolean updateContact(Contact contact) {
        String sql = "UPDATE contacts SET firstName=?, lastName=?, email=?, phone=?, address=?, notes=? WHERE id=?";
        
        try (Connection conn = getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            
            pstmt.setString(1, contact.getFirstName());
            pstmt.setString(2, contact.getLastName());
            pstmt.setString(3, contact.getEmail());
            pstmt.setString(4, contact.getPhone());
            pstmt.setString(5, contact.getAddress());
            pstmt.setString(6, contact.getNotes());
            pstmt.setInt(7, contact.getId());
            
            return pstmt.executeUpdate() > 0;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }
    
    // Helper method to extract contact from ResultSet
    private Contact extractContactFromResultSet(ResultSet rs) throws SQLException {
        Contact contact = new Contact();
        contact.setId(rs.getInt("id"));
        contact.setFirstName(rs.getString("firstName"));
        contact.setLastName(rs.getString("lastName"));
        contact.setEmail(rs.getString("email"));
        contact.setPhone(rs.getString("phone"));
        contact.setAddress(rs.getString("address"));
        contact.setNotes(rs.getString("notes"));
        return contact;
    }
} 
-- Create Database
CREATE DATABASE addressbook;

-- Use the Database
USE addressbook;

-- Create Contacts Table
CREATE TABLE contacts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(15) NOT NULL,
    address VARCHAR(255),
    notes TEXT
);

-- Insert Sample Indian Names and Data
INSERT INTO contacts (firstName, lastName, email, phone, address, notes) VALUES
    ('Rahul', 'Sharma', 'rahul.sharma@email.com', '9876543210', 'B-12, Vasant Vihar, New Delhi', 'College friend'),
    ('Priya', 'Patel', 'priya.patel@email.com', '9876543211', '204, Hill View Apartments, Mumbai', 'Work colleague'),
    ('Amit', 'Verma', 'amit.verma@email.com', '9876543212', '45, MG Road, Bangalore', 'Business contact'),
    ('Neha', 'Singh', 'neha.singh@email.com', '9876543213', '123, Civil Lines, Jaipur', 'Family friend'),
    ('Arun', 'Kumar', 'arun.kumar@email.com', '9876543214', '78, Park Street, Kolkata', 'School friend'); 
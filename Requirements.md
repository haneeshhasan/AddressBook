 ####Address Book

 ###Requirements:

 I am trying to create a simple address book using HTML, CSS, and
 JavaScript.

 ###Features:- Add a new contact- Delete a contact- Search for a contact- View all contacts

 ###Technologies:
 
 Front end:- HTML- CSS- JavaScript
 Pages:- index.html
 I want 3 sections:-Header:

 i want the title Address Book on the left and 3 buttons on the right:
 Home, AddContact, ViewContacts. Align the title to the left and the
 buttons to the right.
 
 -main section:
 A header "Welcome to Address Book application"
 A paragraph "You can add, delete, search and view contacts here"
 Two cards with a button each: Add Contact, View Contacts. Each
 card hasa small description and a button. the cards must be aligned in
 the center of the page.
 Each of the elements must be aligned in the center of the page and
 must be
one below the other.

-footer:
 A paragraph "Address Book. Copyright 2024 "
 - add.html- A form with the following fields:
 - First Name
 - Last Name
 - Email- Phone- Address- notes- A submit button- A clear button- The form must be aligned in the center of the page.
 the header and footer must be same as in index.html

 - view.html- A table called as contactListwith the following columns:- First Name- Last Name- Email- Phone- Address- Action (Delete) (Edit)- The table must be aligned in the center of the page.- The header and footer must be same as in index.html
 
 -edit.html- A form with the same fields as in add.html name editContact- The form must be aligned in the center of the page.- The header and footer must be same as in index.html- The form must be prefilled with the contact data to be edited


Back end:- 
Create a model class (POJO) called Contact with the following fields: 
- id (primary key)
- firstName
- lastName
- email
- phone
- address
- notes

- Create a DAO class called ContactDAO with the following methods:
- addContact(Contact contact)
- deleteContact(int id)
- getContactById(int id)
- getAllContacts()
- updateContact(Contact contact)
- also make sure the dao class has the jdbc connection code to connect to the database
- i am using mysql connector jar file to connect to the database
- username: 
- password: root
- dont forget to use class.forname() to load the mysql connector jar file


 Servlet:-
   JSP
   JDBC

 Database:- 

 MySQL
 - create a database called addressbook-create a table called contacts with the following columns:
 - id (primary key)
 - firstName
 - lastName
 - email
 - phone
 - address
 - notes
 - 5 rows of data must be inserted in the table 
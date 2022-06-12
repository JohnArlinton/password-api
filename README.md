# passwords-api
### REST API in Node JS for save, delete, update and get passwords in float memory.


- The idea behind the structure for the API was to use an aproach more like Clean Architecture, that allows any developer read it without problems and separate the different layers on the project. It was write it in TypeScript for a more composition and less tendency errors.

## Description Project
* Routes Folder: Shows the controllers for each method that we need to access through the FrontEnd (Get, Post, Put, Delete).
* Services folder: Here goes all the classes that connect to the database in this case the Mock folder.
* Middleware folder: In the middleware goes every interruption planned for do any prevous work with the methods before reach the database connection.
* Validations folder: It helps to validate each entry of data if the url, username, password, etc, are correct.
* Models folder: This folder contains the models for the objects used in the mapping of information. 
* Dao folder: Here goes the interfaces for the connection to the data base in this case float memory.
* Mock folder: In the Mock goes the template or mockup of the objects that we want to store.


## Development server

Run `npm install` for a dev server, then run `npm run dev`. The application will automatically reload and start to listen in the 3000 port.


## Find me 
[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg' alt='github' height='40'>](https://github.com/johnarlinton)  [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg' alt='instagram' height='40'>](https://www.instagram.com/johnarlinton/)  



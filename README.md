* 1. Have NodeJS server render views/index.ejs, when the client requests '/';
* 2. In the client codes, have js code that asks the user for their name and store it in var name;
* 3. Have the client send info to the server EMIT - "got_new_user" and pass name to server;
* 4. Server listen for an event "got_new_user" and broadcast an event called "new_user" to clients and pass the name;
* 4.1 Store the name/session of the new user in a hash;
* 4.2 To the user who logged in, the server emits an event called 'existing_users' with all the users data;
* 5. Client listens to an event "new_user" and when it gets triggered, render a box with the new user info;
* 6. Have the server for an event called "disconnect" and when it gets triggered, broadcast to all clients an event 'disconnect_user' with some data ->       name and session id;
* 7. Have the client listen for event "disconnect_user" and remove the box for that user when the event is triggered (passes the name + session id);

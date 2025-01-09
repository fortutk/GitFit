# Sprint 3

Fort Hunter

github: fortutk

group Name: GitFit

### What you planned to do

Issue [#37](https://github.com/utk-cs340-fall22/GitFit/issues/37) - Connect sign up to back end

Issue [#38](https://github.com/utk-cs340-fall22/GitFit/issues/38) - Connect log in to back end

Issue [#39](https://github.com/utk-cs340-fall22/GitFit/issues/39) - add encryption to password in database

Issue [#40](https://github.com/utk-cs340-fall22/GitFit/issues/40) - set up sending password reset emails

### What you did not do
I did no add encryption to the passwords in the database.  I realized that firebase authentication can handle the passwords and there is no need to store them in the database.  Since we won't have them in the database we won't need to encrypt them.

### What problems you encountered
The biggest problem I encountered was correctly setting up our firebase backend.  I thought I had correctly set it up during the last sprint but I realized that I had not.  I had to go back in and pretty much change everything on our firebase project to get it to work with our website.  

### Issues you worked on
Issue [#37](https://github.com/utk-cs340-fall22/GitFit/issues/37) - Connect sign up to back end

Issue [#38](https://github.com/utk-cs340-fall22/GitFit/issues/38) - Connect log in to back end

Issue [#40](https://github.com/utk-cs340-fall22/GitFit/issues/40) - set up sending password reset emails

### Files you worked on
-Fort/src/App.js
-Fort/src/login.js
-Fort/src/signUp.js
-Fort/src/forgotP.js
-Fort/src/index.js



### What you accomplished
I was able to succesfully connect our log in pages with the backend.  Whenever a user signs up they show up in our database.  Once they are in our database they are able to log in on the log in page.  The user is also able to request to change thier password.  When they input their email the backend will send an email to them containing a link that they can change their password with.
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import login from './login'
import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
     getAuth,
     signInWithPopup,
     signInWithEmailAndPassword,
      createUserWithEmailAndPassword,
      sendPasswordResetEmail,
     signOut,
    } from "firebase/auth";
    import {
     getFirestore,
     query,
     getDocs,
     collection,
      where,
      addDoc,
    } from "firebase/firestore";


//Firebase info
const firebaseConfig = {
  apiKey: "AIzaSyBpXW4PRvBgm_OdHZrNBan8hYvISW3qdOs",
  authDomain: "gitfit-16360.firebaseapp.com",
  projectId: "gitfit-16360",
  storageBucket: "gitfit-16360.appspot.com",
  messagingSenderId: "850707313995",
  appId: "1:850707313995:web:2c4eea72090c04a700a4ce",
  measurementId: "G-GL9EESM2YB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app)

const auth = getAuth();
const db = getFirestore(app);

export default class signUp extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: ""
    }

     registerWithEmailAndPassword = 
     async (firstName,lastName, username, email, password) => {
        try {
          const res = 
          await createUserWithEmailAndPassword(auth, email, password);

          console.log("Succesfully signed in")
          const user = res.user

          await addDoc(collection(db, "users"), {
            uid: user.uid,
            firstName,
            lastName,
            username,
            authProvider: "local",
            email,
          });
          
        } catch (err) {
          console.error(err);
          alert(err.message);
        }
      };

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    clear = () => {
        this.setState({
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: ""
        })
    }
    checkFirstName = () => {
        if(this.state.firstName.length < 1){
          alert("Please enter a first name");
          return false
        }
    }
    checkLastName = () => {
        if(this.state.lastName.length < 1){
          alert("Please enter a last name");
          return false
        }
    }

    checkUsername = () => {
        if(this.state.username.length < 3){
          alert("username must be at least 3 characters long");
          return false
        }
        return true;
    }
    checkPassword = () => {
        if(this.state.password.length < 8){
          alert("Password must be at least 8 characters long");
          return false
        }
        return true;
    }
    checkEmail = () => {
        if(this.state.email.indexOf("@") === -1){
            alert("Invalid email")
            return false;
        }
        return true;
    }

    onSubmit = e => {
        e.preventDefault();
        if(this.checkFirstName() == false){
            this.clear()
            return
        }
        if(this.checkLastName() == false){
            this.clear()
            return 
        }
        if(this.checkUsername() == false){
            this.clear()
            return
        }
        if(this.checkEmail() == false){
            this.clear()
            return
        }
        if(this.checkPassword() == false){
            this.clear()
            return
        }

        this.registerWithEmailAndPassword(this.state.firstName, this.state.lastName,
             this.state.username, this.state.email, this.state.password)
        }

    render(){
        return(
            <form style ={{display: "block", 
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto"}}>
                <h1 style={{color: "#1976d2",
    fontFamily: "Arial",
    fontWeight: 400,
    fontSize: "1 em",
    lineHeight: "1.4375 em",
    letterSpacing: "0.00938 em",
    padding: 0}}>New to GitFit?</h1>
                <h2 style={{color: "#00000099",
    fontFamily: "Arial",
    fontWeight: 400,
    fontSize: "1 em",
    lineHeight: "1.4375 em",
    letterSpacing: "0.00938 em",
    padding: 0}} >Sign up here</h2>
                 <Box  
                component="form"
                sx={{
                  '& > :not(style)': { m: 2, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
                 <TextField id="standard-basic" 
                 name = "firstName"
                label="First Name" 
                variant="standard"
               value = {this.state.firstName}
                onChange = {e => this.change(e)}
                size = "small"
                 /> 
                 <br />

                 <TextField id="standard-basic" 
                 name = "lastName"
                label="Last Name" 
                variant="standard"
               value = {this.state.lastName}
                onChange = {e => this.change(e)}
                size = "small"
                 /> 
                 <br />

                 <TextField id="standard-basic" 
                 name = "username"
                label="Username" 
                variant="standard"
               value = {this.state.username}
                onChange = {e => this.change(e)}
                size = "small"
                 /> 
                 <br />

                 <TextField id="standard-basic" 
                 name = "email"
                label="Email" 
                variant="standard"
               value = {this.state.email}
                onChange = {e => this.change(e)}
                size = "small"
                />
                <br />

                <TextField id="standard-basic" 
                 name = "password"
                 type = "password"
                label="Password" 
                variant="standard"
               value = {this.state.password}
                onChange = {e => this.change(e)}
                size = "small"
                 /> 
                 </Box>   
                <Button variant = "contained" 
                onClick ={(e) => this.onSubmit(e)}>Submit</Button>
                <br/>
                <br/>
                <Link style={{textDecoration: 'none'}} to="/login">Already Have an account?</Link>
            </form>
        )
    }

}
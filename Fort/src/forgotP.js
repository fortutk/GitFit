import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {BrowserRouter as Router, Link} from 'react-router-dom';
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

const firebaseConfig = {
    apiKey: "AIzaSyBpXW4PRvBgm_OdHZrNBan8hYvISW3qdOs",
    authDomain: "gitfit-16360.firebaseapp.com",
    projectId: "gitfit-16360",
    storageBucket: "gitfit-16360.appspot.com",
    messagingSenderId: "850707313995",
    appId: "1:850707313995:web:2c4eea72090c04a700a4ce",
    measurementId: "G-GL9EESM2YB"
  };

  const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app)

const auth = getAuth();
const db = getFirestore(app);


export default class forgotP extends React.Component {
    state = {
        email: ""
    }

    changePassword = async (email) => {
            sendPasswordResetEmail(auth, email)
          .then(() => {
            console.log("Email sent!")
            // Password reset email sent!
            // ..
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("email not found")
            this.setState({
                email: ""
            })
            // ..
          });
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        this.changePassword(this.state.email)
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
    padding: 0}}>Forgot password?</h1>
                <h2 style={{color: "#00000099",
    fontFamily: "Arial",
    fontWeight: 400,
    fontSize: "1 em",
    lineHeight: "1.4375 em",
    letterSpacing: "0.00938 em",
    padding: 0}} >Enter your email and we will send you your password</h2>
                 <Box  
                component="form"
                sx={{
                  '& > :not(style)': { m: 2, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >

                 <TextField id="standard-basic" 
                 name = "email"
                label="Email" 
                variant="standard"
               value = {this.state.email}
                onChange = {e => this.change(e)}
                size = "small"
                 /> 
                 <br />
                 </Box>   
                <Button variant = "contained" 
                onClick ={(e) => this.onSubmit(e)}>Submit</Button>

                <br/>

            </form>
        )
    }

}
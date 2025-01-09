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



export default class Login extends React.Component {
    state = {
        email: "",
        password: ""
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };


    onSubmit = e => {
        e.preventDefault();
       // this.props.onSubmit(this.state)
       signInWithEmailAndPassword(auth, this.state.email, this.state.password)
       .then((userCredential) => {
         // Signed in 
         const user = userCredential.user;
         console.log(user.email, " signed in")
         // ...
       })
       .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         alert("Incorrect username or password")
         this.setState({
            email: "",
            password: ""
        })
       });
    };


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
    padding: 0}}>Welcome to GitFit</h1>
                <h2 style={{color: "#00000099",
    fontFamily: "Arial",
    fontWeight: 400,
    fontSize: "1 em",
    lineHeight: "1.4375 em",
    letterSpacing: "0.00938 em",
    padding: 0}} >Sign in here</h2>
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
                onClick ={(e) => this.onSubmit(e)}>Login</Button>
                <br/>
                <br/>
                {/* <p>Don't have an account yet?</p> */}
                <Link style={{textDecoration: 'none'}} to="/signup">
                    Don't have an account yet?
                </Link>
                <br/>
                <Link style={{textDecoration: 'none'}} to="/forgotpassword">Forgot your password?</Link>

                <br/>

            </form>
        )
    }

}
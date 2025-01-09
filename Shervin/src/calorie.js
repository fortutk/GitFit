import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default class Calorie extends React.Component {
    state = { 
        weight: "", 
        height: "",
        age: "",
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    // resets state
    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state)
        this.setState({
            weight: "",
            height: "",
            age: "", 
        })
    };

    render(){
        return(
            // creates a form
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
            padding: 0}}>Calorie Calculation</h1>
                        <h2 style={{color: "#00000099",
            fontFamily: "Arial",
            fontWeight: 400,
            fontSize: "1 em",
            lineHeight: "1.4375 em",
            letterSpacing: "0.00938 em",
            padding: 0}} >Enter your weight, age, and height to calculate the number of calories you need </h2>

                 <Box  
                component="form"
                sx={{
                  '& > :not(style)': { m: 2, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >

                {/* sets the state of the weight, height, and age to the value of the input */}

                 <TextField id="standard-basic" 
                 name = "weight"
                label="Weight (kg)" 
                variant="standard"
               value = {this.state.username}
                onChange = {e => this.change(e)}
                size = "small"
                 /> 
                 <br />

                 <TextField id="standard-basic" 
                 name = "age"
                label="Age (yrs)" 
                variant="standard"
               value = {this.state.username}
                onChange = {e => this.change(e)}
                size = "small"
                 /> 
                 <br />
               
                <TextField id="standard-basic" 
                 name = "height"
                 type = "Height"
                label="Height (cm)" 
                variant="standard"
               value = {this.state.password}
                onChange = {e => this.change(e)}
                size = "small"
                 /> 
                 </Box>   
           
                <h2>Number of calories you burn during a typical day: </h2>


                {/* calculates the number of calories you burn during a typical day given user input */}
                <h4>Sedentary (little or no exercise):</h4>
                <p>Male: {((66.47 + (13.75 * this.state.weight) + (5.003 * this.state.height) - (6.75 * this.state.age))) * 1.2}</p>
                <p>Female: {((655.1 + (9.563 * this.state.weight) + (1.850 * this.state.height) - (4.676 * this.state.age))) * 1.2}</p>
                
                <h4>Lightly active (exercise 1 to 3 days/week):</h4>
                <p>Male: {((66.47 + (13.75 * this.state.weight) + (5.003 * this.state.height) - (6.75 * this.state.age))) * 1.375}</p>
                <p>Female: {((655.1 + (9.563 * this.state.weight) + (1.850 * this.state.height) - (4.676 * this.state.age))) * 1.375}</p>

                
                <h4>Moderately active (exercise 3 to 5 days/week):</h4>
                <p>Male: {((66.47 + (13.75 * this.state.weight) + (5.003 * this.state.height) - (6.75 * this.state.age))) * 1.55}</p>
                <p>Female: {((655.1 + (9.563 * this.state.weight) + (1.850 * this.state.height) - (4.676 * this.state.age))) * 1.55}</p>

                <h4>Active (exercise 6 to 7 days/week):</h4>
                <p>Male: {((66.47 + (13.75 * this.state.weight) + (5.003 * this.state.height) - (6.75 * this.state.age))) * 1.725}</p>
                <p>Female: {((655.1 + (9.563 * this.state.weight) + (1.850 * this.state.height) - (4.676 * this.state.age))) * 1.725}</p>

                <h4>Very active (hard exercise 6 to 7 days/week):</h4>
                <p>Male: {((66.47 + (13.75 * this.state.weight) + (5.003 * this.state.height) - (6.75 * this.state.age))) * 1.9}</p>
                <p>Female: {((655.1 + (9.563 * this.state.weight) + (1.850 * this.state.height) - (4.676 * this.state.age))) * 1.9}</p>
                <br/>
               
            </form>           
        )
    }
}
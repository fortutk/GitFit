import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default class Rep extends React.Component {
	state = {
        weight: "",
		reps: ""
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
reps: ""
})
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
			padding: 0}}>1 Rep Max Tool</h1>
			<h2 style={{color: "#00000099",
			fontFamily: "Arial",
			fontWeight: 400,
			fontSize: "1 em",
			lineHeight: "1.4375 em",
			letterSpacing: "0.00938 em",
			padding: 0}} >Enter the weight and number of reps to calcualte your 1 rep max </h2>

			<Box  
			component="form"
			sx={{
				'& > :not(style)': { m: 2, width: '25ch' },
			}}
		noValidate
		autoComplete="off"
		>

		{/* sets the state of the weight and height to the value of the input */}
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
		name = "reps"
		type = "Reight"
		label="Number of reps" 
		variant="standard"
		value = {this.state.password}
	onChange = {e => this.change(e)}
	size = "small"
		/> 
		</Box>   

		<h1>Your 1 Rep Max is: </h1> 

		{/* calculates the BMI */}
	<p>{(this.state.weight / (( 1.0278 - 0.0278 * this.state.reps )))}</p>

	{/* prints the categories for BMI */}
	<h2>What is a 1 rep max: </h2>
		<h4>In weight training, your 1 rep maximum is the maximum amount of weight that a person can possibly lift for one repetition. 
            It may also be considered as the maximum amount of force that can be generated in one maximal contraction.
            One repetition maximum can be used for determining an individual's maximum strength and is the method for determining
            the winner in events such as powerlifting and weightlifting competitions. One repetition maximum can also be used as
            an upper limit, in order to determine the desired "load" for an exercise</h4>

		<br/>
		</form>
		)
}
}
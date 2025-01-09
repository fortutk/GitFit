import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default class BMI extends React.Component {
	state = {
weight: "",
		height: ""
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
height: ""
})
};

render(){
	return(
			
		<body style ={{
			color: "#000000",
			backgroundImage: "url(/workout.jpg)",
			backgroundRepeat: "noRepeat",
			backgroundAttachment: "fixed",
			backgroundSize: "100%"
		}}>
	

			<form style ={{
			display: "center", 
			textAlign: "center",
			marginLeft: "auto",
			marginRight: "auto"}}>
			<h1 style={{color: "#1976d2",
			fontFamily: "Georgia",
			fontWeight: 400,
			fontSize: "1 em",
			lineHeight: "1.4375 em",
			letterSpacing: "0.00938 em",
			padding: 0}}>BMI Calculation</h1>
			<h2 style={{color: "#00000099",
			fontFamily: "Arial",
			fontWeight: 400,
			fontSize: "1 em",
			lineHeight: "1.4375 em",
			letterSpacing: "0.00938 em",
			padding: 0}} >Enter your weight and height to calculate your Body Mass Index </h2>

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
		label="Weight (lbs)" 
		variant="standard"
		value = {this.state.username}
	onChange = {e => this.change(e)}
	size = "small"
		/> 
		<br />

		<TextField id="standard-basic" 
		name = "height"
		type = "Height"
		label="Height (in)" 
		variant="standard"
		value = {this.state.password}
	onChange = {e => this.change(e)}
	size = "small"
		/> 
		</Box>   

		<h1>Your BMI is: </h1> 

		{/* calculates the BMI */}
	<p>{(this.state.weight / ((this.state.height) * (this.state.height))) * 703}</p>

	{/* prints the categories for BMI */}
	<h2>BMI Categories: </h2>
		<h4>Underweight = less than 18.5</h4>
		<h4>Normal weight = 18.5 to 24.9</h4>
		<h4>Overweight = 25 to 29.9</h4>
		<h4>Obesity = BMI of 30 or greater</h4>

		<br/>
		</form>
		</body>
		)
}
}

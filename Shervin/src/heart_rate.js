import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default class Rate extends React.Component {
	state = {
        age: ""
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
age: ""
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
			padding: 0}}>Heart Rate </h1>
			<h2 style={{color: "#00000099",
			fontFamily: "Arial",
			fontWeight: 400,
			fontSize: "1 em",
			lineHeight: "1.4375 em",
			letterSpacing: "0.00938 em",
			padding: 0}} >Enter your age </h2>

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
		name = "age"
		label="Age (yrs)" 
		variant="standard"
		value = {this.state.username}
	onChange = {e => this.change(e)}
	size = "small"
		/> 
		<br />

		
	 
		</Box>   

		<h1>Estimated Maximum Heart Rate: </h1> 

		<h4>One way of checking physical activity intensity is to determine whether your pulse or heart rate is within the target zone during physical activity.</h4>

		{/* calculates the max heart rate */}
	<p>{(220-this.state.age)} bpm</p>

	
	
	<h1>Target Heart Rate: </h1>


		<h4>For moderate-intensity physical activity, your target heart rate should be between 64% and 76%
		of your maximum heart rate. You can estimate your maximum heart rate based on your age</h4>
		<p>{(220-this.state.age)*.64 } bpm -	{(220-this.state.age)*.76 } bpm	</p>


		<h4>For vigorous-intensity physical activity, your target heart rate should be between 77% and 93% of your maximum heart rate. </h4>
		<p>{(220-this.state.age)*.77 } bpm -	{(220-this.state.age)*.93 } bpm	</p>
		
		<br/>
		</form>
		)
}
}
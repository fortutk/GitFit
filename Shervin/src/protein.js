import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default class Protein extends React.Component {
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
			padding: 0}}>Protein Calculation</h1>
			<h2 style={{color: "#00000099",
			fontFamily: "Arial",
			fontWeight: 400,
			fontSize: "1 em",
			lineHeight: "1.4375 em",
			letterSpacing: "0.00938 em",
			padding: 0}} >Enter your weight to calculate the amount of protein you need </h2>

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
		</Box>   

		<h1>The minimum number of protein you need is: </h1> 

		{/* calculates the BMI */}
	<p>{this.state.weight * .36}</p>

	{/* prints the categories for BMI */}
	<h2>Where does protein come from: </h2>
		
		<h4>The healthiest protein options are plant sources, such as soy, nuts, seeds, beans and lentils; lean meats, such as skinless,
             white-meat chicken or turkey; a variety of fish or seafood; egg whites; or low-fat dairy.

Meet your dietary protein needs with these whole foods versus supplements, which are no more effective than food as long as energy intake is adequate for building lean mass.

</h4>

		<br/>
		</form>
		</body>
		)
}
}

import React from 'react';

export default class Form extends React.Component {
    state = {
       Goal: "",
       DesiredBody: "", 
       DaysAWeek: "",
       HeartRate: ""
    };
    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    
    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
       this.props.onSubmit(this.state);
        this.setState({
            Goal:"",
            DesiredBody:"",
            DaysAWeek:"",
            HeartRate:""
            
        });
    };

    render() {
        return ( 
            <form>
                <h1>Workout Goals</h1>
                
                <input
                name="Goal"
                placeholder="Goal"
                value={this.state.Goal} 
                onChange={e => this.change(e)}
                 />
                 <br />
                 <input 
                name="DesiredBody"
                placeholder ="Desired Body"
                value={this.state.DesiredBody} 
                onChange={e => this.change(e)}
                 />
                 <br />
                 <input 
                name="DaysAWeek"
                placeholder ="Days A Week"
                value={this.state.DaysAWeek} 
                onChange={e => this.change(e)}
                 />
                 <br />
                 <input 
                name="HeartRate"
                placeholder ="Heart Rate"
                value={this.state.HeartRate} 
                onChange={e => this.change(e)}
                 />
                 <br />
                
                <button onClick={e => this.onSubmit(e)}>Lets Git Fit</button>
                
                <h5>
                    Examples of Goal: Gain, Lose, Maintain
                    <br />
                    Examples of Desired Body: Stronger, Shred, Cut
                    <br />
                    Days a Week: Best 4-5 (if not specified will automatically be 3)
                    <br />
                    sets x reps
                </h5>
            </form> 
            
        );

    } 
}

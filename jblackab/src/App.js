import React, {Component} from 'react';
import "./App.css";
import Form from "./Form";
//import{BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";


class App extends Component {

  state = {
    fields: {}
  }; 

  onSubmit = fields => {
    this.setState({ fields });
    console.log("App comp got: ", fields);
  };

  render(){

    const print_workout = () => {
      if(this.state.fields.DaysAWeek === '4'){
        if(this.state.fields.Goal === "Gain" || this.state.fields.Goal === "gain"){
          if(this.state.fields.DesiredBody === "Stronger" || this.state.fields.DesiredBody === "stronger"){
            return <p>
              Day 1
              <br/> 
              Squat: 4 x 4  |   87.5% of ORM
              <br/> 
              Leg Extension: 4 x 12
              <br/> 
              Front Squat: 3 x 8
              <br/> 
              Leg Curl: 4 x 10
              <br/> 
              Calf Raise: 4 x 12
              <br/> 
              Some Form of Curl: 2 x 15
              <br/> 
              Bicep Curls (Form can vary): 2 x 8
              <br/> 
              Hanging Leg raise: 3 x 12
              <br/> 
              <br/> 
            Day 2:
            <br/> 
              Bench Press: 3 x 4   |  85% of ORM
              <br/> 
              Overhead Press/raised bench press (alternating through the weeks): 4 x 15
              <br/> 
              Lateral raises, either Egyptian or dumbbell: 3 x 15
              <br/> 
              Lateral Pulldown: 4 x 10
              <br/> 
              T-Bar rows or Bent over Chest Rows (with Chest pinned against Bench): 3 x 10
              <br/> 
              Romanian Deadlift or Barbell Hip Thrust: 4 x 12
              <br/> 
              Arnold Press: 4 x 8
              <br/> 
              Tricep Pressdown: 3 x 15
              <br/> 
              Shrugs (dumbbell, barbell, smith, hex, dead machine whatever you prefer): 3 x 12
              <br/> 
              <br/> 
            Day 3 (if running a 4 or 5 day a week program):
              <br/> 
              Pull ups (if able add weight, if not able go to assisted pull ups make sure to get clean reps): 3 x 8
              <br/> 
              Row (either bent over barbell or with dumb bells on an incline bench): 4 x 12
              <br/> 
              Leg Press or front squat: 4 x 12
              <br/> 
              Calf raises: 4 x 15 - 20
              <br/> 
              Upright row either cable or barbell: 3 x 15
              <br/> 
              Curls (Hammer): 3 x 15
              <br/>
              <br/>  
            Day 4:
              <br/> 
              Deadlift (If going for Strength): 4 x 4   |   82.5% of ORM
              <br/> 
              Dips: 3 x 10
              <br/> 
              Glute Ham Raise: 3 x 10
              <br/> 
              Leg Extensions: 4 x 10
              <br/> 
              Cable Pull over or Dumbell pull over: 4 x 12
              <br/> 
              Face Pull: 4 x 20
              <br/> 
              Skull Crushers: 3 x 15
              <br/>
              <br/>  
              </p>;
          }
          else if(this.state.fields.DesiredBody === "Shred" ||  this.state.fields.DesiredBody === "shred"){
            return <p>
            Day 1
            <br/> 
              Squat: 4 x 4   |  87.5% of ORM
              <br/> 
              Leg Extension: 4 x 15
              <br/> 
              Front Squat: 3 x 10
              <br/> 
              Leg Curl: 4 x 12
              <br/> 
              Calf Raise: 4 x 20
              <br/> 
              Some Form of Curl: 2 x 20
              <br/> 
              Bicep Curls (Form can vary): 3 x 8
              <br/> 
              Hanging Leg raise: 3 x 15
              <br/> 
              <br/> 
            Day 2:
            <br/> 
              Bench Press: 3 x 6  |  80% of ORM
              <br/> 
              Overhead Press/raised bench press (alternating through the weeks): 4 x 15
              <br/> 
              Lateral raises, either Egyptian or dumbbell: 3 x 15
              <br/> 
              Lateral Pulldown: 4 x 10
              <br/> 
              T-Bar rows or Bent over Chest Rows (with Chest pinned against Bench): 3 x 10
              <br/> 
              Romanian Deadlift or Barbell Hip Thrust: 4 x 12
              <br/> 
              Arnold Press: 4 x 10
              <br/> 
              Tricep Pressdown: 3 x 15
              <br/> 
              Shrugs (dumbbell, barbell, smith, hex, dead machine whatever you prefer): 3 x 12
              <br/> 
              <br/> 
            Day 3 (if running a 4 or 5 day a week program):
              <br/> 
              Pull ups (if able add weight, if not able go to assisted pull ups make sure to get clean reps): 3 x 10
              <br/> 
              Row (either bent over barbell or with dumb bells on an incline bench): 4 x 15
              <br/> 
              Leg Press or front squat: 4 x 15
              <br/> 
              Calf raises: 4 x 20
              <br/> 
              Upright row either cable or barbell: 3 x 15
              <br/> 
              Curls (Hammer): 3 x 15
              <br/>
              <br/>  
            Day 4:
              <br/> 
              Deadlift (If going for Strength): 4 x 6   |  82.5% of ORM
              <br/> 
              Dips: 3 x 10
              <br/> 
              Glute Ham Raise: 3 x 10
              <br/> 
              Leg Extensions: 4 x 10
              <br/> 
              Cable Pull over or Dumbell pull over: 4 x 12
              <br/> 
              Face Pull: 4 x 20
              <br/> 
              Skull Crushers: 3 x 15
              <br/>
              <br/>
            </p>;
          }
          else if(this.state.fields.DesiredBody === "Cut" ||  this.state.fields.DesiredBody === "cut"){
            return <p>
            Day 1
            <br/> 
              Squat: 4 x 4    |  87.5% of ORM
              <br/> 
              Leg Extension: 4 x 15
              <br/> 
              Front Squat: 3 x 10
              <br/> 
              Leg Curl: 4 x 12
              <br/> 
              Calf Raise: 4 x 20
              <br/> 
              Some Form of Curl: 2 x 20
              <br/> 
              Bicep Curls (Form can vary): 3 x 8
              <br/> 
              Hanging Leg raise: 3 x 15
              <br/> 
              <br/> 
            Day 2:
            <br/> 
              Bench Press: 3 x 6  |  80% of ORM
              <br/> 
              Overhead Press/raised bench press (alternating through the weeks): 4 x 15
              <br/> 
              Lateral raises, either Egyptian or dumbbell: 3 x 15
              <br/> 
              Lateral Pulldown: 4 x 10
              <br/> 
              T-Bar rows or Bent over Chest Rows (with Chest pinned against Bench): 3 x 10
              <br/> 
              Romanian Deadlift or Barbell Hip Thrust: 4 x 12
              <br/> 
              Arnold Press: 4 x 10
              <br/> 
              Tricep Pressdown: 3 x 15
              <br/> 
              Shrugs (dumbbell, barbell, smith, hex, dead machine whatever you prefer): 3 x 12
              <br/> 
              <br/> 
            Day 3 (if running a 4 or 5 day a week program):
              <br/> 
              Pull ups (if able add weight, if not able go to assisted pull ups make sure to get clean reps): 3 x 10
              <br/> 
              Row (either bent over barbell or with dumb bells on an incline bench): 4 x 15
              <br/> 
              Leg Press or front squat: 4 x 15
              <br/> 
              Calf raises: 4 x 20
              <br/> 
              Upright row either cable or barbell: 3 x 15
              <br/> 
              Curls (Hammer): 3 x 15
              <br/>
              <br/>  
            Day 4:
              <br/> 
              Deadlift (If going for Strength): 4 x 6   |  80% of ORM
              <br/> 
              Dips: 3 x 10
              <br/> 
              Glute Ham Raise: 3 x 10
              <br/> 
              Leg Extensions: 4 x 10
              <br/> 
              Cable Pull over or Dumbell pull over: 4 x 12
              <br/> 
              Face Pull: 4 x 20
              <br/> 
              Skull Crushers: 3 x 15
              <br/>
              <br/>
               </p>;
          }
          else return <p> error: {this.state.fields.DesiredBody} is not an acceptable input </p>
        }
        else if(this.state.fields.Goal === "Lose" || this.state.fields.Goal === "lose"){
          if(this.state.fields.DesiredBody === "Stronger" ||  this.state.fields.DesiredBody === "stronger"){
            return <p>
            Day 1
            <br/> 
              Squat: 4 x 4  |  87.5% of ORM
              <br/> 
              Leg Extension: 4 x 15
              <br/> 
              Front Squat: 3 x 10
              <br/> 
              Leg Curl: 4 x 12
              <br/> 
              Calf Raise: 4 x 20
              <br/> 
              Some Form of Curl: 2 x 20
              <br/> 
              Bicep Curls (Form can vary): 3 x 8
              <br/> 
              Hanging Leg raise: 3 x 15
              <br/> 
              <br/> 
              Cardio for 15-20 minutes keeping heart rate above {this.state.fields.HeartRate} bpm (increase over time)
              <br/>
              <br/>
            Day 2:
            <br/> 
              Bench Press: 3 x 6  |  80% of ORM
              <br/> 
              Overhead Press/raised bench press (alternating through the weeks): 4 x 15
              <br/> 
              Lateral raises, either Egyptian or dumbbell: 3 x 15
              <br/> 
              Lateral Pulldown: 4 x 10
              <br/> 
              T-Bar rows or Bent over Chest Rows (with Chest pinned against Bench): 3 x 10
              <br/> 
              Romanian Deadlift or Barbell Hip Thrust: 4 x 12
              <br/> 
              Arnold Press: 4 x 10
              <br/> 
              Tricep Pressdown: 3 x 15
              <br/> 
              Shrugs (dumbbell, barbell, smith, hex, dead machine whatever you prefer): 3 x 12
              <br/> 
              <br/>
              Cardio for 15-20 minutes keeping heart rate above {this.state.fields.HeartRate} bpm (increase over time)
              <br/>
              <br/>
            Day 3 (if running a 4 or 5 day a week program):
              <br/> 
              Pull ups (if able add weight, if not able go to assisted pull ups make sure to get clean reps): 3 x 8
              <br/> 
              Row (either bent over barbell or with dumb bells on an incline bench): 4 x 12
              <br/> 
              Leg Press or front squat: 4 x 12
              <br/> 
              Calf raises: 4 x 15 - 20
              <br/> 
              Upright row either cable or barbell: 3 x 15
              <br/> 
              Curls (Hammer): 3 x 15
              <br/>
              <br/>    
              Cardio for 15-20 minutes keeping heart rate above {this.state.fields.HeartRate} bpm (increase over time)
              <br/>
              <br/>
            Day 4:
              <br/> 
              Deadlift (If going for Strength): 4 x 4   |  82.5% of ORM
              <br/> 
              Dips: 3 x 10
              <br/> 
              Glute Ham Raise: 3 x 10
              <br/> 
              Leg Extensions: 4 x 10
              <br/> 
              Cable Pull over or Dumbell pull over: 4 x 12
              <br/> 
              Face Pull: 4 x 20
              <br/> 
              Skull Crushers: 3 x 15
              <br/>
              <br/>
            </p>;
          }
          else if(this.state.fields.DesiredBody === "Shred" ||  this.state.fields.DesiredBody === "shred"){
            return <p>
            Day 1
            <br/> 
              Squat: 4 x 4   |  87.5% of ORM
              <br/> 
              Leg Extension: 4 x 15
              <br/> 
              Front Squat: 3 x 10
              <br/> 
              Leg Curl: 4 x 12
              <br/> 
              Calf Raise: 4 x 20
              <br/> 
              Some Form of Curl: 2 x 20
              <br/> 
              Bicep Curls (Form can vary): 3 x 8
              <br/> 
              Hanging Leg raise: 3 x 15
              <br/> 
              <br/> 
              Cardio for 15-20 minutes keeping heart rate above {this.state.fields.HeartRate} bpm (increase over time)
              <br/>
              <br/>
            Day 2:
            <br/> 
              Bench Press: 3 x 6  |  82.5% of ORM
              <br/> 
              Overhead Press/raised bench press (alternating through the weeks): 4 x 15
              <br/> 
              Lateral raises, either Egyptian or dumbbell: 3 x 15
              <br/> 
              Lateral Pulldown: 4 x 10
              <br/> 
              T-Bar rows or Bent over Chest Rows (with Chest pinned against Bench): 3 x 10
              <br/> 
              Romanian Deadlift or Barbell Hip Thrust: 4 x 12
              <br/> 
              Arnold Press: 4 x 10
              <br/> 
              Tricep Pressdown: 3 x 15
              <br/> 
              Shrugs (dumbbell, barbell, smith, hex, dead machine whatever you prefer): 3 x 12
              <br/> 
              <br/> 
              Cardio for 15-20 minutes keeping heart rate above {this.state.fields.HeartRate} bpm (increase over time)
              <br/>
              <br/>
            Day 3 (if running a 4 or 5 day a week program):
              <br/> 
              Pull ups (if able add weight, if not able go to assisted pull ups make sure to get clean reps): 3 x 10
              <br/> 
              Row (either bent over barbell or with dumb bells on an incline bench): 4 x 15
              <br/> 
              Leg Press or front squat: 4 x 15
              <br/> 
              Calf raises: 4 x 20
              <br/> 
              Upright row either cable or barbell: 3 x 15
              <br/> 
              Curls (Hammer): 3 x 15
              <br/>
              <br/>  
              Cardio for 15-20 minutes keeping heart rate above {this.state.fields.HeartRate} bpm (increase over time)
              <br/>
              <br/>
            Day 4:
              <br/> 
              Deadlift (If going for Strength): 4 x 6  |  82.5% of ORM
              <br/> 
              Dips: 3 x 10
              <br/> 
              Glute Ham Raise: 3 x 10
              <br/> 
              Leg Extensions: 4 x 10
              <br/> 
              Cable Pull over or Dumbell pull over: 4 x 12
              <br/> 
              Face Pull: 4 x 20
              <br/> 
              Skull Crushers: 3 x 15
              <br/>
              <br/>
              </p>;
          }
          else if(this.state.fields.DesiredBody === "Cut" ||  this.state.fields.DesiredBody === "cut"){
            return <p>
            Day 1
            <br/> 
              Squat: 4 x 4   |  87.5% of ORM
              <br/> 
              Leg Extension: 4 x 15
              <br/> 
              Front Squat: 3 x 10
              <br/> 
              Leg Curl: 4 x 12
              <br/> 
              Calf Raise: 4 x 20
              <br/> 
              Some Form of Curl: 2 x 20
              <br/> 
              Bicep Curls (Form can vary): 3 x 8
              <br/> 
              Hanging Leg raise: 3 x 15
              <br/> 
              <br/> 
              Cardio for 15-20 minutes keeping heart rate above {this.state.fields.HeartRate} bpm (increase over time)
              <br/>
              <br/>
            Day 2:
            <br/> 
              Bench Press: 3 x 6   |  82.5% of ORM
              <br/> 
              Overhead Press/raised bench press (alternating through the weeks): 4 x 15
              <br/> 
              Lateral raises, either Egyptian or dumbbell: 3 x 15
              <br/> 
              Lateral Pulldown: 4 x 10
              <br/> 
              T-Bar rows or Bent over Chest Rows (with Chest pinned against Bench): 3 x 10
              <br/> 
              Romanian Deadlift or Barbell Hip Thrust: 4 x 12
              <br/> 
              Arnold Press: 4 x 10
              <br/> 
              Tricep Pressdown: 3 x 15
              <br/> 
              Shrugs (dumbbell, barbell, smith, hex, dead machine whatever you prefer): 3 x 12
              <br/> 
              <br/> 
              Cardio for 15-20 minutes keeping heart rate above {this.state.fields.HeartRate} bpm (increase over time)
              <br/>
              <br/>
            Day 3 (if running a 4 or 5 day a week program):
              <br/> 
              Pull ups (if able add weight, if not able go to assisted pull ups make sure to get clean reps): 3 x 10
              <br/> 
              Row (either bent over barbell or with dumb bells on an incline bench): 4 x 15
              <br/> 
              Leg Press or front squat: 4 x 15
              <br/> 
              Calf raises: 4 x 20
              <br/> 
              Upright row either cable or barbell: 3 x 15
              <br/> 
              Curls (Hammer): 3 x 15
              <br/>
              <br/>  
              Cardio for 15-20 minutes keeping heart rate above {this.state.fields.HeartRate} bpm (increase over time)
              <br/>
              <br/>
            Day 4:
              <br/> 
              Deadlift (If going for Strength): 4 x 6 (optional)    |  80% of ORM
              <br/> 
              Dips: 3 x 10
              <br/> 
              Glute Ham Raise: 3 x 10
              <br/> 
              Leg Extensions: 4 x 10
              <br/> 
              Cable Pull over or Dumbell pull over: 4 x 12
              <br/> 
              Face Pull: 4 x 20
              <br/> 
              Skull Crushers: 3 x 15
              <br/>
              <br/>
            </p>;
          }
          else return <p> error: {this.state.fields.DesiredBody} is not an acceptable input </p>
        }
        else if(this.state.fields.Goal === "Maintain" || this.state.fields.Goal === "maintain"){
          if(this.state.fields.DesiredBody === "Stronger" ||  this.state.fields.DesiredBody === "stronger"){
            return <p>
            Day 1
              <br/> 
              Squat: 4 x 4  |  87.5% of ORM
              <br/> 
              Leg Extension: 4 x 12
              <br/> 
              Front Squat: 3 x 8
              <br/> 
              Leg Curl: 4 x 10
              <br/> 
              Calf Raise: 4 x 12
              <br/> 
              Some Form of Curl: 2 x 15
              <br/> 
              Bicep Curls (Form can vary): 2 x 8
              <br/> 
              Hanging Leg raise: 3 x 12
              <br/> 
              <br/> 
            Day 2:
            <br/> 
              Bench Press: 3 x 4    |  82.5% of ORM
              <br/> 
              Overhead Press/raised bench press (alternating through the weeks): 4 x 15
              <br/> 
              Lateral raises, either Egyptian or dumbbell: 3 x 15
              <br/> 
              Lateral Pulldown: 4 x 10
              <br/> 
              T-Bar rows or Bent over Chest Rows (with Chest pinned against Bench): 3 x 10
              <br/> 
              Romanian Deadlift or Barbell Hip Thrust: 4 x 12
              <br/> 
              Arnold Press: 4 x 8
              <br/> 
              Tricep Pressdown: 3 x 15
              <br/> 
              Shrugs (dumbbell, barbell, smith, hex, dead machine whatever you prefer): 3 x 12
              <br/> 
              <br/> 
            Day 3 (if running a 4 or 5 day a week program):
              <br/> 
              Pull ups (if able add weight, if not able go to assisted pull ups make sure to get clean reps): 3 x 8
              <br/> 
              Row (either bent over barbell or with dumb bells on an incline bench): 4 x 12
              <br/> 
              Leg Press or front squat: 4 x 12
              <br/> 
              Calf raises: 4 x 15 - 20
              <br/> 
              Upright row either cable or barbell: 3 x 15
              <br/> 
              Curls (Hammer): 3 x 15
              <br/>
              <br/>  
            Day 4:
              <br/> 
              Deadlift (If going for Strength): 4 x 4   |  85% of ORM
              <br/> 
              Dips: 3 x 10
              <br/> 
              Glute Ham Raise: 3 x 10
              <br/> 
              Leg Extensions: 4 x 10
              <br/> 
              Cable Pull over or Dumbell pull over: 4 x 12
              <br/> 
              Face Pull: 4 x 20
              <br/> 
              Skull Crushers: 3 x 15
              <br/>
              <br/>   
            </p>;
          }
          else if(this.state.fields.DesiredBody === "Shred" ||  this.state.fields.DesiredBody === "shred"){
            return <p>
            Day 1
            <br/> 
              Squat: 4 x 4   |  87.5% of ORM
              <br/> 
              Leg Extension: 4 x 15
              <br/> 
              Front Squat: 3 x 10
              <br/> 
              Leg Curl: 4 x 12
              <br/> 
              Calf Raise: 4 x 20
              <br/> 
              Some Form of Curl: 2 x 20
              <br/> 
              Bicep Curls (Form can vary): 3 x 8
              <br/> 
              Hanging Leg raise: 3 x 15
              <br/> 
              <br/> 
            Day 2:
            <br/> 
              Bench Press: 3 x 6   |  80% of ORM
              <br/> 
              Overhead Press/raised bench press (alternating through the weeks): 4 x 15
              <br/> 
              Lateral raises, either Egyptian or dumbbell: 3 x 15
              <br/> 
              Lateral Pulldown: 4 x 10
              <br/> 
              T-Bar rows or Bent over Chest Rows (with Chest pinned against Bench): 3 x 10
              <br/> 
              Romanian Deadlift or Barbell Hip Thrust: 4 x 12
              <br/> 
              Arnold Press: 4 x 10
              <br/> 
              Tricep Pressdown: 3 x 15
              <br/> 
              Shrugs (dumbbell, barbell, smith, hex, dead machine whatever you prefer): 3 x 12
              <br/> 
              <br/> 
            Day 3 (if running a 4 or 5 day a week program):
              <br/> 
              Pull ups (if able add weight, if not able go to assisted pull ups make sure to get clean reps): 3 x 10
              <br/> 
              Row (either bent over barbell or with dumb bells on an incline bench): 4 x 15
              <br/> 
              Leg Press or front squat: 4 x 15
              <br/> 
              Calf raises: 4 x 20
              <br/> 
              Upright row either cable or barbell: 3 x 15
              <br/> 
              Curls (Hammer): 3 x 15
              <br/>
              <br/>  
            Day 4:
              <br/> 
              Deadlift (If going for Strength): 4 x 6   |  77.5% of ORM
              <br/> 
              Dips: 3 x 10
              <br/> 
              Glute Ham Raise: 3 x 10
              <br/> 
              Leg Extensions: 4 x 10
              <br/> 
              Cable Pull over or Dumbell pull over: 4 x 12
              <br/> 
              Face Pull: 4 x 20
              <br/> 
              Skull Crushers: 3 x 15
              <br/>
              <br/>
            </p>;
          }
          else if(this.state.fields.DesiredBody === "Cut" ||  this.state.fields.DesiredBody === "cut"){
            return <p>
            Day 1
            <br/> 
              Squat: 4 x 4   |  87.5% of ORM
              <br/> 
              Leg Extension: 4 x 15
              <br/> 
              Front Squat: 3 x 10
              <br/> 
              Leg Curl: 4 x 12
              <br/> 
              Calf Raise: 4 x 20
              <br/> 
              Some Form of Curl: 2 x 20
              <br/> 
              Bicep Curls (Form can vary): 3 x 8
              <br/> 
              Hanging Leg raise: 3 x 15
              <br/> 
              <br/> 
            Day 2:
            <br/> 
              Bench Press: 3 x 6   |  82.5% of ORM
              <br/> 
              Overhead Press/raised bench press (alternating through the weeks): 4 x 15
              <br/> 
              Lateral raises, either Egyptian or dumbbell: 3 x 15
              <br/> 
              Lateral Pulldown: 4 x 10
              <br/> 
              T-Bar rows or Bent over Chest Rows (with Chest pinned against Bench): 3 x 10
              <br/> 
              Romanian Deadlift or Barbell Hip Thrust: 4 x 12
              <br/> 
              Arnold Press: 4 x 10
              <br/> 
              Tricep Pressdown: 3 x 15
              <br/> 
              Shrugs (dumbbell, barbell, smith, hex, dead machine whatever you prefer): 3 x 12
              <br/> 
              <br/> 
            Day 3 (if running a 4 or 5 day a week program):
              <br/> 
              Pull ups (if able add weight, if not able go to assisted pull ups make sure to get clean reps): 3 x 10
              <br/> 
              Row (either bent over barbell or with dumb bells on an incline bench): 4 x 15
              <br/> 
              Leg Press or front squat: 4 x 15
              <br/> 
              Calf raises: 4 x 20
              <br/> 
              Upright row either cable or barbell: 3 x 15
              <br/> 
              Curls (Hammer): 3 x 15
              <br/>
              <br/>  
            Day 4:
              <br/> 
              Deadlift (If going for Strength): 4 x 6   |  77.5% of ORM
              <br/> 
              Dips: 3 x 10
              <br/> 
              Glute Ham Raise: 3 x 10
              <br/> 
              Leg Extensions: 4 x 10
              <br/> 
              Cable Pull over or Dumbell pull over: 4 x 12
              <br/> 
              Face Pull: 4 x 20
              <br/> 
              Skull Crushers: 3 x 15
              <br/>
              <br/> 
            </p>;
          }
          else return <p> error: {this.state.fields.DesiredBody} is not an acceptable input </p>
        }
        else return <p> error: {this.state.fields.Goal} is not an acceptable input </p> 
      }
      else if(this.state.fields.DaysAWeek === '5'){
        if(this.state.fields.Goal === "Gain" || this.state.fields.Goal === "gain"){
          if(this.state.fields.DesiredBody === "Stronger" ||  this.state.fields.DesiredBody === "stronger"){
            return <p>
            Day 1
              <br/> 
              Squat: 4 x 4  |   87.5% of ORM
              <br/> 
              Leg Extension: 4 x 12
              <br/> 
              Front Squat: 3 x 8
              <br/> 
              Leg Curl: 4 x 10
              <br/> 
              Calf Raise: 4 x 12
              <br/> 
              Some Form of Curl: 2 x 15
              <br/> 
              Bicep Curls (Form can vary): 2 x 8
              <br/> 
              Hanging Leg raise: 3 x 12
              <br/> 
              <br/> 
            Day 2:
            <br/> 
              Bench Press: 3 x 4   |  85% of ORM
              <br/> 
              Overhead Press/raised bench press (alternating through the weeks): 4 x 15
              <br/> 
              Lateral raises, either Egyptian or dumbbell: 3 x 15
              <br/> 
              Lateral Pulldown: 4 x 10
              <br/> 
              T-Bar rows or Bent over Chest Rows (with Chest pinned against Bench): 3 x 10
              <br/> 
              Romanian Deadlift or Barbell Hip Thrust: 4 x 12
              <br/> 
              Arnold Press: 4 x 8
              <br/> 
              Tricep Pressdown: 3 x 15
              <br/> 
              Shrugs (dumbbell, barbell, smith, hex, dead machine whatever you prefer): 3 x 12
              <br/> 
              <br/> 
            Day 3 (if running a 4 or 5 day a week program):
              <br/> 
              Pull ups (if able add weight, if not able go to assisted pull ups make sure to get clean reps): 3 x 8
              <br/> 
              Row (either bent over barbell or with dumb bells on an incline bench): 4 x 12
              <br/> 
              Leg Press or front squat: 4 x 12
              <br/> 
              Calf raises: 4 x 15 - 20
              <br/> 
              Upright row either cable or barbell: 3 x 15
              <br/> 
              Curls (Hammer): 3 x 15
              <br/>
              <br/>  
            Day 4:
              <br/> 
              Deadlift (If going for Strength): 4 x 4   |   82.5% of ORM
              <br/> 
              Dips: 3 x 10
              <br/> 
              Glute Ham Raise: 3 x 10
              <br/> 
              Leg Extensions: 4 x 10
              <br/> 
              Cable Pull over or Dumbell pull over: 4 x 12
              <br/> 
              Face Pull: 4 x 20
              <br/> 
              Skull Crushers: 3 x 15
              <br/>
              <br/> 
            Day 5 (run if you are working 5 days a week):
              <br/> 
              Overhead Press: 4 x 10
              <br/> 
              Egyptian Lateral raise: 4 x 12
              <br/> 
              Seated row: 3 x 12
              <br/> 
              Hip Abduction: 3 x 20
              <br/> 
              Dumbbell Curl: 3 x 12
              <br/> 
              Crunches: 3 x 15
              <br/> 
              Calf raises: 3 x 12
              <br/> 
              Push Ups: AMRAP for 2 sets
            </p>;
          }
          else if(this.state.fields.DesiredBody === "Shred" || this.state.fields.DesiredBody === "shred"){
            return <p>
            Day 1
            <br/> 
              Squat: 4 x 4   |  87.5% of ORM
              <br/> 
              Leg Extension: 4 x 15
              <br/> 
              Front Squat: 3 x 10
              <br/> 
              Leg Curl: 4 x 12
              <br/> 
              Calf Raise: 4 x 20
              <br/> 
              Some Form of Curl: 2 x 20
              <br/> 
              Bicep Curls (Form can vary): 3 x 8
              <br/> 
              Hanging Leg raise: 3 x 15
              <br/> 
              <br/> 
            Day 2:
            <br/> 
              Bench Press: 3 x 6  |  80% of ORM
              <br/> 
              Overhead Press/raised bench press (alternating through the weeks): 4 x 15
              <br/> 
              Lateral raises, either Egyptian or dumbbell: 3 x 15
              <br/> 
              Lateral Pulldown: 4 x 10
              <br/> 
              T-Bar rows or Bent over Chest Rows (with Chest pinned against Bench): 3 x 10
              <br/> 
              Romanian Deadlift or Barbell Hip Thrust: 4 x 12
              <br/> 
              Arnold Press: 4 x 10
              <br/> 
              Tricep Pressdown: 3 x 15
              <br/> 
              Shrugs (dumbbell, barbell, smith, hex, dead machine whatever you prefer): 3 x 12
              <br/> 
              <br/> 
            Day 3 (if running a 4 or 5 day a week program):
              <br/> 
              Pull ups (if able add weight, if not able go to assisted pull ups make sure to get clean reps): 3 x 10
              <br/> 
              Row (either bent over barbell or with dumb bells on an incline bench): 4 x 15
              <br/> 
              Leg Press or front squat: 4 x 15
              <br/> 
              Calf raises: 4 x 20
              <br/> 
              Upright row either cable or barbell: 3 x 15
              <br/> 
              Curls (Hammer): 3 x 15
              <br/>
              <br/>  
            Day 4:
              <br/> 
              Deadlift (If going for Strength): 4 x 6   |  82.5% of ORM
              <br/> 
              Dips: 3 x 10
              <br/> 
              Glute Ham Raise: 3 x 10
              <br/> 
              Leg Extensions: 4 x 10
              <br/> 
              Cable Pull over or Dumbell pull over: 4 x 12
              <br/> 
              Face Pull: 4 x 20
              <br/> 
              Skull Crushers: 3 x 15
              <br/>
              <br/>
            Day 5 (run if you are working 5 days a week):
              <br/> 
              Overhead Press: 4 x 15
              <br/> 
              Egyptian Lateral raise: 4 x 12
              <br/> 
              Seated row: 3 x 15
              <br/> 
              Hip Abduction: 4 x 20
              <br/> 
              Dumbbell Curl: 3 x 15
              <br/> 
              Crunches: 3 x 15
              <br/> 
              Calf raises: 3 x 15
              <br/> 
              Push Ups: AMRAP for 2 sets
            </p>;
          }
          else if(this.state.fields.DesiredBody === "Cut" || this.state.fields.DesiredBody === "cut"){
            return <p>
            Day 1
              <br/> 
              Squat: 4 x 4    |  87.5% of ORM
              <br/> 
              Leg Extension: 4 x 15
              <br/> 
              Front Squat: 3 x 10
              <br/> 
              Leg Curl: 4 x 12
              <br/> 
              Calf Raise: 4 x 20
              <br/> 
              Some Form of Curl: 2 x 20
              <br/> 
              Bicep Curls (Form can vary): 3 x 8
              <br/> 
              Hanging Leg raise: 3 x 15
              <br/> 
              <br/> 
            Day 2:
            <br/> 
              Bench Press: 3 x 6  |  80% of ORM
              <br/> 
              Overhead Press/raised bench press (alternating through the weeks): 4 x 15
              <br/> 
              Lateral raises, either Egyptian or dumbbell: 3 x 15
              <br/> 
              Lateral Pulldown: 4 x 10
              <br/> 
              T-Bar rows or Bent over Chest Rows (with Chest pinned against Bench): 3 x 10
              <br/> 
              Romanian Deadlift or Barbell Hip Thrust: 4 x 12
              <br/> 
              Arnold Press: 4 x 10
              <br/> 
              Tricep Pressdown: 3 x 15
              <br/> 
              Shrugs (dumbbell, barbell, smith, hex, dead machine whatever you prefer): 3 x 12
              <br/> 
              <br/> 
            Day 3 (if running a 4 or 5 day a week program):
              <br/> 
              Pull ups (if able add weight, if not able go to assisted pull ups make sure to get clean reps): 3 x 10
              <br/> 
              Row (either bent over barbell or with dumb bells on an incline bench): 4 x 15
              <br/> 
              Leg Press or front squat: 4 x 15
              <br/> 
              Calf raises: 4 x 20
              <br/> 
              Upright row either cable or barbell: 3 x 15
              <br/> 
              Curls (Hammer): 3 x 15
              <br/>
              <br/>  
            Day 4:
              <br/> 
              Deadlift (If going for Strength): 4 x 6   |  80% of ORM
              <br/> 
              Dips: 3 x 10
              <br/> 
              Glute Ham Raise: 3 x 10
              <br/> 
              Leg Extensions: 4 x 10
              <br/> 
              Cable Pull over or Dumbell pull over: 4 x 12
              <br/> 
              Face Pull: 4 x 20
              <br/> 
              Skull Crushers: 3 x 15
              <br/>
              <br/>
            Day 5 (run if you are working 5 days a week):
              <br/> 
              Overhead Press: 4 x 15
              <br/> 
              Egyptian Lateral raise: 4 x 12
              <br/> 
              Seated row: 3 x 15
              <br/> 
              Hip Abduction: 4 x 20
              <br/> 
              Dumbbell Curl: 3 x 15
              <br/> 
              Crunches: 3 x 15
              <br/> 
              Calf raises: 3 x 15
              <br/> 
              Push Ups: AMRAP for 2 sets
            </p>;
          }
          else return <p> error: {this.state.fields.DesiredBody} is not an acceptable input </p>
        }
        else if(this.state.fields.Goal === "Lose" || this.state.fields.Goal === "lose"){
          if(this.state.fields.DesiredBody === "Stronger" || this.state.fields.DesiredBody === "stronger"){
            return <p>
            Day 1
              <br/> 
              Squat: 4 x 4  |  87.5% of ORM
              <br/> 
              Leg Extension: 4 x 15
              <br/> 
              Front Squat: 3 x 10
              <br/> 
              Leg Curl: 4 x 12
              <br/> 
              Calf Raise: 4 x 20
              <br/> 
              Some Form of Curl: 2 x 20
              <br/> 
              Bicep Curls (Form can vary): 3 x 8
              <br/> 
              Hanging Leg raise: 3 x 15
              <br/> 
              <br/> 
              Cardio for 15-20 minutes keeping heart rate above {this.state.fields.HeartRate} bpm (increase over time)
              <br/>
              <br/>
            Day 2:
            <br/> 
              Bench Press: 3 x 6  |  80% of ORM
              <br/> 
              Overhead Press/raised bench press (alternating through the weeks): 4 x 15
              <br/> 
              Lateral raises, either Egyptian or dumbbell: 3 x 15
              <br/> 
              Lateral Pulldown: 4 x 10
              <br/> 
              T-Bar rows or Bent over Chest Rows (with Chest pinned against Bench): 3 x 10
              <br/> 
              Romanian Deadlift or Barbell Hip Thrust: 4 x 12
              <br/> 
              Arnold Press: 4 x 10
              <br/> 
              Tricep Pressdown: 3 x 15
              <br/> 
              Shrugs (dumbbell, barbell, smith, hex, dead machine whatever you prefer): 3 x 12
              <br/> 
              <br/>
              Cardio for 15-20 minutes keeping heart rate above {this.state.fields.HeartRate} bpm (increase over time)
              <br/>
              <br/>
            Day 3 (if running a 4 or 5 day a week program):
              <br/> 
              Pull ups (if able add weight, if not able go to assisted pull ups make sure to get clean reps): 3 x 8
              <br/> 
              Row (either bent over barbell or with dumb bells on an incline bench): 4 x 12
              <br/> 
              Leg Press or front squat: 4 x 12
              <br/> 
              Calf raises: 4 x 15 - 20
              <br/> 
              Upright row either cable or barbell: 3 x 15
              <br/> 
              Curls (Hammer): 3 x 15
              <br/>
              <br/>    
              Cardio for 15-20 minutes keeping heart rate above {this.state.fields.HeartRate} bpm (increase over time)
              <br/>
              <br/>
            Day 4:
              <br/> 
              Deadlift (If going for Strength): 4 x 4   |  82.5% of ORM
              <br/> 
              Dips: 3 x 10
              <br/> 
              Glute Ham Raise: 3 x 10
              <br/> 
              Leg Extensions: 4 x 10
              <br/> 
              Cable Pull over or Dumbell pull over: 4 x 12
              <br/> 
              Face Pull: 4 x 20
              <br/> 
              Skull Crushers: 3 x 15
              <br/>
              <br/>
            Day 5 (run if you are working 5 days a week):
              <br/> 
              Overhead Press: 4 x 10
              <br/> 
              Egyptian Lateral raise: 4 x 12
              <br/> 
              Seated row: 3 x 12
              <br/> 
              Hip Abduction: 3 x 20
              <br/> 
              Dumbbell Curl: 3 x 12
              <br/> 
              Crunches: 3 x 15
              <br/> 
              Calf raises: 3 x 12
              <br/> 
              Push Ups: AMRAP for 2 sets
              <br/>
              <br/>
              Cardio for 15-20 minutes keeping heart rate above {this.state.fields.HeartRate} bpm (increase over time)
              <br/>
              <br/>
            </p>;
          }
          else if(this.state.fields.DesiredBody === "Shred" || this.state.fields.DesiredBody === "shred"){
            return <p>
            Day 1
              <br/> 
              Squat: 4 x 4   |  87.5% of ORM
              <br/> 
              Leg Extension: 4 x 15
              <br/> 
              Front Squat: 3 x 10
              <br/> 
              Leg Curl: 4 x 12
              <br/> 
              Calf Raise: 4 x 20
              <br/> 
              Some Form of Curl: 2 x 20
              <br/> 
              Bicep Curls (Form can vary): 3 x 8
              <br/> 
              Hanging Leg raise: 3 x 15
              <br/> 
              <br/> 
              Cardio for 15-20 minutes keeping heart rate above {this.state.fields.HeartRate} bpm (increase over time)
              <br/>
              <br/>
            Day 2:
            <br/> 
              Bench Press: 3 x 6  |  82.5% of ORM
              <br/> 
              Overhead Press/raised bench press (alternating through the weeks): 4 x 15
              <br/> 
              Lateral raises, either Egyptian or dumbbell: 3 x 15
              <br/> 
              Lateral Pulldown: 4 x 10
              <br/> 
              T-Bar rows or Bent over Chest Rows (with Chest pinned against Bench): 3 x 10
              <br/> 
              Romanian Deadlift or Barbell Hip Thrust: 4 x 12
              <br/> 
              Arnold Press: 4 x 10
              <br/> 
              Tricep Pressdown: 3 x 15
              <br/> 
              Shrugs (dumbbell, barbell, smith, hex, dead machine whatever you prefer): 3 x 12
              <br/> 
              <br/> 
              Cardio for 15-20 minutes keeping heart rate above {this.state.fields.HeartRate} bpm (increase over time)
              <br/>
              <br/>
            Day 3 (if running a 4 or 5 day a week program):
              <br/> 
              Pull ups (if able add weight, if not able go to assisted pull ups make sure to get clean reps): 3 x 10
              <br/> 
              Row (either bent over barbell or with dumb bells on an incline bench): 4 x 15
              <br/> 
              Leg Press or front squat: 4 x 15
              <br/> 
              Calf raises: 4 x 20
              <br/> 
              Upright row either cable or barbell: 3 x 15
              <br/> 
              Curls (Hammer): 3 x 15
              <br/>
              <br/>  
              Cardio for 15-20 minutes keeping heart rate above {this.state.fields.HeartRate} bpm (increase over time)
              <br/>
              <br/>
            Day 4:
              <br/> 
              Deadlift (If going for Strength): 4 x 6  |  82.5% of ORM
              <br/> 
              Dips: 3 x 10
              <br/> 
              Glute Ham Raise: 3 x 10
              <br/> 
              Leg Extensions: 4 x 10
              <br/> 
              Cable Pull over or Dumbell pull over: 4 x 12
              <br/> 
              Face Pull: 4 x 20
              <br/> 
              Skull Crushers: 3 x 15
              <br/>
              <br/>
            Day 5 (run if you are working 5 days a week):
              <br/> 
              Overhead Press: 4 x 15
              <br/> 
              Egyptian Lateral raise: 4 x 12
              <br/> 
              Seated row: 3 x 15
              <br/> 
              Hip Abduction: 4 x 20
              <br/> 
              Dumbbell Curl: 3 x 15
              <br/> 
              Crunches: 3 x 15
              <br/> 
              Calf raises: 3 x 15
              <br/> 
              Push Ups: AMRAP for 2 sets
              <br/>
              <br/>
              Cardio for 15-20 minutes keeping heart rate above {this.state.fields.HeartRate} bpm (increase over time)
              <br/>
              <br/>
            </p>;
          }
          else if(this.state.fields.DesiredBody === "Cut" || this.state.fields.DesiredBody === "cut"){
            return <p>
            Day 1
              <br/> 
              Squat: 4 x 4   |  87.5% of ORM
              <br/> 
              Leg Extension: 4 x 15
              <br/> 
              Front Squat: 3 x 10
              <br/> 
              Leg Curl: 4 x 12
              <br/> 
              Calf Raise: 4 x 20
              <br/> 
              Some Form of Curl: 2 x 20
              <br/> 
              Bicep Curls (Form can vary): 3 x 8
              <br/> 
              Hanging Leg raise: 3 x 15
              <br/> 
              <br/> 
              Cardio for 15-20 minutes keeping heart rate above {this.state.fields.HeartRate} bpm (increase over time)
              <br/>
              <br/>
            Day 2:
            <br/> 
              Bench Press: 3 x 6   |  82.5% of ORM
              <br/> 
              Overhead Press/raised bench press (alternating through the weeks): 4 x 15
              <br/> 
              Lateral raises, either Egyptian or dumbbell: 3 x 15
              <br/> 
              Lateral Pulldown: 4 x 10
              <br/> 
              T-Bar rows or Bent over Chest Rows (with Chest pinned against Bench): 3 x 10
              <br/> 
              Romanian Deadlift or Barbell Hip Thrust: 4 x 12
              <br/> 
              Arnold Press: 4 x 10
              <br/> 
              Tricep Pressdown: 3 x 15
              <br/> 
              Shrugs (dumbbell, barbell, smith, hex, dead machine whatever you prefer): 3 x 12
              <br/> 
              <br/> 
              Cardio for 15-20 minutes keeping heart rate above {this.state.fields.HeartRate} bpm (increase over time)
              <br/>
              <br/>
            Day 3 (if running a 4 or 5 day a week program):
              <br/> 
              Pull ups (if able add weight, if not able go to assisted pull ups make sure to get clean reps): 3 x 10
              <br/> 
              Row (either bent over barbell or with dumb bells on an incline bench): 4 x 15
              <br/> 
              Leg Press or front squat: 4 x 15
              <br/> 
              Calf raises: 4 x 20
              <br/> 
              Upright row either cable or barbell: 3 x 15
              <br/> 
              Curls (Hammer): 3 x 15
              <br/>
              <br/>  
              Cardio for 15-20 minutes keeping heart rate above {this.state.fields.HeartRate} bpm (increase over time)
              <br/>
              <br/>
            Day 4:
              <br/> 
              Deadlift (If going for Strength): 4 x 6 (optional)    |  80% of ORM
              <br/> 
              Dips: 3 x 10
              <br/> 
              Glute Ham Raise: 3 x 10
              <br/> 
              Leg Extensions: 4 x 10
              <br/> 
              Cable Pull over or Dumbell pull over: 4 x 12
              <br/> 
              Face Pull: 4 x 20
              <br/> 
              Skull Crushers: 3 x 15
              <br/>
              <br/> 
            Day 5 (run if you are working 5 days a week):
            <br/> 
              Overhead Press: 4 x 15
              <br/> 
              Egyptian Lateral raise: 4 x 12
              <br/> 
              Seated row: 3 x 15
              <br/> 
              Hip Abduction: 4 x 20
              <br/> 
              Dumbbell Curl: 3 x 15
              <br/> 
              Crunches: 3 x 15
              <br/> 
              Calf raises: 3 x 15
              <br/> 
              Push Ups: AMRAP for 2 sets
              <br/>
              <br/>
              Cardio for 15-20 minutes keeping heart rate above {this.state.fields.HeartRate} bpm (increase over time)
              <br/>
              <br/>
            </p>;
          }
          else return <p> error: {this.state.fields.DesiredBody} is not an acceptable input </p>
        }
        else if(this.state.fields.Goal === "Maintain" || this.state.fields.Goal === "maintain"){
          if(this.state.fields.DesiredBody === "Stronger" || this.state.fields.DesiredBody === "stronger"){
            return <p>
            Day 1
              <br/> 
              Squat: 4 x 4  |  87.5% of ORM
              <br/> 
              Leg Extension: 4 x 12
              <br/> 
              Front Squat: 3 x 8
              <br/> 
              Leg Curl: 4 x 10
              <br/> 
              Calf Raise: 4 x 12
              <br/> 
              Some Form of Curl: 2 x 15
              <br/> 
              Bicep Curls (Form can vary): 2 x 8
              <br/> 
              Hanging Leg raise: 3 x 12
              <br/> 
              <br/> 
            Day 2:
              <br/> 
              Bench Press: 3 x 4    |  82.5% of ORM
              <br/> 
              Overhead Press/raised bench press (alternating through the weeks): 4 x 15
              <br/> 
              Lateral raises, either Egyptian or dumbbell: 3 x 15
              <br/> 
              Lateral Pulldown: 4 x 10
              <br/> 
              T-Bar rows or Bent over Chest Rows (with Chest pinned against Bench): 3 x 10
              <br/> 
              Romanian Deadlift or Barbell Hip Thrust: 4 x 12
              <br/> 
              Arnold Press: 4 x 8
              <br/> 
              Tricep Pressdown: 3 x 15
              <br/> 
              Shrugs (dumbbell, barbell, smith, hex, dead machine whatever you prefer): 3 x 12
              <br/> 
              <br/> 
            Day 3 (if running a 4 or 5 day a week program):
              <br/> 
              Pull ups (if able add weight, if not able go to assisted pull ups make sure to get clean reps): 3 x 8
              <br/> 
              Row (either bent over barbell or with dumb bells on an incline bench): 4 x 12
              <br/> 
              Leg Press or front squat: 4 x 12
              <br/> 
              Calf raises: 4 x 15 - 20
              <br/> 
              Upright row either cable or barbell: 3 x 15
              <br/> 
              Curls (Hammer): 3 x 15
              <br/>
              <br/>  
            Day 4:
              <br/> 
              Deadlift (If going for Strength): 4 x 4   |  85% of ORM
              <br/> 
              Dips: 3 x 10
              <br/> 
              Glute Ham Raise: 3 x 10
              <br/> 
              Leg Extensions: 4 x 10
              <br/> 
              Cable Pull over or Dumbell pull over: 4 x 12
              <br/> 
              Face Pull: 4 x 20
              <br/> 
              Skull Crushers: 3 x 15
              <br/>
              <br/> 
            Day 5 (run if you are working 5 days a week):
            <br/> 
              Overhead Press: 4 x 10
              <br/> 
              Egyptian Lateral raise: 4 x 12
              <br/> 
              Seated row: 3 x 12
              <br/> 
              Hip Abduction: 3 x 20
              <br/> 
              Dumbbell Curl: 3 x 12
              <br/> 
              Crunches: 3 x 15
              <br/> 
              Calf raises: 3 x 12
              <br/> 
              Push Ups: AMRAP for 2 sets
            </p>;
          }
          else if(this.state.fields.DesiredBody === "Shred" || this.state.fields.DesiredBody === "shred"){
            return <p>
            Day 1
              <br/> 
              Squat: 4 x 4   |  87.5% of ORM
              <br/> 
              Leg Extension: 4 x 15
              <br/> 
              Front Squat: 3 x 10
              <br/> 
              Leg Curl: 4 x 12
              <br/> 
              Calf Raise: 4 x 20
              <br/> 
              Some Form of Curl: 2 x 20
              <br/> 
              Bicep Curls (Form can vary): 3 x 8
              <br/> 
              Hanging Leg raise: 3 x 15
              <br/> 
              <br/> 
            Day 2:
              <br/> 
              Bench Press: 3 x 6   |  80% of ORM
              <br/> 
              Overhead Press/raised bench press (alternating through the weeks): 4 x 15
              <br/> 
              Lateral raises, either Egyptian or dumbbell: 3 x 15
              <br/> 
              Lateral Pulldown: 4 x 10
              <br/> 
              T-Bar rows or Bent over Chest Rows (with Chest pinned against Bench): 3 x 10
              <br/> 
              Romanian Deadlift or Barbell Hip Thrust: 4 x 12
              <br/> 
              Arnold Press: 4 x 10
              <br/> 
              Tricep Pressdown: 3 x 15
              <br/> 
              Shrugs (dumbbell, barbell, smith, hex, dead machine whatever you prefer): 3 x 12
              <br/> 
              <br/> 
            Day 3 (if running a 4 or 5 day a week program):
              <br/> 
              Pull ups (if able add weight, if not able go to assisted pull ups make sure to get clean reps): 3 x 10
              <br/> 
              Row (either bent over barbell or with dumb bells on an incline bench): 4 x 15
              <br/> 
              Leg Press or front squat: 4 x 15
              <br/> 
              Calf raises: 4 x 20
              <br/> 
              Upright row either cable or barbell: 3 x 15
              <br/> 
              Curls (Hammer): 3 x 15
              <br/>
              <br/>  
            Day 4:
              <br/> 
              Deadlift (If going for Strength): 4 x 6   |  77.5% of ORM
              <br/> 
              Dips: 3 x 10
              <br/> 
              Glute Ham Raise: 3 x 10
              <br/> 
              Leg Extensions: 4 x 10
              <br/> 
              Cable Pull over or Dumbell pull over: 4 x 12
              <br/> 
              Face Pull: 4 x 20
              <br/> 
              Skull Crushers: 3 x 15
              <br/>
              <br/>
            Day 5 (run if you are working 5 days a week):
            <br/> 
              Overhead Press: 4 x 15
              <br/> 
              Egyptian Lateral raise: 4 x 12
              <br/> 
              Seated row: 3 x 15
              <br/> 
              Hip Abduction: 4 x 20
              <br/> 
              Dumbbell Curl: 3 x 15
              <br/> 
              Crunches: 3 x 15
              <br/> 
              Calf raises: 3 x 15
              <br/> 
              Push Ups: AMRAP for 2 sets
              <br/>
              <br/>
            </p>;
          }
          else if(this.state.fields.DesiredBody === "Cut" || this.state.fields.DesiredBody === "cut"){
            return <p>
            Day 1
              <br/> 
              Squat: 4 x 4   |  87.5% of ORM
              <br/> 
              Leg Extension: 4 x 15
              <br/> 
              Front Squat: 3 x 10
              <br/> 
              Leg Curl: 4 x 12
              <br/> 
              Calf Raise: 4 x 20
              <br/> 
              Some Form of Curl: 2 x 20
              <br/> 
              Bicep Curls (Form can vary): 3 x 8
              <br/> 
              Hanging Leg raise: 3 x 15
              <br/> 
              <br/> 
            Day 2:
            <br/> 
              Bench Press: 3 x 6   |  82.5% of ORM
              <br/> 
              Overhead Press/raised bench press (alternating through the weeks): 4 x 15
              <br/> 
              Lateral raises, either Egyptian or dumbbell: 3 x 15
              <br/> 
              Lateral Pulldown: 4 x 10
              <br/> 
              T-Bar rows or Bent over Chest Rows (with Chest pinned against Bench): 3 x 10
              <br/> 
              Romanian Deadlift or Barbell Hip Thrust: 4 x 12
              <br/> 
              Arnold Press: 4 x 10
              <br/> 
              Tricep Pressdown: 3 x 15
              <br/> 
              Shrugs (dumbbell, barbell, smith, hex, dead machine whatever you prefer): 3 x 12
              <br/> 
              <br/> 
            Day 3 (if running a 4 or 5 day a week program):
              <br/> 
              Pull ups (if able add weight, if not able go to assisted pull ups make sure to get clean reps): 3 x 10
              <br/> 
              Row (either bent over barbell or with dumb bells on an incline bench): 4 x 15
              <br/> 
              Leg Press or front squat: 4 x 15
              <br/> 
              Calf raises: 4 x 20
              <br/> 
              Upright row either cable or barbell: 3 x 15
              <br/> 
              Curls (Hammer): 3 x 15
              <br/>
              <br/>  
            Day 4:
              <br/> 
              Deadlift (If going for Strength): 4 x 6   |  77.5% of ORM
              <br/> 
              Dips: 3 x 10
              <br/> 
              Glute Ham Raise: 3 x 10
              <br/> 
              Leg Extensions: 4 x 10
              <br/> 
              Cable Pull over or Dumbell pull over: 4 x 12
              <br/> 
              Face Pull: 4 x 20
              <br/> 
              Skull Crushers: 3 x 15
              <br/>
              <br/> 
            Day 5 (run if you are working 5 days a week):
            <br/> 
              Overhead Press: 4 x 15
              <br/> 
              Egyptian Lateral raise: 4 x 12
              <br/> 
              Seated row: 3 x 15
              <br/> 
              Hip Abduction: 4 x 20
              <br/> 
              Dumbbell Curl: 3 x 15
              <br/> 
              Crunches: 3 x 15
              <br/> 
              Calf raises: 3 x 15
              <br/> 
              Push Ups: AMRAP for 2 sets
              <br/>
              <br/>
            </p>;
          }
          else return <p> error: {this.state.fields.DesiredBody} is not an acceptable input </p>
        }
        else return <p> error: {this.state.fields.Goal} is not an acceptable input </p> 
      }
      else{
        if(this.state.fields.Goal === "Gain" || this.state.fields.Goal === "gain"){
            if(this.state.fields.DesiredBody === "Stronger" || this.state.fields.DesiredBody === "stronger"){
              return <p> 
            Day 1
              <br/> 
              Squat: 4 x 4  |   87.5% of ORM
              <br/> 
              Leg Extension: 4 x 12
              <br/> 
              Front Squat: 3 x 8
              <br/> 
              Leg Curl: 4 x 10
              <br/> 
              Calf Raise: 4 x 12
              <br/> 
              Some Form of Curl: 2 x 15
              <br/> 
              Bicep Curls (Form can vary): 2 x 8
              <br/> 
              Hanging Leg raise: 3 x 12
              <br/> 
              <br/> 
            Day 2:
            <br/> 
              Bench Press: 3 x 4   |  85% of ORM
              <br/> 
              Overhead Press/raised bench press (alternating through the weeks): 4 x 15
              <br/> 
              Lateral raises, either Egyptian or dumbbell: 3 x 15
              <br/> 
              Lateral Pulldown: 4 x 10
              <br/> 
              T-Bar rows or Bent over Chest Rows (with Chest pinned against Bench): 3 x 10
              <br/> 
              Romanian Deadlift or Barbell Hip Thrust: 4 x 12
              <br/> 
              Arnold Press: 4 x 8
              <br/> 
              Tricep Pressdown: 3 x 15
              <br/> 
              Shrugs (dumbbell, barbell, smith, hex, dead machine whatever you prefer): 3 x 12
              <br/> 
              <br/>
            Day 3:
              <br/> 
              Deadlift (If going for Strength): 4 x 4   |   82.5% of ORM
              <br/> 
              Dips: 3 x 10
              <br/> 
              Glute Ham Raise: 3 x 10
              <br/> 
              Leg Extensions: 4 x 10
              <br/> 
              Cable Pull over or Dumbell pull over: 4 x 12
              <br/> 
              Face Pull: 4 x 20
              <br/> 
              Skull Crushers: 3 x 15
              <br/>
              <br/> 
              </p>
            }
            else if(this.state.fields.DesiredBody === "Shred" || this.state.fields.DesiredBody === "shred"){
              return <p> 
            Day 1
            <br/> 
              Squat: 4 x 4   |  87.5% of ORM
              <br/> 
              Leg Extension: 4 x 15
              <br/> 
              Front Squat: 3 x 10
              <br/> 
              Leg Curl: 4 x 12
              <br/> 
              Calf Raise: 4 x 20
              <br/> 
              Some Form of Curl: 2 x 20
              <br/> 
              Bicep Curls (Form can vary): 3 x 8
              <br/> 
              Hanging Leg raise: 3 x 15
              <br/> 
              <br/> 
            Day 2:
            <br/> 
              Bench Press: 3 x 6  |  80% of ORM
              <br/> 
              Overhead Press/raised bench press (alternating through the weeks): 4 x 15
              <br/> 
              Lateral raises, either Egyptian or dumbbell: 3 x 15
              <br/> 
              Lateral Pulldown: 4 x 10
              <br/> 
              T-Bar rows or Bent over Chest Rows (with Chest pinned against Bench): 3 x 10
              <br/> 
              Romanian Deadlift or Barbell Hip Thrust: 4 x 12
              <br/> 
              Arnold Press: 4 x 10
              <br/> 
              Tricep Pressdown: 3 x 15
              <br/> 
              Shrugs (dumbbell, barbell, smith, hex, dead machine whatever you prefer): 3 x 12
              <br/> 
              <br/> 
            Day 3:
            <br/> 
              Deadlift (If going for Strength): 4 x 6   |  82.5% of ORM
              <br/> 
              Dips: 3 x 10
              <br/> 
              Glute Ham Raise: 3 x 10
              <br/> 
              Leg Extensions: 4 x 10
              <br/> 
              Cable Pull over or Dumbell pull over: 4 x 12
              <br/> 
              Face Pull: 4 x 20
              <br/> 
              Skull Crushers: 3 x 15
              <br/>
              <br/>
              </p>
            }
            else if(this.state.fields.DesiredBody === "Cut" || this.state.fields.DesiredBody === "cut"){
              return <p>
            Day 1
            <br/> 
              Squat: 4 x 4    |  87.5% of ORM
              <br/> 
              Leg Extension: 4 x 15
              <br/> 
              Front Squat: 3 x 10
              <br/> 
              Leg Curl: 4 x 12
              <br/> 
              Calf Raise: 4 x 20
              <br/> 
              Some Form of Curl: 2 x 20
              <br/> 
              Bicep Curls (Form can vary): 3 x 8
              <br/> 
              Hanging Leg raise: 3 x 15
              <br/> 
              <br/> 
            Day 2:
            <br/> 
              Bench Press: 3 x 6  |  80% of ORM
              <br/> 
              Overhead Press/raised bench press (alternating through the weeks): 4 x 15
              <br/> 
              Lateral raises, either Egyptian or dumbbell: 3 x 15
              <br/> 
              Lateral Pulldown: 4 x 10
              <br/> 
              T-Bar rows or Bent over Chest Rows (with Chest pinned against Bench): 3 x 10
              <br/> 
              Romanian Deadlift or Barbell Hip Thrust: 4 x 12
              <br/> 
              Arnold Press: 4 x 10
              <br/> 
              Tricep Pressdown: 3 x 15
              <br/> 
              Shrugs (dumbbell, barbell, smith, hex, dead machine whatever you prefer): 3 x 12
              <br/> 
              <br/> 
            Day 3:
            <br/> 
              Deadlift (If going for Strength): 4 x 6   |  80% of ORM
              <br/> 
              Dips: 3 x 10
              <br/> 
              Glute Ham Raise: 3 x 10
              <br/> 
              Leg Extensions: 4 x 10
              <br/> 
              Cable Pull over or Dumbell pull over: 4 x 12
              <br/> 
              Face Pull: 4 x 20
              <br/> 
              Skull Crushers: 3 x 15
              <br/>
              <br/>
              </p>
            }
            else return <p> error: {this.state.fields.DesiredBody} is not an acceptable input </p>
        }
        else if(this.state.fields.Goal === "Lose" || this.state.fields.Goal === "lose"){
          if(this.state.fields.DesiredBody === "Stronger" || this.state.fields.DesiredBody === "stronger"){
            return <p>
            Day 1
            <br/> 
              Squat: 4 x 4  |  87.5% of ORM
              <br/> 
              Leg Extension: 4 x 15
              <br/> 
              Front Squat: 3 x 10
              <br/> 
              Leg Curl: 4 x 12
              <br/> 
              Calf Raise: 4 x 20
              <br/> 
              Some Form of Curl: 2 x 20
              <br/> 
              Bicep Curls (Form can vary): 3 x 8
              <br/> 
              Hanging Leg raise: 3 x 15
              <br/> 
              <br/> 
              Cardio for 15-20 minutes keeping heart rate above {this.state.fields.HeartRate} bpm (increase over time)
              <br/>
              <br/>
            Day 2:
            <br/> 
              Bench Press: 3 x 6  |  80% of ORM
              <br/> 
              Overhead Press/raised bench press (alternating through the weeks): 4 x 15
              <br/> 
              Lateral raises, either Egyptian or dumbbell: 3 x 15
              <br/> 
              Lateral Pulldown: 4 x 10
              <br/> 
              T-Bar rows or Bent over Chest Rows (with Chest pinned against Bench): 3 x 10
              <br/> 
              Romanian Deadlift or Barbell Hip Thrust: 4 x 12
              <br/> 
              Arnold Press: 4 x 10
              <br/> 
              Tricep Pressdown: 3 x 15
              <br/> 
              Shrugs (dumbbell, barbell, smith, hex, dead machine whatever you prefer): 3 x 12
              <br/> 
              <br/>
              Cardio for 15-20 minutes keeping heart rate above {this.state.fields.HeartRate} bpm (increase over time)
              <br/>
              <br/>
            Day 3:
            <br/> 
              Deadlift (If going for Strength): 4 x 4   |  82.5% of ORM
              <br/> 
              Dips: 3 x 10
              <br/> 
              Glute Ham Raise: 3 x 10
              <br/> 
              Leg Extensions: 4 x 10
              <br/> 
              Cable Pull over or Dumbell pull over: 4 x 12
              <br/> 
              Face Pull: 4 x 20
              <br/> 
              Skull Crushers: 3 x 15
              <br/>
              <br/>
              Cardio for 15-20 minutes keeping heart rate above {this.state.fields.HeartRate} bpm (increase over time)
              <br/>
              <br/>
              </p>
          }
          else if(this.state.fields.DesiredBody === "Shred" || this.state.fields.DesiredBody === "shred"){
            return <p>
            Day 1
            <br/> 
              Squat: 4 x 4   |  87.5% of ORM
              <br/> 
              Leg Extension: 4 x 15
              <br/> 
              Front Squat: 3 x 10
              <br/> 
              Leg Curl: 4 x 12
              <br/> 
              Calf Raise: 4 x 20
              <br/> 
              Some Form of Curl: 2 x 20
              <br/> 
              Bicep Curls (Form can vary): 3 x 8
              <br/> 
              Hanging Leg raise: 3 x 15
              <br/> 
              <br/> 
              Cardio for 15-20 minutes keeping heart rate above {this.state.fields.HeartRate} bpm (increase over time)
              <br/>
              <br/>
            Day 2:
            <br/> 
              Bench Press: 3 x 6  |  82.5% of ORM
              <br/> 
              Overhead Press/raised bench press (alternating through the weeks): 4 x 15
              <br/> 
              Lateral raises, either Egyptian or dumbbell: 3 x 15
              <br/> 
              Lateral Pulldown: 4 x 10
              <br/> 
              T-Bar rows or Bent over Chest Rows (with Chest pinned against Bench): 3 x 10
              <br/> 
              Romanian Deadlift or Barbell Hip Thrust: 4 x 12
              <br/> 
              Arnold Press: 4 x 10
              <br/> 
              Tricep Pressdown: 3 x 15
              <br/> 
              Shrugs (dumbbell, barbell, smith, hex, dead machine whatever you prefer): 3 x 12
              <br/> 
              <br/> 
              Cardio for 15-20 minutes keeping heart rate above {this.state.fields.HeartRate} bpm (increase over time)
              <br/>
              <br/>
            Day 3:
            <br/> 
              Deadlift (If going for Strength): 4 x 6  |  82.5% of ORM
              <br/> 
              Dips: 3 x 10
              <br/> 
              Glute Ham Raise: 3 x 10
              <br/> 
              Leg Extensions: 4 x 10
              <br/> 
              Cable Pull over or Dumbell pull over: 4 x 12
              <br/> 
              Face Pull: 4 x 20
              <br/> 
              Skull Crushers: 3 x 15
              <br/>
              <br/>
              Cardio for 15-20 minutes keeping heart rate above {this.state.fields.HeartRate} bpm (increase over time) 
              </p>
          }
          else if(this.state.fields.DesiredBody === "Cut" || this.state.fields.DesiredBody === "cut"){
            return <p>
             Day 1
            <br/> 
              Squat: 4 x 4   |  87.5% of ORM
              <br/> 
              Leg Extension: 4 x 15
              <br/> 
              Front Squat: 3 x 10
              <br/> 
              Leg Curl: 4 x 12
              <br/> 
              Calf Raise: 4 x 20
              <br/> 
              Some Form of Curl: 2 x 20
              <br/> 
              Bicep Curls (Form can vary): 3 x 8
              <br/> 
              Hanging Leg raise: 3 x 15
              <br/> 
              <br/> 
              Cardio for 15-20 minutes keeping heart rate above {this.state.fields.HeartRate} bpm (increase over time)
              <br/>
              <br/>
            Day 2:
            <br/> 
              Bench Press: 3 x 6   |  82.5% of ORM
              <br/> 
              Overhead Press/raised bench press (alternating through the weeks): 4 x 15
              <br/> 
              Lateral raises, either Egyptian or dumbbell: 3 x 15
              <br/> 
              Lateral Pulldown: 4 x 10
              <br/> 
              T-Bar rows or Bent over Chest Rows (with Chest pinned against Bench): 3 x 10
              <br/> 
              Romanian Deadlift or Barbell Hip Thrust: 4 x 12
              <br/> 
              Arnold Press: 4 x 10
              <br/> 
              Tricep Pressdown: 3 x 15
              <br/> 
              Shrugs (dumbbell, barbell, smith, hex, dead machine whatever you prefer): 3 x 12
              <br/> 
              <br/> 
              Cardio for 15-20 minutes keeping heart rate above {this.state.fields.HeartRate} bpm (increase over time)
              <br/>
              <br/>
            Day 3:
            <br/> 
              Deadlift (If going for Strength): 4 x 6 (optional)    |  80% of ORM
              <br/> 
              Dips: 3 x 10
              <br/> 
              Glute Ham Raise: 3 x 10
              <br/> 
              Leg Extensions: 4 x 10
              <br/> 
              Cable Pull over or Dumbell pull over: 4 x 12
              <br/> 
              Face Pull: 4 x 20
              <br/> 
              Skull Crushers: 3 x 15
              <br/>
              <br/>
              Cardio for 15-20 minutes keeping heart rate above {this.state.fields.HeartRate} bpm (increase over time)
              </p>
          }
          else return <p> error: {this.state.fields.DesiredBody} is not an acceptable input </p>
        }
        else if(this.state.fields.Goal === "Maintain" || this.state.fields.Goal  === "maintain"){
          if(this.state.fields.DesiredBody === "Stronger" || this.state.fields.DesiredBody === "stronger"){
            return <p>
            Day 1
              <br/> 
              Squat: 4 x 4  |  87.5% of ORM
              <br/> 
              Leg Extension: 4 x 12
              <br/> 
              Front Squat: 3 x 8
              <br/> 
              Leg Curl: 4 x 10
              <br/> 
              Calf Raise: 4 x 12
              <br/> 
              Some Form of Curl: 2 x 15
              <br/> 
              Bicep Curls (Form can vary): 2 x 8
              <br/> 
              Hanging Leg raise: 3 x 12
              <br/> 
              <br/> 
              Cardio for 15-20 minutes keeping heart rate above {this.state.fields.HeartRate} bpm (increase over time)
              <br/>
              <br/>
            Day 2:
            <br/> 
              Bench Press: 3 x 4    |  82.5% of ORM
              <br/> 
              Overhead Press/raised bench press (alternating through the weeks): 4 x 15
              <br/> 
              Lateral raises, either Egyptian or dumbbell: 3 x 15
              <br/> 
              Lateral Pulldown: 4 x 10
              <br/> 
              T-Bar rows or Bent over Chest Rows (with Chest pinned against Bench): 3 x 10
              <br/> 
              Romanian Deadlift or Barbell Hip Thrust: 4 x 12
              <br/> 
              Arnold Press: 4 x 8
              <br/> 
              Tricep Pressdown: 3 x 15
              <br/> 
              Shrugs (dumbbell, barbell, smith, hex, dead machine whatever you prefer): 3 x 12
              <br/> 
              <br/> 
              Cardio for 15-20 minutes keeping heart rate above {this.state.fields.HeartRate} bpm (increase over time)
              <br/>
              <br/>
            Day 3:
            <br/> 
              Deadlift (If going for Strength): 4 x 4   |  85% of ORM
              <br/> 
              Dips: 3 x 10
              <br/> 
              Glute Ham Raise: 3 x 10
              <br/> 
              Leg Extensions: 4 x 10
              <br/> 
              Cable Pull over or Dumbell pull over: 4 x 12
              <br/> 
              Face Pull: 4 x 20
              <br/> 
              Skull Crushers: 3 x 15
              <br/>
              <br/>   
              Cardio for 15-20 minutes keeping heart rate above {this.state.fields.HeartRate} bpm (increase over time)
              <br/>
              <br/> 
              </p>
          }
          else if(this.state.fields.DesiredBody === "Shred" || this.state.fields.DesiredBody === "shred"){
            return <p>
            Day 1
            <br/> 
              Squat: 4 x 4   |  87.5% of ORM
              <br/> 
              Leg Extension: 4 x 15
              <br/> 
              Front Squat: 3 x 10
              <br/> 
              Leg Curl: 4 x 12
              <br/> 
              Calf Raise: 4 x 20
              <br/> 
              Some Form of Curl: 2 x 20
              <br/> 
              Bicep Curls (Form can vary): 3 x 8
              <br/> 
              Hanging Leg raise: 3 x 15
              <br/> 
              <br/> 
              Cardio for 15-20 minutes keeping heart rate above {this.state.fields.HeartRate} bpm (increase over time)
              <br/>
              <br/>
            Day 2:
            <br/> 
              Bench Press: 3 x 6   |  80% of ORM
              <br/> 
              Overhead Press/raised bench press (alternating through the weeks): 4 x 15
              <br/> 
              Lateral raises, either Egyptian or dumbbell: 3 x 15
              <br/> 
              Lateral Pulldown: 4 x 10
              <br/> 
              T-Bar rows or Bent over Chest Rows (with Chest pinned against Bench): 3 x 10
              <br/> 
              Romanian Deadlift or Barbell Hip Thrust: 4 x 12
              <br/> 
              Arnold Press: 4 x 10
              <br/> 
              Tricep Pressdown: 3 x 15
              <br/> 
              Shrugs (dumbbell, barbell, smith, hex, dead machine whatever you prefer): 3 x 12
              <br/> 
              <br/> 
              Cardio for 15-20 minutes keeping heart rate above {this.state.fields.HeartRate} bpm (increase over time)
              <br/>
              <br/>
            Day 3:
              <br/> 
              Deadlift (If going for Strength): 4 x 6   |  77.5% of ORM
              <br/> 
              Dips: 3 x 10
              <br/> 
              Glute Ham Raise: 3 x 10
              <br/> 
              Leg Extensions: 4 x 10
              <br/> 
              Cable Pull over or Dumbell pull over: 4 x 12
              <br/> 
              Face Pull: 4 x 20
              <br/> 
              Skull Crushers: 3 x 15
              <br/>
              <br/>
              Cardio for 15-20 minutes keeping heart rate above {this.state.fields.HeartRate} bpm (increase over time)  
              </p>
          }
          else if(this.state.fields.DesiredBody === "Cut" || this.state.fields.DesiredBody === "cut"){ 
            return <p>
            Day 1
            <br/> 
              Squat: 4 x 4   |  87.5% of ORM
              <br/> 
              Leg Extension: 4 x 15
              <br/> 
              Front Squat: 3 x 10
              <br/> 
              Leg Curl: 4 x 12
              <br/> 
              Calf Raise: 4 x 20
              <br/> 
              Some Form of Curl: 2 x 20
              <br/> 
              Bicep Curls (Form can vary): 3 x 8
              <br/> 
              Hanging Leg raise: 3 x 15
              <br/> 
              <br/> 
              Cardio for 15-20 minutes keeping heart rate above {this.state.fields.HeartRate} bpm (increase over time)
              <br/>
              <br/>
            Day 2:
              <br/> 
              Bench Press: 3 x 6   |  82.5% of ORM
              <br/> 
              Overhead Press/raised bench press (alternating through the weeks): 4 x 15
              <br/> 
              Lateral raises, either Egyptian or dumbbell: 3 x 15
              <br/> 
              Lateral Pulldown: 4 x 10
              <br/> 
              T-Bar rows or Bent over Chest Rows (with Chest pinned against Bench): 3 x 10
              <br/> 
              Romanian Deadlift or Barbell Hip Thrust: 4 x 12
              <br/> 
              Arnold Press: 4 x 10
              <br/> 
              Tricep Pressdown: 3 x 15
              <br/> 
              Shrugs (dumbbell, barbell, smith, hex, dead machine whatever you prefer): 3 x 12
              <br/> 
              <br/> 
              Cardio for 15-20 minutes keeping heart rate above {this.state.fields.HeartRate} bpm (increase over time)
              <br/>
              <br/>
            Day 3:
              <br/> 
              Deadlift (If going for Strength): 4 x 6   |  77.5% of ORM
              <br/> 
              Dips: 3 x 10
              <br/> 
              Glute Ham Raise: 3 x 10
              <br/> 
              Leg Extensions: 4 x 10
              <br/> 
              Cable Pull over or Dumbell pull over: 4 x 12
              <br/> 
              Face Pull: 4 x 20
              <br/> 
              Skull Crushers: 3 x 15
              <br/>
              <br/> 
              Cardio for 15-20 minutes keeping heart rate above {this.state.fields.HeartRate} bpm (increase over time) 
            </p>
          }
          else return <p> error: {this.state.fields.DesiredBody} is not an acceptable input </p>
        }
        else return <p> error: {this.state.fields.Goal} is not an acceptable input </p> 
      }
    }

    return ( 
    <div className="App">
      {/* {print_workout()} */}
      <Form onSubmit={fields => this.onSubmit(fields)}/>
      {/* {print_workout()} */}
        <p>
         {JSON.stringify(this.state.fields, null, 2)}
       </p> 
      {print_workout()}
    </div>
    
    );
  }
}

export default App;
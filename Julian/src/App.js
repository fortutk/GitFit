import { useState } from 'react'
import Workouts from './components/Workouts.js'
import WorkoutForm from './components/WorkoutForm.js'
import './index.css'

const App = () => {
  const [workoutarray, setWorkouts] = useState([
    {
      cardio: false,
      text: "Bench press",
      // TODO: let user enter date or record current date?
      date: "10/12/2022",
      weight: 135,
      reps: 10,
      sets: 3
    },
    {
      cardio: false,
      text: "Squat",
      date: "10/10/2022",
      weight: 135,
      reps: 13,
      sets: 2
    },
    {
      cardio: false,
      text: "Pull ups",
      date: "10/08/2022",
      weight: 0,
      reps: 5,
      sets: 5
    }
  ])
  return (
    <div className="App">
      <div className="Workout-header">
        <h1 className="Workout-header-title">Workout Tracker</h1>
        <WorkoutForm workoutarray={workoutarray} setWorkouts={setWorkouts} />
      </div>
      <Workouts workouts={workoutarray} workoutarray={workoutarray} setWorkouts={setWorkouts}/>
    </div>
  );
}

export default App;

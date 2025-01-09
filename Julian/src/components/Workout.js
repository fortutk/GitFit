import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const Workout = ({ workout, workoutarray, setWorkouts }) => {
    const deleteWorkout = (index) => {
        setWorkouts((current)=> current.filter((w) => w !== workout));
    }
    
    
    return (
        <div className="workout">
            <div className="individual-header"><h3>{workout.text}</h3><Button onClick={deleteWorkout} variant="outlined" size="small" color="error"><DeleteIcon /></Button></div>
            <h5>Date: {workout.date}</h5>
            {!workout.cardio && <h5>Reps per set: {workout.reps}</h5>}
            {!workout.cardio && <h5>Sets: {workout.sets}</h5>}
            {!workout.cardio && <h5>Weight: {workout.weight}lbs</h5>}
            {workout.cardio && <h5>Time: {workout.time}</h5> }
            {workout.cardio && <h5>Distance: {workout.distance}</h5> }

        </div>
    )
}

export default Workout
import Workout from './Workout'

const Workouts = ({ workouts, workoutarray, setWorkouts }) => {
    return (
        <div>
            {workouts.map((workout, index) => (
                <Workout key={index} workout={workout} workoutarray={workoutarray} setWorkouts={setWorkouts} />
            ))}
        </div>
    )
}

export default Workouts
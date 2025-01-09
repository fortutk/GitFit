import * as React from 'react';
import { useState } from 'react';
import { format, parse } from 'date-fns'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

// popup form for inputting the data in a new workout
export default function WorkoutForm({ workoutarray, setWorkouts }) {
  const [open, setOpen] = React.useState(false);
  //open popup form
  const handleClickOpen = () => {
    setOpen(true);
  };
  // function called on cancel
  const handleClose = () => {
    setOpen(false);
  };

  // states to store new workout data in form
  const [text, setText] = useState('');
  const [date, setDate] = useState(null);
  const [weight, setWeight] = useState(0);
  const [reps, setReps] = useState(0);
  const [sets, setSets] = useState(0);
  const [time, setTime] = useState(0);
  const [cardio, setCardio] = useState(false);
  const [distance, setDistance] = useState(0);

  // function to reset states back to start values
  const resetStates = () => {
    setText('');
    setDate(null);
    setWeight(0);
    setReps(0);
    setSets(0);
    setTime(0);
    setDistance(0);
  }

  // function called on add
  const newWorkout = () => {
    // parse the date to convert from yyyy-MM-dd to MM/dd/yyyy
    let parseddate = 'N/A';
    if (date != null) {
      parseddate = parse(date, 'yyyy-MM-dd', new Date());
      parseddate = format(parseddate, 'MM/dd/yyyy');
    }
    // add workout to list here
    const newelement = {
      cardio: cardio,
      text: text,
      date: parseddate,
      weight: weight,
      reps: reps,
      sets: sets,
      time: time,
      distance: distance
    }

    setOpen(false);
    // append workout to workouts state array
    setWorkouts(previousState => [...previousState, newelement]);
    // save workouts to localStorage
    localStorage.setItem("workoutarray", JSON.stringify(workoutarray));
    // reset states
    resetStates();
  };

  // workout options
  const workoutoptions = [
    "",
    "Bench press",
    "Squat",
    "Bicep curl",
    "Deadlift",
    "Bent-over row",
    "Shoulder press"
  ]

  // cardio options
  const cardiooptions = [
    "",
    "Running",
    "Swimming",
    "Rowing",
    "Cycling"
  ]

  // set text when drop down menu value is changed and cardio bool
  const mhandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    if (cardiooptions.includes(event.target.value)) setCardio(true);
    else setCardio(false);
  };
  
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add a Workout
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Workout</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter information on your workout.
          </DialogContentText>
          <TextField
            id="workout-text"
            select
            label="Workout Select"
            value={text}
            onChange={mhandleChange}
            SelectProps={{
              native: true,
            }}
            helperText="Please select your workout"
            variant="filled"
          >
            {workoutoptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
            {cardiooptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </TextField>
          <TextField
            autoFocus
            onChange={(e) => setDate(e.target.value)}
            margin="dense"
            id="date"
            label="Date"
            type="date"
            fullWidth
            variant="standard"
          />
          {!cardio && <TextField
            autoFocus
            onChange={(e) => setWeight(e.target.value)}
            margin="dense"
            id="weight"
            label="Weight (lbs)"
            type="number"
            fullWidth
            variant="standard"
          />}
          {!cardio && <TextField
            autoFocus
            onChange={(e) => setReps(e.target.value)}
            margin="dense"
            id="reps"
            label="Reps per set"
            type="number"
            fullWidth
            variant="standard"
          />}
          {cardio && <TextField
            autoFocus
            onChange={(e) => setTime(e.target.value)}
            margin="dense"
            id="time"
            label="Time"
            type="number"
            fullWidth
            variant="standard"
          />}
          {cardio && <TextField
            autoFocus
            onChange={(e) => setDistance(e.target.value)}
            margin="dense"
            id="distance"
            label="Distance"
            type="number"
            fullWidth
            variant="standard"
          />}
          {!cardio && <TextField
            autoFocus
            onChange={(e) => setSets(e.target.value)}
            margin="dense"
            id="sets"
            label="Sets"
            type="number"
            fullWidth
            variant="standard"
          />}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={newWorkout}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
# Sprint 3

Julian Halloy

github-id: jhalloy

Group Name: GitFit

### What you planned to do

Issue [#34](https://github.com/utk-cs340-fall22/GitFit/issues/34) - I planned to create a button for each workout that deletes the workout from the workout array when clicked. This could be used to correct a mistake if the user inputs a workout incorrectly.

Issue [#35](https://github.com/utk-cs340-fall22/GitFit/issues/35) - I planned to make the workout title a drop down menu so that the options are standardized and not just random text from the user. If the user were to only sometimes use capital letters for workouts or make typos it could cause problems if we try to search the workout array.

Issue [#36](https://github.com/utk-cs340-fall22/GitFit/issues/36) - I planned to add some cardio workouts to the tracker and add functionality to check if the workout is cardio to determine what to ask in the form. Cardio workouts do not need the weight, reps, and sets inputs but instead require time and distance.

### What you did not do
Currently, the time and distance input for cardio workouts is just a number, without any units. In the future, it may be beneficial to set this to one unit, or allow the user to select from multiple unit options.

### What problems you encountered
The drop down menu was a bit difficult to figure out how to create inside of a form, but I figured it out with the help of the [MUI](https://mui.com) documentation. Also, I got stuck on how to get the form to switch between workout inputs and cardio inputs because I was using a simple variable to store the cardio bool. I needed to use a state so the form would update when the cardio state was changed. 

### Issues you worked on
Issue [#34](https://github.com/utk-cs340-fall22/GitFit/issues/34) - Add a delete button to workouts in the workout tracker

Issue [#35](https://github.com/utk-cs340-fall22/GitFit/issues/35) - Add drop down menu to select different workouts

Issue [#36](https://github.com/utk-cs340-fall22/GitFit/issues/36) - Add some cardio workouts to the workout tracker

### Files you worked on
 - Julian/src/App.js
 - Julian/src/components/WorkoutForm.js
 - Julian/src/components/Workout.js
 - Julian/src/components/Workouts.js
 - Julian/src/index.css
 - Julian/package-lock.json
 - Julian/package.json

### What you accomplished
I created functionality for the user to input cardio workouts into the workout tracker. Also, the user can now delete workouts from the workout tracker. The workout title is now a drop down menu instead of text input. The user selects a workout from the different options on the menu, and the form changes based on whether the option is cardio or not. The printed workouts now check whether the workout is cardio, and only print the attributes relevant to that workout.

# Sprint 2

Julian Halloy

github-id: jhalloy

Group Name: GitFit

### What you planned to do

Issue [#18](https://github.com/utk-cs340-fall22/GitFit/issues/18) - I planned to create a function that creates a new workout and appends it to the workout state array. This would allow the user to add a new workout to their workout tracker page.

Issue [#22](https://github.com/utk-cs340-fall22/GitFit/issues/22) - I planned to make the workout tracking webpage more aesthetically pleasing and match some of the other pages better.

Issue [#23](https://github.com/utk-cs340-fall22/GitFit/issues/23) - I planned to implement functionality for the workout tracking page to interact with other pages.

### What you did not do
I started creating some functionality to save the user's workout data, but it needs to be improved. The data should be saved with the key being the username. This way we can lookup individual user's data.

### What problems you encountered
I had difficulty getting the add workout function to work. The way a react state works is not entirely intuitive, and you must use the setState function returned when you call useState. Also, the previous state must be retrieved or you will overwrite the previous workout state data.

### Issues you worked on
Issue [#18](https://github.com/utk-cs340-fall22/GitFit/issues/18) - Create a function that adds a new workout to the workout tracker

Issue [#22](https://github.com/utk-cs340-fall22/GitFit/issues/22) - Make the workout tracking webpage aesthetically pleasing

Issue [#23](https://github.com/utk-cs340-fall22/GitFit/issues/23) - Implement functionality for the workout tracking webpage to interact with the other pages

### Files you worked on
 - Julian/src/App.js
 - Julian/src/components/WorkoutForm.js
 - Julian/src/components/Workout.js
 - Julian/src/components/Workouts.js
 - Julian/src/index.css
 - Julian/package-lock.json
 - Julian/package.json

### What you accomplished
I created functionality for the user to create a new workout by inputting data into a form. The form pops up when the user presses the "add a workout" button. When a new workout is added, the workout array is saved as a json string to localStorage. This will potentially be useful for allowing other pages to get the user's workout data. I also added some css code which improves the overall look of the workout tracker webpage.
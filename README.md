# GitFit
![GitFit](imgs/gitfit-logo-cropped.png)

GitFit is an easy-to-use web application for all your workout needs, including workout recommendations, workout tracking, and more. Users can find the right workouts to achieve their goals, and stay consistent by logging their progress. The web app also provides a wide variety of tools such as a body mass index (BMI) calculator, daily protein and calorie recommendations, heart rate calculator, 1 rep max calculator, and water intake needs.

### Installation and Running

#### Prerequisites

 - [Node](https://nodejs.dev/en/download/) 14.0.0 or later
 - git

#### Downloading

In a terminal, run the following

`git clone https://github.com/utk-cs340-fall22/GitFit.git`

#### Running the Web Application

`cd` into the directory containing the web application. GitFit is contained within the `Jack` directory.

`npm install` will install the package requirements specified in `package.json`.

`npm start` runs the app in development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. If you are running the web app on hydra, vscode will automatically port forward port 3000 for use, so the link will still work. If you are using `ssh`, you will need to find a way to port forward.

`npm run build` builds the app for productions to the `build` directory (unnecessary).

#### How to Use GitFit
The first page the user is prompted with is the login page. Once the user creates an account and logs in, they can utilize all of the tools GitFits offers. The homepage has several tabs at the top of it which is how you can access each tool. The workouts tab contains the workout tracker, where the user can log workouts. The goals page provides a workout plan based on the user's needs. The tools drop-down menu contains everything the user needs for food and water intake, as well as some other useful calculators.

### Group Members

 - Fort Hunter - fortutk
 - Jack Skupien - jskupien24
 - Julian Halloy - jhalloy
 - John Blackaby - Jonnyboy2025
 - Shervin Shirani - shervinshir

### License

GitFit is licensed under the MIT license. See [LICENSE.txt](LICENSE.txt)
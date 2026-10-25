<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->


___________________________________________________________________________________________________


# _______________________________  Class base component: -_______________________________________

# First, understand what a component is?
A component is a reusable piece of UI in a React application.
For example, suppose you are building a website with a Navbar, About page, and Footer.
so , Navbar, about page , footer , header, or so on are also called component. because each part can be a separate components.

React mainly has two ways to define components:
1. Function based Component   — components written using JavaScript functions.
2. Class based Component      — components written using JavaScript classes.

Both can display UI, receive props, and update the screen. Their main differences are how they handle state, lifecycle logic, and other React features.

# Class based Component 👍
A Class-Based Component is a React component created using an ES6 JavaScript class that extends React.Component.

# Syntax : To create / import a class based components to use short form : " rcc "  and then enter.

import React from 'react';

class Welcome extends React.Component {
  render() {
    return <h1>Hello, React!</h1>;
  }
}

export default Welcome;

 __________________________
|Class Component           |
|Extends React.Component   |
|__________________________|

 __________________________
|render()                  |
|Returns the UI description|
|__________________________|

 __________________________
|Hello React!              |
|Displayed on the screen   |
|__________________________|

# Let's understand every line.
Code	                         Meaning
class Welcome	                 Creates a JavaScript class named Welcome.
extends React.Component	         Gives the class React component functionality.
render()	                     Defines the UI that the component returns.
return (...)	                 Returns the JSX to display.
export default Welcome	         Allows other files to import the component.

# render() is a method that tells React what UI (a structure similar to HTML) should be displayed on the screen.
Suppose 👍

class Welcome extends React.Component {
  render() {
    return <h1>Hello React!</h1>;
  }
}

Here, render() tells React to display the heading Hello React! on the screen.

# Why do we write render() in Class-Based Components?
A class is a JavaScript class. React uses the render() method to get the UI description from a class component.

class Welcome extends React.Component {
  render() {
    return <h1>Hello React!</h1>;
  }
}

# Why is render() not used in Function-Based Components?
In a Function-Based Component, the function itself returns the UI. Therefore, there is no need to write a separate render() method.

function Welcome() {
  return <h1>Hello React!</h1>;
}
# NewsApp
Create a NewsApp by using Class Based Component for learning purpose

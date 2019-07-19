# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a front development library that is used to build UI components. That is broken down to small or large reusable pieces to form complex or simple web application. What is good about react is, it can a large and complex applications that need temporary data changes. Data that are inside of applications are not static, and they are dynamic that changes over time, and you think of react as the V layer in model-view-controller (MVC).  Classes in react are a simple syntax that allows it to extend react components, and it has a function with its rendering method. Unlike functions, class-based components have a private state which can hold data that can or may change over the component's lifecycle.

2. What does it mean to think in react?

When thinking in react, it is not the same as writing Html, because it will let you build a single application that can become large and complex ones. Dividing components out can make it simple to work in a single area with disturbing the others. Component can be reused in parts of the application with recreating them again.
In the React sense, "state" is an object that represents the parts of the app that can change. Each component can maintain its state, which lives in an object called this.state.
Simply put, if you'd like your app to do anything – if you want interactivity, adding and deleting things, logging in and out – that will involve the state.


3. Describe state.

React states are objects which are parts of an application that can change at any time during its lifecycle. Each component can maintain its state, which is found inside of this.state or useState. State can be used to interact with the user, logging in out of a form, adding, and delete content on the fly.
A "side effect" is anything that affects something outside the scope of the function being executed.


4. Describe props.

Props is a short name for properties, and the props are just like components, they can communicate with each other. In a technical term based on what I know, props follow a water method that is used in SDLC, which is a downward, but props start it from the parent component.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

Anything that is out of the scope a function can be affected by the side effect. When syncing side effects to make changes to the state or props, it can be passed in a dependency array that can take on a second argument the effect hook. If it's not passed through an array after a callback function. What will happen is, the effect will fire after any dynamic changes.np

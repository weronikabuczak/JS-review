//1. What is React?

//React is an open-source frontend JS library that is used for building user interfaces, especially SPA.

//2. Major features of React?

//Virtual DOM  - it can manipulate objects very quickly without actually touching the real DOM. React uses the virtual DOM to figure out what it needs to do with the real DOM to get the two trees to match.

//3. JSX - JavaScript XML

//JSX allows us to write HTML elements in JS and place them in the DOM without any createElement() or appendChild() methods.

//4. Difference between Element and Component?

//5. How to create components?

//Function components: pure JS functions that accept props object as the first parameter and return React elements.

// function Greeting({ message }) {
//     return <h1>{`Hello, ${message}`}</h1>
  
//   }

//Class components: using classes

// class Greeting extends React.Component {
//     render() {
//       return <h1>{`Hello, ${this.props.message}`}</h1>
//     }
//   }

//7. What are pure components?

//React.PureComponent is exactly the same as React.Component expect that is handles the shouldComponentUpdate() method. In case of PureComponent, React compares current parameters in components to the new params and if the values are the same, it doesn't reload. 

//8. What is a state?

//Object that holds some information that may change over the lifetime of component. State is similar to props, but it's private and fully controlled by the component.

//9. Props?

//Props are inputs to components. The data passed down from parent to child.

//11. Why should we not update the state directly?

//If you try to update the state directly then it won't re-render the component.
//this.state.message = 'Hello'; //Wrong

//Instead use "setState()".

//15. How to pass a parameter to an event handler or callback?

//arrow function
// <button onClick={() => this.handleClick(id)} />

//call bind
//<button onClick={this.handleClick.bind(this, id)} />

//16. Synthetic events in React?

//It's a cross-browser wrapper around the browser's native event. 

//18. What is the key prop and what is the benefit of using it in arrays of elements?

//A key is a special string attribute you should include when creating arrays of elements. Key prop helps identify which items have changed.

//19. Refs

//The ref is used to return a reference to the element. The refs can be useful when you need a direct access to the DOM element.

//In class approach we can use React.createRef() to get the value
//In 16.8+ we can use useRef() hook.

//21. forwardRef()

//Ref forwarding is a feature that lets some components take a ref they receive and pass it further down to a child.

//24. What is virtual DOM?

//It is an in-memory representation of real DOM. The represantation of UI is kept in memory and synced with the "real" DOM. 

//Reconciliation (pojednanie):
//React stores a copy of browser DOM (virtual DOM).
//When we make changes, React creates a new virtual DOM and compares it with the previous one. 

//Diffing Algorithm:
//it is doing the comparison in memory.
//Then React updates the Browser DOM with the least number of changes and possibly without rendering the entire DOM again.

//26. Difference between shadow DOM and virtual DOM?

// Virtual DOM is creating a copy of the whole DOM object, and Shadow DOM creates small pieces of the DOM object which has their own, isolated scope for the element they represent.

//27. React Fiber.

//The goal of Fiber is to increase its suitability for areas like animation, laoyut and gestures. Its headline feature is incremental rendering: the ability to split renedering work into chunks and spread it out over multiple frames.

//29. Controlled components.

//Controlled components in React are those in which form data is handled by the component’s state.

//30. Uncontrolled components.

//Uncontrolled components are those for which the form data is handled by the DOM itself. “Uncontrolled” refers to the fact that these components are not controlled by React state.

//31. difference between createElement() and cloneElement()

//JSX elements will be transpiled to React.createElement() functions to create React elements which are going to be used for the object representation of UI. Whereas cloneElement is used to clone an element and pass it new props.

//32. Lifting state up?

//When several components need to share the same changing data then it is recommended to lift the shared state up to their closest common ancestor. 

//35. What are Higher-Order Components?

// A higher-order component (HOC) is a function that takes a component and returns a new component. Basically, it's a pattern that is derived from React's compositional nature.

//Pure components

//The definition of Pure Component says that for specific input parameters, we always have a specific output. The output is solely dependent on Input parameters and no other external variable.

//37. Context

//Context provides a way to pass data through the component tree without having to pass props down manually at every level. 
//Authentication, locale, UI themes

//38. Children prop

//Children is a prop (this.props.children) that allows you to pass components as data to other components, just like any other prop you use. Component tree put between component's opening and closing tag will be passed to that component as children prop.

//41. Renonciliation

//Process when component's props or state changes and React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they're not equal, React will update the DOM.

//44. React.lazy

//It lets you render a dynamic import as a regular component. This will automatically load the bundle containing the OtherComponent when the component is first rendered.

//const OtherComponent = React.lazy(() => import('./OtherComponent));

//The lazy component should then be rendered inside a Suspense component, which allows us to show some fallback content.

{/* <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
</Suspense> */}

//45. Why React uses className over class attribute?

//Class is a keyword in JS, and JSX is an extension of JS. That's the main reason.

//46. What are fragments?

//It's a common pattern in React which is used for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes.

//47. Why fragments are better?

//Fragments are a bit faster and use less memory by not creating an extra DOM.
//The Dom Inspector is less cluttered.

//48. What are portals in React?

//Portal is a recommended way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

//49. Stateless component.

//Component which don't have state at all.

//50. Stateful components.

//If the behaviour of a component is dependent on the state of the component then it can be termed as stateful component.

//52. Advantages of React.

//Increases the application's performance with virtual DOM.
//JSX makes code easy to read and write.
//It renders both on client and server side.
//Easy to integrate with frameworks.
//Easy to write unit and integration tests with tools such as Jest.

//53. Limitations of React.

//Just a view library, not a full framework.
//The code complexity increases with inline templating and JSX.
//Too many smaller components leading to over engineering or boilerplate.

//54. Error boundaries

//Components that catch JS errors everywhere in their child component tree, log those errors and display a fallback UI instead of the component tree that crashed.
//Error boundaries can be only defined in class components.

//55. What are the recommended ways for static type checking?

//PropTypes library
//Flow
//TypeScript

//57. What is the use of react-dom package?

//It provides DOM-specific methods that can be used at the top level of your app. Most of the components are not required to use this module.
//some methods - render(), hydrate(), unmountComponentAtNode(), createPortal()

//58. What is the purpose of render method of react-dom?

//This method is used to render a REact element into the DOM in the supplied container and return a reference to the component. If the optional callback is provided, it will be executed after the component is rendered or updated.

//ReactDOM.render(element, container, [callback])

//70. How do you memoize a component?

//React.memo is a higher order component which memoizes component until the props change.
//Using memo will cause React to skip rendering a component if its props have not changed. This can improve performance.

//74. What is the lifecycle methods order in mounting?

//constructor()
//static getDerivedStateFromProps()
//render()
//componentDidMount()

//83. What is strict mode in React?

//React.StrictMode is a useful component for highlighting potential problems in an app. It activates additional checks and warnings for its descendants. These checks apply for development mode only.

//84. Template string / template literal

//let text = `Welcome ${firstName}, ${lastName}!`;

//96. What is the difference between React and ReactDOM?

//React package contains: React.createElement(), React.Component, React.Children and other helpers.
//React-dom package contains ReactDOM.render(). It's the glue between React and the DOM.

//106. Why can't you update props in React?

//The React philosophy is that props should be immutable and top-down. This means that a parent can send any prop values to a child, but the child can't modify received props.

//107. How to focus an input element on page load?

//const inputElRef = useRef();
//inputElRef.current.focus();

//108. What is a polyfill?

//A polyfill is a browser fallback, made in JavaScript, that allows functionality you expect to work in modern browsers to work in older browsers, e.g., to support canvas (an HTML5 feature) in older browsers.

//129. What is React router?

// React Router is a powerful routing library built on top of React that helps you add new screens and flows to your application incredibly quickly, all while keeping the URL in sync with what's being displayed on the page.
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


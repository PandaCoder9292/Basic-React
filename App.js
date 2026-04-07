import React from "react";
import ReactDOM from "react-dom/client";
//  React Elements
// React element using React
// const heading = React.createElement("h1", {id: "head"}, "Nameste React");
// console.log(heading);

// JSX (in React) - Not a HTML syntax (it is simillar to HTML)
// React and JSX are 2 different things

//  React element using JSX
// JSX code got transpiled for JSEngine
// const JSXHeading = <h1 className="head" tabIndex="1">Nameste React using JSX🚀</h1>;
// for multiple lines -- ()
// const JSXHeading = (<h1 className="head" tabIndex="1">
//  Nameste React using JSX🚀
//  </h1>);

// React Components -
//  Functional Component
//  1.
// const HeadingComponent = () =>{
//   return <h1>Namaste React Functional Component of React</h1>
// };

// 2.
// const HeadingComponent2 = () =>(
//   <div>
//     <h1>Namaste React Functional Component of React</h1>
//   </div>
// );

// 3.
// const HeadingComponent3 = () => <h1>Namaste React Functional Component of React</h1>;
//  1 , 2 and 3 are same

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(JSXHeading);

// to render a functional component
// root.render(<HeadingComponent2 />)

const number = 9000

const Title = function () {
  return(<h1 className="heading">
    Its over {number} by the way,
    Namaste React from functional component
  </h1>);
};

const jsVari = (
  <div>
    <h1>
      It is just a simple React Elements
      which is 1st ly converted to Object and then converted into HTML element
    </h1>
  </div>
)

const HeadingComponent = () => (
  <div id="container">
    {number} its not just a number , by the way
    <Title />
    {jsVari}
    {console.log("Its over 9000 is the phrase given by vegita")}
    <h1>Namaste React from fun comp</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
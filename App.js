import React from "react";
import ReactDOM from "react-dom/client";

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
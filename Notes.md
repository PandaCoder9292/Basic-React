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

//Swiggy backend API ->
https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7262317&lng=76.8562405&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

#Components (Functional and State)
and
#Hooks(Normal JS function) - 
1. useState()
2. useEffect()

# Important Interview Question
Que> When useEffect is called?
Ans. Cases->
    1. When there is no Dependency Array at all     useEffect(() =>{} )
        - Then it will be called every time the component(in which it is) is Rendered or re-rendered
    2. When there is empty Dependency Array         useEffect(() =>{}, [])
        -Then is is called only once, when comoponent Renders(in beginning) only once
    3. When there is value in Dependency Array
const heading = React.createElement( 
"h1", // create element pasing a props
{
  id:"title",
},
 "Heading 1" 
);

//<h1 id = "title">Heading 1</h1>

const heading2 = React.createElement(
"h2",
{
  id:"title",
},
  "Heading 2"
);

const container = React.createElement( //tag name
  "div", //
  {
      id : "container", // attributes , code
      Hello : "World",// props name is any thing

  },
  [heading,heading2] //children
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react elelment inside the root

//async defer
root.render(container);
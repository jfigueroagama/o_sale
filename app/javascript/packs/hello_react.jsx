// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

// First we import or components: React, RactDom and PropTypes
// Which are dependencies definen in oackage.json
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// We define 'Hello' component which will receive an object with property 'name'
const Hello = props => <div>Hello {props.name}!</div>;

// Componentes in our App main page
// 1 App Wrapper
// 2 Navigation Bar/Header
// 3 Jumbotron
// 4 Product List
// 5 Product
// 6 Footer

// Components
// Containers (Interact with data sources)
// Shared

// We define the value of the property as 'David'
Hello.defaultProps = {
  name: "David"
};

// The property thqat we received has to be a string
Hello.propTypes = {
  name: PropTypes.string
};

// When the ReactDOm is render we will render the "root" component with the name "React"
document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Hello name="React" />, document.getElementById("root"));
});

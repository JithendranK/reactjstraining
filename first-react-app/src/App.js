import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World9! </h1>
      </div>
    );
  }
}
export default hot(module) (App);
//render() {
 // return React.createElement('div', null, `Hello World `);
//}
// ReactDOM.render(
//   React.createElement(App, {props: value}, null),
//   document.getElementById('root')
// );
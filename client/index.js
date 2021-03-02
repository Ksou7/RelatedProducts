import React from "react";
import ReactDOM from "react-dom";
import Related from "./components/Related.jsx";
import Myoutfit from "./components/Myoutfit.jsx";

// window.Product = Product;

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Related />
        <Myoutfit />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

import React from "react";

export default class Modalcomparison extends React.Component {
  constructor(props) {
    super(props);
  }


componentDidMount(){}

  
  render() {
    return (
      <div className="comparison-modal">
        <table>
          <thead>
            <tr>
              <th></th>
              <th> </th>
              <th>Product short Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <i className="fa fa-check left"></i>
              <i className="fa fa-check right"></i>
            </tr>
            <tr>
              <i className="fa fa-check right"></i>
              <i className="fa fa-check left"></i>
            </tr>
            <tr>
              <tr></tr>
              <i className="fa fa-check left"></i>
            </tr>
            <tr>
              <i className="fa fa-check right"></i>
              <i className="fa fa-check right"></i>
            </tr>
            <tr>
              <i className="fa fa-check left"></i>
            </tr>
            <tr>
              <i className="fa fa-check left"></i>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

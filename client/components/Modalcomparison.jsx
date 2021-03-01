import React from "react";

export default class Modalcomparison extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="comparison-modal">
        <table>
        <thead>
          <tr>
            <th>Product short Name</th>
            
            <th className="pshortn">Product short Name</th>
            </tr>
            </thead>
            <tbody>
          <tr>
            <i className="fa fa-check left"></i>
            <i className="fa fa-check right"></i>
          </tr>
          <tr>
          <i className="fa fa-check right"></i>
            <i className="fa fa-check left" ></i>

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

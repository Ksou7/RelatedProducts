import React from 'react';





export default class Modalcomparison extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
  
      <div style={{ /* Hidden by default */
      "position": "fixed", /* Stay in place */
      "z-index": 1, /* Sit on top */
      "right": "40%",
      "margin-top":"10%",
      "top": 0,
      "width": "30%", /* Full width */
      "height": "30%", /* Full height */
      "overflow": "auto", /* Enable scroll if needed */
      "background-color": "white", /* Fallback color */
     
      "padding-top": "60px"}}>
      <table>
        <tr>
          <th>Product short Name</th>
          <th>product</th>
          <th>Product short Name</th>
        </tr>
        <tr>
          <td>
            <i className="fa fa-check"></i>
          </td>
          <td>
            <i className="fa fa-check"></i>
          </td>
        </tr>
        <tr>
          <td>
            <p>product desc</p>
          </td>
        </tr>
        <tr>
          <td>
            <i className="fa fa-check"></i>
          </td>
          <td>
            <i className="fa fa-check"></i>
          </td>
        </tr>
      </table>
      </div> 
    );
  }

}

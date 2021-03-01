import React from "react";
import Modal from "react-modal";

export default class Modalcomparison extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }
  modalOpen() {
    this.setState({ modal: true });
  }
  modalClose() {
    this.setState({
      modal: false,
    });
  }

  render() {
    return (
      <div >
        <table>
          <tr>
            <th>Product short Name</th>

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

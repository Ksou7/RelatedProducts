import React from "react";

export default class Modalcomparison extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        id: 11006,
        campus: "hrnyc",
        name: "Pumped Up Kicks",
        slogan: "Faster than a just about anything",
        description:
          "The Pumped Up serves up crisp court style with a modern look. These shoes show off tennis-whites shades and are constructed with a supple leather upper and a classic rubber cupsole.",
        category: "Kicks",
        default_price: "89.00",
        created_at: "2021-01-12T21:17:59.200Z",
        updated_at: "2021-01-12T21:17:59.200Z",
        features: [
          {
            feature: "Sole",
            value: "Rubber",
          },
          {
            feature: "Material",
            value: "FullControlSkin",
          },
          {
            feature: "Mid-Sole",
            value: "ControlSupport Arch Bridge",
          },
          {
            feature: "Stitching",
            value: "Double Stitch",
          },
        ],
        url: {
          thumbnail_url:
            "https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          url:
            "https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        },
        rating: [],
      },
    };
  }


  render() {
    console.log(this.props.comparisonproduct.features);
    
    
    return (
      <div className="comparison-modal" >
        <table>
          <tr>
            <th>First Product</th>
            <th></th>
            <th>Second Product</th>
          </tr>
          <tr>
            <td>
              <i class="fa fa-check"></i>
            </td>
            <td>Size</td>
            <td>
        
            </td>
          </tr>
          <tr>
            <td>
              <i class="fa fa-check"></i>
            </td>
            <td>Quantity</td>
            <td>
              <i class="fa fa-check"></i>
            </td>
          </tr>
          <tr>
            <td>
              <i class="fa fa-check"></i>
            </td>
            <td>Colors</td>
            <td>
              <i class=""></i>
            </td>
          </tr>
          <tr>
            <td>
              <i class="fa fa-check"></i>
            </td>
            <td>Coton</td>
            <td>
              <i class="fa fa-check"></i>
            </td>
          </tr>
          <tr>
            <td>
              <i class="fa fa-check"></i>
            </td>
            <td>Tissu</td>
            <td>
              <i class="fa fa-check"></i>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

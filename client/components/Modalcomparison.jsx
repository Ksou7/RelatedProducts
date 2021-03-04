import React from "react";

export default class Modalcomparison extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      product : {
        "id": 11006,
        "campus": "hrnyc",
        "name": "Pumped Up Kicks",
        "slogan": "Faster than a just about anything",
        "description": "The Pumped Up serves up crisp court style with a modern look. These shoes show off tennis-whites shades and are constructed with a supple leather upper and a classic rubber cupsole.",
        "category": "Kicks",
        "default_price": "89.00",
        "created_at": "2021-01-12T21:17:59.200Z",
        "updated_at": "2021-01-12T21:17:59.200Z",
        "features": [
            {
                "feature": "Sole",
                "value": "Rubber"
            },
            {
                "feature": "Material",
                "value": "FullControlSkin"
            },
            {
                "feature": "Mid-Sole",
                "value": "ControlSupport Arch Bridge"
            },
            {
                "feature": "Stitching",
                "value": "Double Stitch"
            }
        ],
        "url": {
            "thumbnail_url": "https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
        },
        "rating": []
    }
    }
  }

  componentDidMount(){
    var comparisonfeaturesdata = []
    var comparisonfeaturestate=[]
    var check = false
    var data =this.props.comparisonproduct.features
    for(var i =0 ;i<data.length;i++){
      comparisonfeaturesdata.push(data[i])
      console.log(comparisonfeaturesdata[i]);
    }
    var features=this.state.product.features
    for(var j=0;j<features.length;j++){
      comparisonfeaturestate.push(features[j])
    }
    if(comparisonfeaturesdata[i]===comparisonfeaturestate[j]){
    
     check=true
    
   }
  //  if(comparisonfeatures[i]!==comparisonfeatures[j]){
  //   check=false

  //  }
  }


    


 
 


  
  render() {
    // console.log(this.props.comparisonproduct.features);
    return (
      <div className="comparison-modal">
        <table>
          
        </table>
      </div>
    );
  }
}

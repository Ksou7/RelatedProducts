const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const port = process.env.PORT || 3001;
const e = require("express");
const axios = require("axios");
const env = require("dotenv").config;
const { send } = require("process");

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../public")));

// app.get("/api/products",async(req,res)=>{
//   try{
//   const data = await axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products',{
//      headers :{
//       Authorization :"a1e8950a9d8167991fdded95527d06ae0af76d54",
//   }
// })
// console.log(data.data)
// res.send(data.data)

//    }catch(err){
//    console.error(err)

//  }

// })

app.get("/api/products/:product_id", async (req, res) => {
  var data = [];
  // console.log(req.params.prostyleduct_id);
  await axios
    .get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${req.params.product_id}/related`,
      {
        headers: {
          Authorization: "a1e8950a9d8167991fdded95527d06ae0af76d54",
        },
        _id: req.params.product_id,
      }
    )
    .then(async (related) => {
      console.log(related.data);

      for (var i = 0; i < related.data.length; i++) {
        await axios
          .get(
            `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${related.data[i]}`,
            {
              headers: {
                Authorization: "a1e8950a9d8167991fdded95527d06ae0af76d54",
              },
            }
          )
          .then((product) => data.push(product.data))
          .catch((err) => console.log(err));
        await axios
          .get(
            `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${related.data[i]}/styles`,
            {
              headers: {
                Authorization: "a1e8950a9d8167991fdded95527d06ae0af76d54",
              },
            }
          )
          .then((style) => {
            console.log(style);
            console.log(style.data.results[0].photos[0]);
            if (style.data.results[0].photos) {
              data[i].url = style.data.results[0].photos[0];
            }
          });
      }
    })
    .catch((err) => console.log(err));

  console.log(data);
  res.send(data);
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

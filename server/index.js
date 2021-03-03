const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const port = process.env.PORT || 3001;
const axios = require("axios");
const bodyParser = require("body-parser");
const env = require("dotenv").config();
const router =require('./router/router.js')









app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../public")));


// app.use(`/api/products/:product_id`,router)
var token = process.env.TOKEN;
//this get request for products
// app.get("/api/products/:product_id", async (req, res) => {
//   var data = [];
//   try {
//     const related = await axios.get(
//       `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${req.params.product_id}/related`,
//       {
//         headers: {
//           Authorization: "82554f7a5475edcf407e6b0daf89c75e01960767",
//         },
//         _id: req.params.product_id,
//       }
//     );

//     //loop to get each product
//     for (var i = 0; i < related.data.length; i++) {
//       const productData = await axios.get(
//         `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${
//           related.data[i] * 1
//         }`,
//         {
//           headers: {
//             Authorization: "82554f7a5475edcf407e6b0daf89c75e01960767",
//           },
//         }
//       );
//       data.push(productData);

//       // this get request to get the style from the related data
//       const style = await axios.get(
//         `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${
//           related.data[i] * 1
//         }/styles`,
//         {
//           headers: {
//             Authorization: "82554f7a5475edcf407e6b0daf89c75e01960767",
//           },
//         }
//       );
//       if (style.data.results[0].photos) {
//         data[i].url = style.data.results[0].photos[0];
//       }

//       const reviews = await axios.get(
//         `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews?product_id=${
//           related.data[i] * 1
//         }`,
//         {
//           headers: {
//             Authorization: "82554f7a5475edcf407e6b0daf89c75e01960767",
//           },
//           _id: req.params.product_id,
//         }
//       );

//       if (reviews.data.results) {
//         data[i].rating = reviews.data.results;
//         // console.log(data[i].rating);
//       }
//       data.push(reviews);
//     }
//     console.log("dakhleetttttttttttttttt");
//     console.log("111111111111111111111111111", data);
//   } catch (error) {
//     console.log(error);
//   }
//   console.log(data);
//   res.json(data)
// });

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

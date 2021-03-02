const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const port = process.env.PORT || 3001;
const e = require("express");
const axios = require("axios");
const env = require("dotenv").config();
const { send } = require("process");

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../public")));

//this get request for the product
// app.get("/api/products/:product_id", async (req, res) => {
//   var data = [];
//   await axios
//     .get(
//       `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${req.params.product_id}/related`,
//       {
//         headers: {
//           Authorization: process.env.TOKEN,
//         },
//         _id: req.params.product_id,
//       }
//     )
//     .then(async (related) => {
//       //loop to get the related
//       for (var i = 0; i < related.data.length; i++) {
//         await axios
//           .get(
//             `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${related.data[i]}`,
//             {
//               headers: {
//                 Authorization: process.env.TOKEN,
//               },
//             }
//           )
//           .then((product) => data.push(product.data))
//           .catch((err) => console.log(err));
//         // this get request to get the style from the related data
//         await axios
//           .get(
//             `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${related.data[i]}/styles`,
//             {
//               headers: {
//                 Authorization: process.env.TOKEN,
//               },
//             }
//           )
//           .then((style) => {
//             // console.log(style);
//             // console.log(style.data.results[0].photos[0]);
//             if (style.data.results[0].photos) {
//               data[i].url = style.data.results[0].photos[0];
//             }
//           });
//       }
//     })
//     .catch((err) => console.log(err));

//   console.log(data);
//   res.send(data);
// });

//this Get request to fetch  Rating data

app.get("/reviews", async (req, res) => {
  var related = [];
  await axios
    .get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${req.params.product_id}/related`,
      {
        headers: {
          Authorization: process.env.TOKEN,
        },
        _id: req.params.product_id,
      }
    )
    .then(async (product) => {
      for (var j = 0; j < product.lenght; j++) {
        await axios
          .get(
            `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${product[i]}`,
            {
              headers: {
                Authorization: process.env.TOKEN,
              },
            }
          )
          .then((result) => {
            related.push(result);
            console.log(result);
          });
        await axios
          .get(
            `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${product[i]}`,
            {
              headers: {
                Authorization: process.env.TOKEN,
              },
            }
          )
          .then((rating) => {
            console.log(rating);
            if (related.rating) {
              rating.rating = star.rating;
            }
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
  res.send(related);
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

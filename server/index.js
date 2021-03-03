const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const port = process.env.PORT || 3001;
const e = require("express");
const axios = require("axios");
const env = require("dotenv").config();
const { send } = require("process");
const { json } = require("express");

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../public")));
// var token = process.env.TOKEN;
//this get request for products
app.get("/api/products/:product_id", async (req, res) => {
  var data = [];
  await axios
    .get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${req.params.product_id}/related`,
      {
        headers: {
          Authorization: "82554f7a5475edcf407e6b0daf89c75e01960767",
        },
        _id: req.params.product_id,
      }
    )
    .then(async (related) => {
      //loop to get each product
      for (var i = 0; i < related.data.length; i++) {
        await axios
          .get(
            `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${related.data[i]}`,
            {
              headers: {
                Authorization: "82554f7a5475edcf407e6b0daf89c75e01960767",
              },
            }
          )
          .then((product) => {
            data.push(product.data);
          })
          .catch((err) => console.log(err));
        // this get request to get the style from the related data
        await axios
          .get(
            `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${related.data[i]}/styles`,
            {
              headers: {
                Authorization: "82554f7a5475edcf407e6b0daf89c75e01960767",
              },
            }
          )
          .then((style) => {
            if (style.data.results[0].photos) {
              data[i].url = style.data.results[0].photos[0];
            }
          })
          .catch((err) => console.log(err));

        await axios
          .get(
            `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews?product_id=${related.data[i]}`,
            {
              headers: {
                Authorization: "82554f7a5475edcf407e6b0daf89c75e01960767",
              },
              _id: req.params.product_id,
            }
          )
          .then(async (reviews) => {
            console.log(reviews.data);
            if (reviews.data.results) {
              data[i].rating = reviews.data.results;
              console.log(data[i].rating)
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    })
    .catch((err) => console.log(err));

  res.send(data);
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});



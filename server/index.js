const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const port = process.env.PORT || 3001;

const axios = require("axios");
const env = require("dotenv").config();
// const router = require("./router/router.js");
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../public")));
// var token = process.env.TOKEN;
//this get request for products
// app.use("/api/products/:product_id",router)
app.get("/related/:product_id", async (req, res) => {
  //   var data = [];
  //   try {
  //     const related = await axios.get(
  //       `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${req.params.product_id}/related`,
  //       {
  //         headers: {
  //           Authorization: "5d047793138df51c1ee07ef2dff5defc1537b68f",
  //         },
  //         _id: req.params.product_id,
  //       }
  //     );

  //             //loop to get each product
  //             for (var i = 0; i < related.data.length; i++) {
  //               await axios
  //                 .get(
  //                   `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${related.data[i]}`,
  //                   {
  //                     headers: {
  //                       Authorization: "5d047793138df51c1ee07ef2dff5defc1537b68f",
  //                     },
  //                   }
  //                 )
  //                 .then((product) => {
  //                   data.push(product.data);
  //                 })

  //     //loop to get each product
  //     for (var i = 0; i < related.data.length; i++) {
  //       const productData = await axios.get(
  //         `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${related.data[i]}`,
  //         {
  //           headers: {
  //             Authorization: "5d047793138df51c1ee07ef2dff5defc1537b68f",
  //           },
  //         }
  //       );
  //       data.push(productData);

  //       // this get request to get the style from the related data
  //       const style = await axios.get(
  //         `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${related.data[i]}/styles`,
  //         {
  //           headers: {
  //             Authorization: "5d047793138df51c1ee07ef2dff5defc1537b68f",
  //           },
  //         }
  //         );
  //         data.push(style)
  //       if (style.data.results[0].photos) {
  //         data[i].url = style.data.results[0].photos[0];
  //       }

  //       const reviews = await axios.get(
  //         `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews?product_id=${related.data[i]}`,
  //         {
  //           headers: {
  //             Authorization: "5d047793138df51c1ee07ef2dff5defc1537b68f",
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
  //     // console.log(reviews);
  //     // res.send(data);
  //   }  catch(err){
  //     console.log(err)
  //   }
  // }

  var data = [];
  await axios
    .get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${req.params.product_id}/related`,
      {
        headers: {
          Authorization: "5d047793138df51c1ee07ef2dff5defc1537b68f",
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
                Authorization: "5d047793138df51c1ee07ef2dff5defc1537b68f",
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
                Authorization: "5d047793138df51c1ee07ef2dff5defc1537b68f",
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
                Authorization: "5d047793138df51c1ee07ef2dff5defc1537b68f",
              },
              _id: req.params.product_id,
            }
          )
          .then(async (reviews) => {
            console.log(reviews.data);
            if (reviews.data.results) {
              data[i].rating = reviews.data.results;
              console.log(data[i].rating);
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

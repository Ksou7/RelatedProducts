// const axios = require("axios");

// module.exports.find = async function (req, res) {
//   console.log("dakhllllllllllllet");

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
//     res.send(related);
//   } catch (err) {
//     console.log(err);
//   }
// };

// for (var i = 0; i < related.data.length; i++) {
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
//         console.log(data[i].rating);
//       }
//       data.push(reviews);
//     }
//   } catch (error) {
//     console.log(error);
//     console.log(data);
//   }
//   res.send(data)

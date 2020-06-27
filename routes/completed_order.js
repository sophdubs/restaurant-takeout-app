const express = require('express');
const router  = express.Router();

// module.exports = ({ getCompletedOrder }) => {
//   // GET completed order
//   router.get("/", (req, res) => {
//     getCompletedOrder()
//       .then(order => {
//         res.json({ order });
//       })
//       .catch(err => {
//         res
//           .status(500)
//           .json({ error: err.message });
//       });
//   });
//   return router;
// };
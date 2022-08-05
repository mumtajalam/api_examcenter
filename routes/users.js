// const { response } = require("express");
// const express = require("express");
// const router = express.Router();

// const db = require("../db");

// //http://localhost:4000/users/allusers
// router.get("/allusers", async (req, res) => {
//   try {
//     const response = await db.promise().query("SELECT * FROM users");
//     console.log(response[0]);
//     res.send(response[0]);
//     res.status(201).json(response[0]);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// //http://localhost:4000/users/searchuser/001
// router.get("/searchuser/:userid", async (req, res) => {
//   try {
//     const tempId = req.params.userid;
//     const response = await db
//       .promise()
//       .query(`SELECT * FROM users WHERE userid = '${tempId}'`);
//     res.status(201).json(response[0]);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// //http://localhost:4000/users/finduser?id/001
// router.get("/finduser/", async (req, res) => {
//   try {
//     const tempId = req.query.id;
//     const response = await db
//       .promise()
//       .query(`SELECT * FROM users WHERE userid = '${tempId}'`);
//     res.status(201).json(response[0]);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// //http://localhost:4000/users/removeuser/01
// router.get("/removeuser/:id", async (req, res) => {
//   try {
//     const tempId = req.params.id;
//     const response = await db.promise().query(`DELETE FROM users WHERE
//       userid = '${tempId}'`);
//     res.status(201).json(response[0]);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// module.exports = router;

// import express
// import confing file
// import product file
// create app
// post method
const express = require("express");
const cors = require("cors");
require("./db/config");
const UsersModel = require("./db/user");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/signup", async (req, res) => {
  let data = new UsersModel(req.body);
  let result = await data.save();
 result = result.toObject();
  delete result.password  //  only come email and name not password 
  res.send(result);
});

app.post("/login", async (req, res) => {
  if (req.body.email && req.body.password) {
    // findOne for single search and select for remove password
    let user = await UsersModel.findOne(req.body).select("-password");

    if (user) {
      res.send(user);
    } else {
      res.send("user not found ");
    }
  } else {
    res.send("user not found please fill all detail ");
  }
});

app.listen(5000);

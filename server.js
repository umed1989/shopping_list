const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const items = require("./routes/api/items");
const app = express();
app.use(bodyParser.json());

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));
//routes
app.use("/routes/api/items", items);
const port = 3000 || process.env.PORT;

app.listen(() => console.log(`Your server is running on port: ${port}`));

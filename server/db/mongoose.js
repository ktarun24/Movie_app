const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });
const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(() => {
    console.log(`connected`);
  })
  .catch((err) => console.log(`not connected`));

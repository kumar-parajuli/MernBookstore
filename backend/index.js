// const express = require('express')
// const PORT = require('./config')
import express from "express";

import { PORT } from "./config.js";

const app = express();

app.get('/', (req, res) => {
    console.log(req);
    return res.status(235).send('welcome kumar')
})

app.listen(PORT, () => {
//   console.log("server is connected");
  console.log(`App is listening to port: ${PORT}`)
});

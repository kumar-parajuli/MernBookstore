// const express = require('express')
// const PORT = require('./config')
import express from "express";

import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

//Middleware for parsing request body
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("welcome kumar");
});

app.use('/books', booksRoute)


mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
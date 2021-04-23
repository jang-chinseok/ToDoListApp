import dotenv from "dotenv";
import express from "express";
//import db from "./db";
dotenv.config();


const app = express();

app.get('/',(req, res) => res.send('Home!'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`)
  });


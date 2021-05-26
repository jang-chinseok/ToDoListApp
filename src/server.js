import dotenv from "dotenv";
import express from "express";
import cors from "cors";
//import db from "./db";
dotenv.config();


const app = express();
const cors =  cors();

app.get('/',(req, res) => res.send('Home!'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`)
  });

app.use(cors());
app.use(express.json());


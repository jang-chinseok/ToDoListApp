import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

const db = mongoose.connection; // mongodb와 연결

const opener = () => console.log(`✅Connect to db`);
const closer = (error) => console.log(`❌Fail to connect!:${error}`);

db.once("open",opener);
db.on("close",closer);
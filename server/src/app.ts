import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';


dotenv.config({path: `${path.join(__dirname, '../.env')}`});
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// console.log(path.join(__dirname, '../../.env'));


app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});
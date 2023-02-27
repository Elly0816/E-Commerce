import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';


dotenv.config({path: `${path.join(__dirname, '../.env')}`});

const app = express();
app.use(cors());

// console.log(path.join(__dirname, '../../.env'));


app.listen(process.env.PORT, () => {
    console.log(`server running on ${process.env.PORT}`);
});
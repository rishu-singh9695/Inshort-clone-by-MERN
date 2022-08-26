import express from 'express';

import cors from 'cors';

import Connection from './database/db.js';

import DefaultData from './dafault.js';

import Route from './routes/route.js';

import dotenv from 'dotenv';


const app = express();


dotenv.config();

app.use(cors());

app.use('/', Route);


if (process.env.NODE_ENV == 'production') {
    app.use(express.static ("client/build"));   
}



const PORT = process.env.PORT || 8000;

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

const URL = process.env.MONGODB_URI || `mongodb://${username}:${password}@ac-gnjwhz7-shard-00-00.2wpdcdm.mongodb.net:27017,ac-gnjwhz7-shard-00-01.2wpdcdm.mongodb.net:27017,ac-gnjwhz7-shard-00-02.2wpdcdm.mongodb.net:27017/INSHORT-CLONE?ssl=true&replicaSet=atlas-bhy5u8-shard-0&authSource=admin&retryWrites=true&w=majority`

Connection(URL);

app.listen(PORT, () => console.log(`server is running successfully on PORT ${PORT}`)); 

DefaultData(); 
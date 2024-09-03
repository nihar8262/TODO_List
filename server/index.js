import express from "express";
import cors from 'cors'
import bodyParser from "body-parser";
import { Connection } from "./database/db.js";
import Routes from './routes/Route.js'

const app = express();

app.use(cors());

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(('/'),Routes);

Connection();

const PORT = 5000;

app.listen(PORT, () => console.log(`Your server is running successfully on port number ${PORT}`))
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

function start () {
  app.listen(PORT, () => {console.log(`Server is working on port: ${PORT}...`)});
}


start();

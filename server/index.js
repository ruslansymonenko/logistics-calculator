import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import countriesRoute from './routes/countriesRoute.js';
import carriersRoute from './routes/carriersRoute.js';

dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use('/api/countries/', countriesRoute);
app.use('/api/carriers/', carriersRoute);


function start () {
  app.listen(PORT, () => {console.log(`Server is working on port: ${PORT}...`)});
}


start();

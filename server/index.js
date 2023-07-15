import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import countriesRoute from './routes/countriesRoute.js';

dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use('/api/countries/', countriesRoute);


app.get('/api/carriers', (req, res) => {
  const carriers = [
    { 
      id: 1,
      name: 'Proimport',
      countriesOfWork: ['eu4', 'eu3', 'eu1']
    },
    { 
      id: 2,
      name: 'Fast logistic',
      countriesOfWork: ['eu7', 'eu2', 'eu5']
    },
    { 
      id: 3,
      name: 'Good trucks',
      countriesOfWork: ['eu1', 'eu2', 'eu4']
    }
  ];
})

function start () {
  app.listen(PORT, () => {console.log(`Server is working on port: ${PORT}...`)});
}


start();

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/countries', (req, res) => {
  const countries = [
    {
      id: 111,
      country: 'Italy'
    },
    {
      id: 222,
      country: 'Germany'
    },
    {
      id: 333,
      country: 'Spain'
    },
  ];

  res.json(countries);
})

app.get('/api/carriers', (req, res) => {
  const carriers = [
    { 
      id: 1,
      name: 'Proimport',
      countriesOfWork: ['Spain', 'Italy', 'Germany']
    }
  ];
})

function start () {
  app.listen(PORT, () => {console.log(`Server is working on port: ${PORT}...`)});
}


start();

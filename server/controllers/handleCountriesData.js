export const getCountriesData = (req, res) => {
  const countries = [
    {
      id: 'eu1',
      country: 'Italy'
    },
    {
      id: 'eu2',
      country: 'Germany'
    },
    {
      id: 'eu3',
      country: 'Spain'
    },
    {
      id: 'eu4',
      country: 'Poland'
    },
    {
      id: 'eu5',
      country: 'Greece'
    },
    {
      id: 'eu6',
      country: 'Greate britain'
    },
    {
      id: 'eu7',
      country: 'Czech republic'
    },
  ];

  res.json(countries);
}
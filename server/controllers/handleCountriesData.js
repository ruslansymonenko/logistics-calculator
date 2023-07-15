export const getCountriesData = (req, res) => {
  const countries = [
    {
      id: 'eu1',
      name: 'Italy'
    },
    {
      id: 'eu2',
      name: 'Germany'
    },
    {
      id: 'eu3',
      name: 'Spain'
    },
    {
      id: 'eu4',
      name: 'Poland'
    },
    {
      id: 'eu5',
      name: 'Greece'
    },
    {
      id: 'eu6',
      name: 'Greate britain'
    },
    {
      id: 'eu7',
      name: 'Czech republic'
    },
  ];

  res.json(countries);
}
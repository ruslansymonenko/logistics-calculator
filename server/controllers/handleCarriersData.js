export const getCarriersData = (req, res) => {
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

  res.json(carriers);
}
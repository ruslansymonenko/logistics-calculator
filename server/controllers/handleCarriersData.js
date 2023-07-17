export const getCarriersData = (req, res) => {
  const carriers = [
    { 
      id: 'T1',
      name: 'Proimport',
      countriesOfWork: ['eu4', 'eu3', 'eu1'],
      shippingRates: [
        {
          'eu1': 200,
          'eu3': 220,
          'eu4': 190,
        }
      ],
    },
    { 
      id: 'T2',
      name: 'Fast logistic',
      countriesOfWork: ['eu7', 'eu2', 'eu5'],
      shippingRates: [
        {
          'eu2': 230,
          'eu5': 215,
          'eu7': 260,
        }
      ],
    },
    { 
      id: 'T3',
      name: 'Good trucks',
      countriesOfWork: ['eu1', 'eu2', 'eu4'],
      shippingRates: [
        {
          'eu1': 200,
          'eu3': 245,
          'eu4': 195,
        }
      ],
    }
  ];

  res.json(carriers);
}
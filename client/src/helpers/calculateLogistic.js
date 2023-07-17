const calculateLogistic = (volume, weight, price, currency, country, carrier, shippingRates, ordersAmount, warehousePayment) => {
  if(volume) {
    if(country && carrier) {
      let isCarrierWorkingInCountry = false;
      let carrierRate = 0;
      let result = 0;
      let paymentForTransaction;
      let paymentForWarehouse = 12 * volume;

      if(shippingRates[0][country]) {
        isCarrierWorkingInCountry = true;
        carrierRate = parseInt(shippingRates[0][country]);
      } else {
        alert('This carrier is not working on this country');
        return 0;
      }
  
      if(price > 1000) {
        paymentForTransaction = 100 + price * 0.02;
      } else {
        paymentForTransaction = 100;
      }

      switch(ordersAmount){
        case ordersAmount === 1:
          result = paymentForTransaction + 25 + paymentForWarehouse + (volume * carrierRate);
          return result;
        case ordersAmount > 1:
          result = (paymentForTransaction/ordersAmount) + (25/ordersAmount) + paymentForWarehouse + (volume * carrierRate);
          return result;
        default:
          result = paymentForTransaction + 25 + paymentForWarehouse + (volume * carrierRate);
          return result;
      }

    } else {
      alert('Please chose the country and carrier');
      return 0;
    }

  } else {
    alert('Please chose volume');
    return 0;
  }
};

export default calculateLogistic;
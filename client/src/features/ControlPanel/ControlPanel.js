import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setPrice, setVolume, setWeight, setCountry, setCarrier, setShippingRates, setOrdersAmount, setWarehousePayment, clearIndicators } from '../../store/slices/calculationSlice';
import { fetchCountries } from '../../store/slices/countriesSlice';
import { fetchCarriers } from '../../store/slices/carriersSlice';

import calculateLogistic from '../../helpers/calculateLogistic';

import Button from '../../components/Button/Button';
import Select from '../../components/Select/Select';

import './ControlPanel.scss';

const ControlPanel = () => {
  const countries = useSelector((state) => state.countries.countries);
  const carriers = useSelector((state) => state.carriers.carriers);

  const volume = useSelector((state) => state.calculation.volume);
  const weight = useSelector((state) => state.calculation.weight);
  const price = useSelector((state) => state.calculation.price);
  const currency = useSelector((state) => state.calculation.price);
  const country = useSelector((state) => state.calculation.country);
  const carrier = useSelector((state) => state.calculation.carrier);
  const shippingRates = useSelector((state) => state.calculation.shippingRates);
  const ordersAmount = useSelector((state) => state.calculation.ordersAmount);
  const warehousePayment = useSelector((state) => state.calculation.warehousePayment);

  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCarrier, setSelectedCarrier] = useState('');
  const [selectedOrdersAmount, setSelectedOrdersAmount] = useState('option1');
  const [isWarehouse, setIsWarehouse] = useState(false);

  const [result, setResult] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
    dispatch(fetchCarriers());
  }, [dispatch]);


  const ordersOptions = [
    { id: 'option1', label: '1 order', value: 1 },
    { id: 'option2', label: '2 orders', value: 2 },
    { id: 'option3', label: 'Your value', value: '' },
  ];

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    dispatch(setVolume(newVolume));
  }

  const handleWeightChange = (e) => {
    const newWeight = parseFloat(e.target.value);
    dispatch(setWeight(newWeight));
  }

  const handlePriceChange = (e) => {
    const newPrice = parseFloat(e.target.value);
    dispatch(setPrice(newPrice));
  }

  const findElementById = (array, id) => {
    return array.find(element => element.id === id);
  }

  useEffect(() => {
    if(selectedCountry) {
      dispatch(setCountry(selectedCountry));
    } else {
      dispatch(setCountry(null));
    }
  }, [selectedCountry, dispatch]);

  useEffect(() => {
    if(selectedCarrier) {
      dispatch(setCarrier(selectedCarrier));
      let currentCarrier = findElementById(carriers, selectedCarrier);
      dispatch(setShippingRates(currentCarrier.shippingRates))
    } else {
      dispatch(setCarrier(null));
    }
  }, [selectedCarrier, dispatch, carriers]);

  useEffect(() => {
    if(selectedOrdersAmount && selectedOrdersAmount !== 'option3') {
      let currentOrdersAmount = findElementById(ordersOptions, selectedOrdersAmount);
      dispatch(setOrdersAmount(currentOrdersAmount.value));
    } else if (selectedOrdersAmount === 'option3') {
      let currentOrdersAmount = parseInt(prompt('Put your orders amount', []));
      if(currentOrdersAmount !== isNaN) {
        dispatch(setOrdersAmount(currentOrdersAmount));
      }
    }
  }, [selectedOrdersAmount, dispatch]);

  useEffect(() => {
    dispatch(setWarehousePayment(isWarehouse));
  }, [isWarehouse]);


  const clearControlPanel = () => {
    dispatch(clearIndicators());
    setResult(0);
    setSelectedCountry('');
    setSelectedCarrier('');
  }

  const calculateResult = () => {
    let calculationResult = calculateLogistic(volume, weight, price, currency, country, carrier, shippingRates, ordersAmount, warehousePayment);
    setResult(calculationResult);
  }

  return (
    <div className='control-panel'>
      <div className="control-panel__input-container">
        <label
          className='control-panel__input-name'
          htmlFor="inputField">Volume:</label>
        <input
          className='control-panel__input'
          type="number"
          placeholder='m3'
          value={volume ? volume : ''}
          onChange={handleVolumeChange}
        />
      </div>
      <div className="control-panel__input-container">
        <label
          className='control-panel__input-name'
          htmlFor="inputField">Weight:</label>
        <input
          className='control-panel__input'
          type="number"
          placeholder='kg'
          value={weight ? weight : ''}
          onChange={handleWeightChange}
        />
      </div>
      <div className="control-panel__input-container">
        <label
          className='control-panel__input-name'
          htmlFor="inputField">Price:</label>
        <input
          className='control-panel__input'
          type="number"
          placeholder='Euro'
          value={price ? price : ''}
          onChange={handlePriceChange}
        />
      </div>
      <div className="control-panel__input-container">
        <Select
          selectValue={selectedCountry}
          setSelectValue={setSelectedCountry}
          text={"Select country"}
          options={countries}
          >
        </Select>
      </div>
      <div className="control-panel__input-container">
        <Select
          selectValue={selectedCarrier}
          setSelectValue={setSelectedCarrier}
          text={"Select carrier"}
          options={carriers}
        >
        </Select>
      </div>
      <div className="control-panel__input-container">
        {ordersOptions.map((option => (
          <label key={option.id}>
            <input
              type='checkbox'
              checked={selectedOrdersAmount === option.id}
              onChange={() => setSelectedOrdersAmount(option.id)}
            />
            {option.label}
          </label>
        )))}
      </div>
      <div className="control-panel__input-container">
        <label>
        <input
          type="checkbox"
          checked={isWarehouse}
          onChange={() => setIsWarehouse(!isWarehouse)}
        />
          Payment for transshipment warehouse?
        </label>
      </div>
      <div className="control-panel__btns">
        <Button
          text={'Calculate'}
          action={calculateResult}
        />
        <Button
          text={'Cancel'}
          action={clearControlPanel}
        />
      </div>
      <div className="control-panel__result">
        <span className='control-panel__result-number'>
          {result}
        </span>
        <span className='control-panel__result-currency'>
          euro
        </span>
      </div>
    </div>
  )
}

export default ControlPanel
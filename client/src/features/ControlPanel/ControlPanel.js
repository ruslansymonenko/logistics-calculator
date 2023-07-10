import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setPrice, setVolume, setWeight, clearIndicators } from '../../store/slices/calculationSlice';
import { fetchCountries } from '../../store/slices/countriesSlice';

import Button from '../../components/Button/Button';

import './ControlPanel.scss';

const ControlPanel = () => {
  const countries = useSelector((state) => state.countries.countries);

  const volume = useSelector((state) => state.calculation.volume);
  const weight = useSelector((state) => state.calculation.weight);
  const price = useSelector((state) => state.calculation.price);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCarrier, setSelectedCarrier] = useState('');
  const [ordersAmount, setOrdersAmount] = useState('');
  const [isWarehouse, setIsWarehouse] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);


  const [calculationResult, setCalculationResult] = useState(0);

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

  useEffect(() => {
    console.log(countries);
  }, [countries])

  useEffect(() => {
    // console.log(volume, weight, price); 
  }, [volume, weight, price]);

  const clearControlPanel = () => {
    dispatch(clearIndicators());
    setCalculationResult(0);
  }

  const calculateResult = () => {
    let result = (volume * 200) + (weight * 12) + (price * 0.02)
    setCalculationResult(result);
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
        <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
          <option value="">Select country</option>
          {countries ? countries.map(country => (
            <option 
              key={country.id}
              value={country.id}
            >
                {country.country}
            </option>
          )) : ''}
        </select>
      </div>
      <div className="control-panel__input-container">
        <select value={selectedCarrier} onChange={(e) => setSelectedCarrier(e.target.value)}>
          <option value="">Select carrier</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="control-panel__input-container">
        {ordersOptions.map((option => (
          <label key={option.id}>
            <input
              type='checkbox'
              checked={ordersAmount === option.id}
              onChange={() => setOrdersAmount(option.id)}
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
          {calculationResult}
        </span>
        <span className='control-panel__result-currency'>
          euro
        </span>
      </div>
    </div>
  )
}

export default ControlPanel
import {useState} from 'react';

import Button from '../../components/Button/Button';

import './ControlPanel.scss';

const ControlPanel = () => {
  const [inputVolume, setInputVolume] = useState('');
  const [inputWeight, setInputWeight] = useState('');
  const [inputPrice, setInputPrice] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCarrier, setSelectedCarrier] = useState('');
  const [ordersAmount, setOrdersAmount] = useState('');
  const [isWarehouse, setIsWarehouse] = useState(false);

  const ordersOptions = [
    { id: 'option1', label: '1 order', value: 1 },
    { id: 'option2', label: '2 orders', value: 2 },
    { id: 'option3', label: 'Your value', value: '' },
  ];

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
          value={inputVolume}
          onChange={(e) => setInputVolume(e.target.value)}
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
          value={inputWeight}
          onChange={(e) => setInputWeight(e.target.value)}
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
          value={inputPrice}
          onChange={(e) => setInputPrice(e.target.value)}
        />
      </div>
      <div className="control-panel__input-container">
        <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
          <option value="">Select country</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
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
        />
        <Button
          text={'Cancel'}
        />
      </div>
    </div>
  )
}

export default ControlPanel
import './Select.scss';

const Select = ({selectValue, setSelectValue}) => {
  return (
    <select
          className='select'
          value={selectValue} 
          onChange={(e) => setSelectValue(e.target.value)}>
          <option value="">Select carrier</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
    </select>
  )
}

export default Select
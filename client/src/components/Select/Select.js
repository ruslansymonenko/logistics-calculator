import './Select.scss';

const Select = ({selectValue, setSelectValue, text, options}) => {
  return (
    <select
      className='select'
      value={selectValue} 
      onChange={(e) => setSelectValue(e.target.value)}
    >
      <option value="">{text}</option>
      {options ? options.map(item => (
        <option
          value={item.id}
          key={item.id}
        >
          {item.name}
        </option>
      )) : ''}
    </select>
  )
}

export default Select
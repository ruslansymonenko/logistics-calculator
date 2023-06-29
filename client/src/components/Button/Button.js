import './Button.scss';

const Button = ({text, action}) => {
  return (
    <button 
      className="button"
      onClick={action}
    >
      {text}
    </button>
  )
}

export default Button
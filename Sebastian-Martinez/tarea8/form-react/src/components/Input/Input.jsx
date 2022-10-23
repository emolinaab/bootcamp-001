import './Input.css'

const Input = ({ placeholder, type, name, onChange, value }) => {
  return (
    <div className="input-container">
      <input className='input' type={type} name={name} placeholder={placeholder} onChange={onChange} value={value} />
    </div>
  ); 
};

export default Input;

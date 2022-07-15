const FormInput = ({ type, name, placeholder, value, handleChange, labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
};

export default FormInput;

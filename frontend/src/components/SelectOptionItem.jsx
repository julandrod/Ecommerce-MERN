
const SelectOptionItem = ({ name, labelText, items, handleChange }) => {
  return (
    <div className="form-row">
      <label htmlFor={labelText} className="form-label">
        {labelText}
      </label>
      <select name={name} onChange={handleChange} className="form-input">
        {items.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectOptionItem;

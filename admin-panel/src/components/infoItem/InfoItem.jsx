import "./infoItem.css";

const InfoItem = ({ name, value }) => {
  return (
    <div className="infoItem">
      <span className="infoKey">{name}</span>
      <span className="infoValue">{value}</span>
    </div>
  );
};

export default InfoItem;

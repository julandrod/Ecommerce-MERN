import React from "react";
import Wrapper from "../styles/CategoryItemWrapper";

const CategoryItem = ({ item }) => {
  return (
    <Wrapper>
      <img src={item.img} alt={item.title} />
      <div className="info">
        <h1>{item.title}</h1>
        <button className="btn">COMPRAR</button>
      </div>
    </Wrapper>
  );
};

export default CategoryItem;

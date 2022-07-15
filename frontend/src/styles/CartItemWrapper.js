import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  .product-detail {
    flex: 2;
    display: flex;
    img {
      width: 200px;
      height: 200px;
    }
  }
  .details {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .color-container {
    display: flex;
    align-items: center;
  }
  .product-color {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: black;
    margin-left: 0.5rem;
  }
  .price-detail {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
  .amount-container {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    svg {
      cursor: pointer;
    }
  }
  .amount {
    width: 30px;
    height: 30px;
    font-size: 24px;
    border-radius: 10px;
    border: 1px solid var(--grey-500);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0.2rem;
  }
  .price {
    font-size: 30px;
    font-weight: 200;
  }
  .delete-item {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.5rem;
    svg {
      font-size: 28px;
      color: var(--red-dark);
      cursor: pointer;
    }
  }
`;

export default Wrapper;

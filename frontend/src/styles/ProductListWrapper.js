import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0.1rem;
  width: 100%;

  .filters-container {
    display: flex;
    flex-direction: column;
    width: 90%;
    align-items: center;
    justify-content: space-between;
  }
  .filter-item {
    display: flex;
    align-items: center;
    .filter-select {
      margin-left: 0.5rem;
      padding: 0.2rem;
    }
  }
  .quantity-items {
    text-align: right;
    font-weight: bold;
  }
  .products-container {
    padding: 2rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media (min-width: 768px) {
    padding: 0 4rem;
    width: 90%;
    .filters-container {
      flex-direction: row;
    }
  }
`;

export default Wrapper;

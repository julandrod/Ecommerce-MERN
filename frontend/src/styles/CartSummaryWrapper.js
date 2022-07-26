import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;
  border: 0.5px solid var(--grey-700);
  border-radius: 10px;
  padding: 1rem;
  height: 80vh;
  .summary-item {
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
  }
  .summary-item-title {
    font-weight: bold;
  }
  .checkout-btn {
    width: 100%;
    text-decoration: none;
    text-align: center;
  }
  
  @media (min-width: 1200px) {
    height: 50vh;
  }
`;

export default Wrapper;

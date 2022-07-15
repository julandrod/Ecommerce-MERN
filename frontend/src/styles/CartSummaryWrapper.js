import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;
  border: 0.5px solid var(--grey-700);
  border-radius: 10px;
  padding: 1rem;
  height: 50vh;
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
`;

export default Wrapper;

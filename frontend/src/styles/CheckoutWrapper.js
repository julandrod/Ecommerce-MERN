import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem 4rem;
  h1 {
    text-align: center;
    margin-bottom: 3rem;
  }
  .middle {
    display: flex;
  }
  .subtitle {
    margin-bottom: 2rem;
  }
  .fullname {
    text-transform: capitalize;
  }
  .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    height: 50vh;
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    border: 0.5px solid var(--grey-700);
    border-radius: 10px;
    padding: 1rem;
    height: 50vh;
  }
  .info-item {
    display: flex;
    flex-direction: column;
    span {
      margin-bottom: 1rem;
    }
  }
  .payment-item,
  .info-payment {
    display: flex;
    margin-bottom: 2rem;
    label {
      margin-left: 1rem;
    }
  }
  .bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem 0;
    a {
      margin: 0 2rem;
    }
  }
`;

export default Wrapper;

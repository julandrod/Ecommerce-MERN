import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem 4rem;
  display: flex;
  flex-direction: column;
  h1 {
    text-align: center;
    margin-bottom: 3rem;
  }
  .middle {
    display: flex;
    flex-direction: column;
  }
  .subtitle {
    margin-bottom: 2rem;
  }
  .fullname {
    text-transform: capitalize;
  }
  .left,
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    height: 70vh;
  }
  .right {
    border: 0.5px solid var(--grey-700);
    border-radius: 10px;
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
  @media (min-width: 768px) {
    .middle {
      flex-direction: row;
    }
  }
  @media (min-width: 992px) {
    .left,
    .right {
      height: 60vh;
    }
  }
`;

export default Wrapper;

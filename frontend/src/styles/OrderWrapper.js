import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem 4rem;

  .top,
  .bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .top {
    span {
      padding: 2rem 3rem 0rem 3rem;
      text-align: justify;
      line-height: 1.5rem;
      letter-spacing: var(--letterSpacing);
    }
  }
  .bottom {
    padding: 0rem 3rem;
  }
  .order-item-summary,
  .order-item-total {
    display: flex;
    align-items: center;
    width: 60%;
    border: 1px solid gray;
    min-width: 200px;
  }

  .order-item-summary {
    flex-direction: column;
    img {
      width: 100px;
      height: 100px;
    }
  }
  .order-item-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 3rem;
    span {
      margin: 0.4rem 2rem;
    }
  }
  .order-item-total {
    justify-content: center;
    padding: 1rem 0;
  }
  .btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
  }
  @media (min-width: 768px){
    .order-item-summary{
      flex-direction: row;
    }
  }
`;

export default Wrapper;

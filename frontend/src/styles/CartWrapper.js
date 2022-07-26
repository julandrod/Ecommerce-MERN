import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem 0.5rem;
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 3rem;
    }
  }
  h1 {
    text-align: center;
  }
  .top {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
  .link-btn {
    text-decoration: none;
  }
  .top-texts {
    margin: 1rem 0;
    span {
      font-weight: bold;
    }
  }
  .clear-cart-btn {
    background: var(--grey-700);
    color: white;
    &:hover {
      background: var(--grey-800);
    }
  }
  .bottom {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .info {
    flex: 3;
    hr {
      background-color: var(--grey-700);
      border: none;
      height: 1px;
    }
  }
  @media (min-width: 1200px){
    padding: 1rem 4rem;
    .top, .bottom{
      flex-direction: row;
    }
  }
`;

export default Wrapper;

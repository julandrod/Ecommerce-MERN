import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem 4rem;
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
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
  .link-btn {
    text-decoration: none;
  }
  .top-texts {
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
`;

export default Wrapper;

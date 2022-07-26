import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 5rem;
  position: relative;
  .cart-btn {
    color: black;
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: var(--letterSpacing);
    display: flex;
    align-items: center;
    padding-right: 3rem;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      font-size: 1.8rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -12px;
    right: -18px;
    background: var(--red-main);
    width: 14px;
    height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: white;
    padding: 6px;
  }
  .logout-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    svg {
      font-size: 1.8rem;
    }
  }
  .login-btn {
    color: black;
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
      font-size: 1.8rem;
    }
  }
`;

export default Wrapper;

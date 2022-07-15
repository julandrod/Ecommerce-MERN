import styled from "styled-components";

const Wrapper = styled.nav`
  height: var(--nav-height);
  flex-grow: 1;
  display: flex;
  align-items: center;
  background-color: var(--white);

  .logo-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 5rem;
    .logo {
      height: var(--nav-height);
      width: var(--nav-height);
    }
  }

  .items-container {
    flex: 1;
    /* display: flex;
    align-items: center;
    justify-content: center; */
    ul {
      display: flex;
      padding: 0;
      align-items: center;
      justify-content: space-around;

      .link {
        text-decoration: none;
        color: inherit;
        font-weight: bold;
        font-size: 1.1rem;
        letter-spacing: var(--letterSpacing);
      }
      .active-link {
        padding: 0;
        border-bottom: 2px solid var(--red-main);
      }
    }
  }

  .login-cart-container {
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
      .cart-container {
        display: flex;
        align-items: center;
        position: relative;
        svg {
          font-size: 1.8rem;
          margin-left: 5px;
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
      }
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
  }
  .dropdown {
    position: absolute;
    top: 30px;
    left: 100;
    background: var(--green-light);
    padding: 1rem;
    border-radius: var(--borderRadius);
  }
`;

export default Wrapper;

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
    justify-content: space-between;
    padding-left: 5rem;
  }
  .logo {
    height: var(--nav-height);
  }
  .items-container {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--red-dark);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }

  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .items-container {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 0;
    }
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
    .cart-btn-wrapper {
      display: flex;
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

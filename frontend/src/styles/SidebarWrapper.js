import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    background: transparent;
    border-color: transparent;
    color: var(--red-dark);
    transition: var(--transition);
    cursor: pointer;
    margin-top: 0.2rem;
    svg {
      font-size: 2rem;
    }
  }
  .close-btn:hover {
    color: var(--red-main);
  }
  .logo {
    justify-self: center;
    height: var(--nav-height);
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--grey-900);
    transition: var(--transition);
    letter-spacing: var(--letterSpacing);
  }
  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background-color: var(--grey-100);
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
    justify-content: center;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Wrapper;

import styled from "styled-components";

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  background: black;
  color: white;
  .above {
    padding: 0 2rem;
    display: flex;
    display: grid;
    margin-bottom: 1rem;
  }
  .left,
  .center,
  .right {
    flex: 1;
  }
  .below {
    padding: 1rem 0;
    border-top: 1px solid lightgray;
    display: flex;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
  }
  .social-container {
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: 3rem;
    svg {
      color: var(--red-main);
      margin-right: 1rem;
      font-size: 2rem;
      cursor: pointer;
    }
  }
  .sign-container {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    margin-right: 3rem;
  }
  .btn {
    width: 100%;
    height: 44px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  @media (min-width: 768px) {
    .above {
      grid-template-columns: repeat(3, 1fr);
      column-gap: 1rem;
    }
    .left,
    .center {
      flex: 1;
      padding: 1rem;
    }
    .right {
      flex: 2;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      span {
        padding: 1rem;
      }
    }
    .center {
      display: flex;
      flex-direction: column;
      svg {
        color: var(--red-main);
      }
      span {
        margin-left: 1rem;
      }
    }
    .contact-item {
      display: flex;
      align-items: center;
      padding: 1rem;
      justify-content: flex-start;
    }
    .contact-container {
      padding: 1rem;
      display: flex;
      align-items: center;
    }
    .form-input {
      width: 65%;
      height: 30px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    .btn {
      width: 35%;
    }
  }
  @media (max-width: 1200px) {
    .contact-container {
      flex-direction: column;
    }
    .btn {
      width: 65%;
    }
  }
`;

export default Wrapper;

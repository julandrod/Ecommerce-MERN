import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .form {
    max-width: 400px;
    border-top: 5px solid black;
    justify-content: center;
  }
  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .login-btn {
    background: transparent;
    border: transparent;
    color: var(--red-dark);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`;

export default Wrapper;

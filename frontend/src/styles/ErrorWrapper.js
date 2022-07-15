import styled from "styled-components";

const Wrapper = styled.main`
  text-align: center;
  display: flex;
  flex-direction: column;

  img {
    margin-top: 0;
    max-width: 400px;
    display: block;
    margin-bottom: 2rem;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  a {
    color: var(--red-main);
    text-decoration: underline;
    text-transform: capitalize;
  }
`;

export default Wrapper;

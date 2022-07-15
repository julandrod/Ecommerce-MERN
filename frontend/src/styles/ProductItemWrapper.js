import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;
  padding-bottom: 1.5rem;
  margin: 0.3rem;
  min-width: 280px;
  max-width: 280px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &:hover {
    border: 1px solid black;
  }
  .link {
    text-decoration: none;
    color: inherit;
    height: 100%;
  }
  img {
    width: 100%;
    height: 80%;
    object-fit: cover;
  }
  .info-container {
    padding: 0 1rem 2rem 1rem;
    .subtitle,
    p {
      margin: 0.3rem 0;
    }
    .subtitle{
        font-size: 1.3rem;
    }
    .category {
      color: var(--gray-800);
      text-transform: capitalize;
    }
    .price {
      color: var(--red-dark);
      font-size: 24px;
      font-weight: bold;
    }
  }
`;

export default Wrapper;

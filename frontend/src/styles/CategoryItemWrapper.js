import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1 0 400px;
  margin: 1rem 0.25em;
  padding: 10px;
  height: 50vh;
  position: relative;

  &:hover {
    transform: scale(1.1);
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    h1 {
      margin-bottom: 10px;
    }
  }
`;

export default Wrapper;

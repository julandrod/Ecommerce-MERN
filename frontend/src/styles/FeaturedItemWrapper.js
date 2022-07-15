import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover .info {
    opacity: 1;
  }

  img {
    height: 75%;
    z-index: 2;
  }

  .circle {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
  }

  .info {
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);

    .icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 10px;
      transition: var(--transition);
      cursor:  pointer;

      &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
      }
    }
  }
`;

export default Wrapper;

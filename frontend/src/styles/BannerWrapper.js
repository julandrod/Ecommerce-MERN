import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: var(--slider-height);
  display: flex;
  position: relative;
  overflow: hidden;

  .arrow {
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
  }

  .left {
    left: 10px;
  }

  .right {
    right: 10px;
  }

  .slide {
    width: 100vw;
    height: var(--slider-height);
    display: flex;
    align-items: center;
    position: relative;

    .img-container {
      height: 100%;
      display: flex;
      align-items: center;
    }

    .img-item {
      z-index: -1;
      height: 90%;
    }

    .info-container {
      padding: 50px;
      position: absolute;
      top: 50%;
      left: 20%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 3s ease-in all;

      .btn-slider {
        padding: 20px;
      }
    }
  }
`;

const SliderContainer = styled.div`
  height: 100%;
  display: flex;
  transition: var(--transition);
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

export { Wrapper, SliderContainer };

import { sliderItems } from "../dummyData";
import { Wrapper, SliderContainer } from "../styles/BannerWrapper";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";

const Banner = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    const size = sliderItems.length - 1;

    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : size);
    } else {
      setSlideIndex(slideIndex < size ? slideIndex + 1 : 0);
    }
  };

  return (
    <Wrapper>
      <div className="arrow left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </div>
      <SliderContainer slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <div key={item.id} className="slide">
            <div className="img-container">
              <img src={item.img} alt={item.title} className="img-item" />
            </div>
            <div className="info-container">
              <button className="btn btn-slider">Comprar</button>
            </div>
          </div>
        ))}
      </SliderContainer>
      <div className="arrow right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </div>
    </Wrapper>
  );
};

export default Banner;

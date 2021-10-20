import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

import { sliderItems } from "../../data";
import "./Slider.css";

const Slider = () => {
  const history = useHistory();
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleClick("right");
    }, 4000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line
  }, [slideIndex]);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className="Slider-Container">
      <div
        className="Slider-Arrow"
        style={{ left: "10px" }}
        onClick={() => handleClick("left")}
      >
        <ArrowLeftOutlined />
      </div>
      <div
        className="Slider-Wrapper"
        style={{ transform: "translateX(" + slideIndex * -100 + ")vw" }}
      >
        {sliderItems.map((item) => (
          <div
            className="Slider-Slide"
            key={item.id}
            style={{ backgroundColor: item.bg }}
          >
            <div className="Slider-ImgContainer">
              <img className="Slider-Image" src={item.img} alt={item?.img} />
            </div>
            <div className="Slider-InfoContainer">
              <h1 className="Slider-Title">{item.title}</h1>
              <p className="Slider-Desc">{item.desc}</p>
              <button
                className="Slider-Button"
                onClick={() => history.push("/productList")}
              >
                SHOW NOW
              </button>
            </div>
          </div>
        ))}
      </div>
      <div
        className="Slider-Arrow"
        style={{ right: "10px" }}
        onClick={() => handleClick("right")}
      >
        <ArrowRightOutlined />
      </div>
    </div>
  );
};

export default Slider;

import React from "react";
import Slider from "react-slick";
import "./style.scss";

import { isEmpty } from "lodash";
import Link from "gatsby-link";

const Carousel = ({ categories }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    fade: true,
    pauseOnDotsHover: true,
    pauseOnFocus: true,
  };

  console.warn("cate", categories);

  return (
    <div>
      <Slider {...settings}>
        {!isEmpty(categories.nodes)
          ? categories.nodes.map((category) => {
              return (
                <div key={category.id} className="">
                  <div className="carousel-img-wrap">
                    {!isEmpty(category.image) &&
                    !isEmpty(category.image.sourceUrl) ? (
                      <img
                        src={
                          "https://user-images.githubusercontent.com/12367607/90980823-43d51e80-e57b-11ea-816e-29f941b0ad95.jpg"
                        }
                        alt={
                          !isEmpty(category.image.altText)
                            ? category.image.altText
                            : category.name
                        }
                      />
                    ) : null}
                  </div>
                  <div className="carousal-info">
                    <div className="container">
                      <div className="carousal-info-inner">
                        <h2>Clothing</h2>
                        <p>
                          The standard Lorem Ipsum passage, used since the 1500s
                        </p>
                        <Link
                          to={category.uri}
                          className="btn btn-outline-dark"
                        >
                          {category.name}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </Slider>
    </div>
  );
};

export default Carousel;

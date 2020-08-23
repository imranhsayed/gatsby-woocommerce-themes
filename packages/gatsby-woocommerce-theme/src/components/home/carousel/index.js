import React from "react";
import Slider from "react-slick";
import "./style.scss";

import { isEmpty } from "lodash";
import Link from "gatsby-link";

const Carousel = ({ categories }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
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
                        src={ category.image.sourceUrl }
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
                        <h2>{ category.name }</h2>
                        <p>{ category.description }</p>
                        <Link
                          to={category.uri}
                          className="btn btn-outline-dark"
                        >Explore
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

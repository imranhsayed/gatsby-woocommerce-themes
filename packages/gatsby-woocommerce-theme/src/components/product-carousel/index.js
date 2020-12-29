import React from "react";
import Slider from "react-slick";
import "./style.scss";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import { isEmpty } from "lodash";

const ProductCarousel = ( { galleryImages } ) => {

	if ( isEmpty( galleryImages?.nodes ) ) {
		return null;
	}

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true
	};

	return (
			<Slider {...settings} >
				{ galleryImages.nodes.map( galleryImage => {
					return (
						<div key={ galleryImage?.id } className="top-product-carousel">
							<div className="carousel-img-wrap carousel-img-wrap--product">
								{ !isEmpty( galleryImage.mediaItemUrl ) ? (
									<Zoom>
										<img
											src={ galleryImage?.mediaItemUrl }
											alt={
												!isEmpty( galleryImage?.altText )
													? galleryImage.altText
													: galleryImage?.title
											}
										/>
									</Zoom>
								) : null }
							</div>
						</div>
					)
				} ) }
			</Slider>
	);
};

export default ProductCarousel;

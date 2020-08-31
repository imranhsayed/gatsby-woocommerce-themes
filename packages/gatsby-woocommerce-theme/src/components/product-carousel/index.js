import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./style.scss";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import { isEmpty } from "lodash";

const ProductCarousel = ( { galleryImages } ) => {

	let slider1 = null;
	let slider2 = null;

	const [nav1, setNav1] = useState( null );
	const [nav2, setNav2] = useState( null );

	useEffect( () => {
		setNav1( slider1 )
		setNav2( slider2 )
	}, [slider1, slider2] );

	if ( isEmpty( galleryImages.nodes ) ) {
		return null;
	}

	return (
		<div>
			{/*First slider*/ }
			<Slider
				asNavFor={ nav2 }
				ref={ slider => ( slider1 = slider ) }
				arrows={ true }
			>
				{ galleryImages.nodes.map( galleryImage => {
					return (
						<div key={ galleryImage.id } className="top-product-carousel">
							<div className="carousel-img-wrap carousel-img-wrap--product">
								{ !isEmpty( galleryImage.mediaItemUrl ) ? (
									<Zoom>
										<img
											src={ galleryImage.mediaItemUrl }
											alt={
												!isEmpty( galleryImage.altText )
													? galleryImage.altText
													: galleryImage.title
											}
										/>
									</Zoom>
								) : null }
							</div>
						</div>
					)
				} ) }
			</Slider>
			{/*Second Slider*/ }
			<Slider
				asNavFor={ nav1 }
				ref={ slider => ( slider2 = slider ) }
				slidesToShow={ 3 }
				swipeToSlide={ true }
				focusOnSelect={ true }
			>
				{ galleryImages.nodes.map( galleryImage => {
					return (
						<div key={ galleryImage.id } className="bottom-product-carousel">
							<div className="carousel-img-wrap">
								{ !isEmpty( galleryImage.mediaItemUrl ) ? (
									<img
										src={ galleryImage.mediaItemUrl }
										alt={
											!isEmpty( galleryImage.altText )
												? galleryImage.altText
												: galleryImage.title
										}
									/>
								) : null }
							</div>
						</div>
					)
				} ) }
			</Slider>
		</div>
	);
};

export default ProductCarousel;

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./style.scss";

import { isEmpty } from "lodash";

const ProductCarousel = ( { galleryImages } ) => {


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

	let slider1 = null;
	let slider2 = null;

	const [nav1, setNav1] = useState( null );
	const [nav2, setNav2] = useState( null );

	useEffect( () => {
		setNav1( slider1 )
		setNav2( slider2 )
	}, [] );

	console.warn( 'galleryImages', galleryImages );

	if ( isEmpty( galleryImages.nodes ) ) {
		return null;
	}

	return (
		<div>
			{/*First slider*/}
			<Slider
				asNavFor={ nav2 }
				ref={ slider => ( slider1 = slider ) }
			>
				{ galleryImages.nodes.map( galleryImage => {
					return (
						<div key={ galleryImage.id } className="">
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
			{/*Second Slider*/}
			<Slider
				asNavFor={ nav1 }
				ref={ slider => ( slider2 = slider ) }
				slidesToShow={ 3 }
				swipeToSlide={ true }
				focusOnSelect={ true }
				dots={true}
			>
				{ galleryImages.nodes.map( galleryImage => {
					return (
						<div key={ galleryImage.id } className="">
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

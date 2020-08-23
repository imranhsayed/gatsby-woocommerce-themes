import React from "react";
import Slider from "react-slick";
import './style.scss';

import {isEmpty} from "lodash";
import Link from 'gatsby-link';

const Carousel = ( { categories } ) => {

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
		pauseOnFocus: true
	};

	console.warn( 'cate', categories );

	return (
		<div>
			<Slider { ...settings }>
				{ ! isEmpty( categories.nodes ) ? categories.nodes.map( category => {
					return (
						<div key={ category.id } className="row">
							<div className="carousel-img-wrap col-7">
								{
									!isEmpty( category.image ) && !isEmpty( category.image.sourceUrl ) ?
										<img width="400" height="400" src={ category.image.sourceUrl } alt={ ! isEmpty( category.image.altText  ) ? category.image.altText : category.name  }/>:
										null
								}
							</div>
							<div className="carousal-info col-5">
								<h2>Clothing</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate iste molestiae molestias optio rem repellendus suscipit. Aliquid blanditiis consequatur, dignissimos enim fugiat molestiae rem, repellat soluta, veniam voluptas voluptate voluptatem!</p>
								<Link to={ category.uri } className="btn btn-secondary">{ category.name }</Link>
							</div>
						</div>
					)
				} ) : null }

			</Slider>
		</div>
	);
};

export default Carousel;

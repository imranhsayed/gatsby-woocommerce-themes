import React from "react";
import { isEmpty } from "lodash";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { sanitize } from "../../utils/functions";
import Aside from "../aside";

const SinglePost = (props) => {
    const { data } = props;

    const hasImagesSizes =
        null !== data.featuredImage &&
        !isEmpty(data.featuredImage.node) &&
        !isEmpty(data.featuredImage.node.mediaDetails.sizes);
    const imgSrcUrl = hasImagesSizes
        ? data.featuredImage.node.mediaDetails.sizes[0].sourceUrl
        : "";
    const imgWidth = hasImagesSizes
        ? data.featuredImage.node.mediaDetails.sizes[0].width
        : 450;
    const imgHeight = hasImagesSizes
        ? data.featuredImage.node.mediaDetails.sizes[0].height
        : 450;

    return (
        <>
            {!isEmpty(data) ? (
                <div className="page-container container py-5">
                    {!isEmpty(data.title) ? <h2>{data.title}</h2> : null}
                    <div className="row">
                        <main className="page-content col-md-8">
                            {!isEmpty(data.featuredImage) ? (
                                <figure>
                                    <LazyLoadImage
                                        alt={
                                            data.featuredImage.node.altText
                                                ? data.featuredImage.node.altText
                                                : ""
                                        }
                                        height={imgWidth}
                                        src={imgSrcUrl} // use normal <img> attributes as props
                                        width={imgHeight}
                                        effect="blur"
                                    />
                                </figure>
                            ) : null}

                            {!isEmpty(data.content) ? (
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: sanitize( data.content ),
                                    }}
                                />
                            ) : null}
                        </main>
                        <Aside categories={ data.categoriesData }/>
                    </div>
                </div>
            ) : (
                "Loading..."
            )}
        </>
    );
};

export default SinglePost;

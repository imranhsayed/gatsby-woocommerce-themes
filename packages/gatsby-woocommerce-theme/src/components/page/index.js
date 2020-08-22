import React from "react";
import { isEmpty } from "lodash";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./style.scss";

const Page = (props) => {
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
        <div className="page-container wrapper container">
          {!isEmpty(data.title) ? <h2>{data.title}</h2> : null}
          <div className="row">
            <main className="page-content col-md-8">
              {!isEmpty(data.featuredImage) ? (
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
              ) : null}

              {!isEmpty(data.content) ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.content,
                  }}
                />
              ) : null}
            </main>
            <aside className="aside col-md-4">
              {/* @TODO Widget */}
              <h4>Sidebar</h4>
              <p>lorem ipsum</p>
            </aside>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
};

export default Page;

const ImageFragment = `
fragment ImageFragment on WpMediaItem {
      id
      altText
      caption
      sourceUrl
      mediaDetails {
        sizes {
          height
          width
          name
          sourceUrl
        }
      }
}
`;

module.exports.ImageFragment = ImageFragment;

import React, { useState, useEffect } from "react";
import Pagination from "react-js-pagination";

import Product from "../../product";
import "./style.scss";

const Products = (props) => {
  const { products } = props;
  const [activePage, setActivePage] = useState(1);
  const [currentProducts, setCurrentProducts] = useState(null);
  const productsPerPage = 6;
  const pageRange = 10;

  /**
   * Whenever the products length changes,
   * which means the Product component is re-rendered because
   * its parent changed the 'products' value ( because search was done, by user, so new product results ),
   * then do the following :
   * 1. Set the active page to 1 ( refresh current page to 1 ),
   * 2. Update the products to be displayed
   *
   */
  useEffect(() => {
    const activePage = 1;
    setActivePage(activePage);

    /* eslint-disable */
    setProductsToBeDisplayed(
      activePage * productsPerPage
    ); /* eslint-disable no-alert, no-console */
  }, [products.length]);

  useEffect(() => {
    /* eslint-disable */
    setProductsToBeDisplayed(activePage * productsPerPage);
  }, [activePage]);

  /**
   * Logic for displaying current products
   *
   * @param lastProductIndex Last product index.
   */
  const setProductsToBeDisplayed = (lastProductIndex) => {
    const indexOfLastProduct = lastProductIndex; // e.g. 6
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage; // e.g. 6-6 = 0 ( when product per page is 6 )

    // Get all the products from index of first product, to index of last product
    const currentProductsData = products.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    ); // e.g. products from index 0 to 6 ( 6 items ).
    setCurrentProducts(currentProductsData);
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  if (null === currentProducts) {
    return null;
  }

  return (
    <div className="container">
      <div className="product-container row">
        {currentProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={productsPerPage}
        totalItemsCount={products.length}
        pageRangeDisplayed={pageRange}
        onChange={handlePageChange}
        itemClass={"page-item"}
        linkClass={"page-link"}
        prevPageText={"Previous"}
        nextPageText={"Next"}
      />
    </div>
  );
};

export default Products;

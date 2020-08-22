import React from "react";
import { isEmpty } from "lodash";
import Link from "gatsby-link";
import "./style.scss";

const Categories = (props) => {
  // Here category contains data for is the current category ( e.g. if we are on that category archive page ).
  const { categories, category } = props;

  if (isEmpty(categories)) {
    return null;
  }

  return (
    <div className="categories-list-wrap">
      {categories.nodes.length ? (
        <ul className="categories-list">
          <Link
            className={`categories-link ${"all" === category ? "active" : ""}`}
            to="/"
          >
            All
          </Link>
          {categories.nodes.map((categoryItem) => (
            <Link
              key={categoryItem.id}
              className={`categories-link ${
                category.uri === categoryItem.uri ? "active" : ""
              } `}
              to={categoryItem.uri}
            >
              {categoryItem.name}
            </Link>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Categories;

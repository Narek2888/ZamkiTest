import React from "react";
import { Link } from "react-router-dom";

const SearchResult = ({ item }) => {
  const { id, attributes } = item;
  const { name, images, price } = attributes;
  const url = images?.length ? images[0]?.image?.data?.attributes.url : "";

  const prettyName = name.slice(0, 30);
  return (
    <Link to={`/homepage/${id}`} className="homeCategories__categories__item">
      <div className="homeCategories__categories__item__img">
        {item?.attributes.new ? <div className="newicon">NEW</div> : ""}
        <img
          src={`http://zamki-strapi.codium.pro/${url}`}
          alt="categories_img"
        />
      </div>

      <div className="homeCategories__categories__item__description">
        <h4>{prettyName}...</h4>
        <p>{price} руб</p>
      </div>
    </Link>
  );
};

export default SearchResult;

import React, { useState } from "react";
import dropdownPng from "../../assets/dropdown.png";
import "./HomeCategories.scss";

const CategoriesItem = ({ attributes }) => {
  const { item, subcategories } = attributes;
  const subs = subcategories?.data;
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="categories__item" onClick={() => setOpen(!open)}>
        {item}
        <img
          src={dropdownPng}
          alt="dropdown"
          className="categories__item__dropdown"
        />
      </div>

      {open && subs?.length ? (
        <div className={open ? "Arman" : ""}>
          {subs.map((i) => {
            const { subcategory_rus } = i.attributes;
            return <span key={i.id}>{subcategory_rus}</span>;
          })}
        </div>
      ) : null}
    </div>
  );
};

export default CategoriesItem;

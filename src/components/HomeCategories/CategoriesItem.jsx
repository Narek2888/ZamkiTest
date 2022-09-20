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
        <div className={open ? "subcategory" : ""}>
          {subs.map((i) => {
            const { subcategory_rus } = i.attributes;
            return (
              <div className="subcategory__item" key={i.id}>
                <img
                  src={dropdownPng}
                  alt="subcategory_drop"
                  className="subcategory__item__dropdown"
                />
                {subcategory_rus}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default CategoriesItem;

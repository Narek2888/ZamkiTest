import React, { useState } from "react";
import "./HomeCategories.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const CategoriesItem = ({ attributes }) => {
  const { item, subcategories } = attributes;
  const subs = subcategories?.data;
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="categories__item" onClick={() => setOpen(!open)}>
        {item}
        {subs.length ? (
          <FontAwesomeIcon
            icon={faChevronDown}
            className="categories__item__dropdown"
          />
        ) : null}
      </div>

      {open && subs?.length ? (
        <div className={open ? "subcategory" : ""}>
          {subs.map((i) => {
            const { subcategory_rus } = i.attributes;
            return (
              <button className="subcategory__item" key={i.id}>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="subcategory__item__dropdown"
                />
                {subcategory_rus}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default CategoriesItem;

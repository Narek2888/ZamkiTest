import React from "react";
import "./HomeCategories.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { handleSelectCategory } from "../../redux/features/shop/searchSlice";
import { useDispatch } from "react-redux";

const CategoriesItem = ({ attributes, open, setOpen, id }) => {
  const { item, items, subcategories } = attributes;
  const subs = subcategories?.data;
  const dispatch = useDispatch();

  const isOpen = open === id;

  const handleSelect = (items, isSub) => {
    dispatch(handleSelectCategory(items));
    if (!isSub) setOpen(id);
    if (isOpen && !isSub) setOpen(0);
  };

  return (
    <div>
      <div
        className="categories__item"
        onClick={() => handleSelect(items?.data, false)}
      >
        {item}
        {subs.length ? (
          <FontAwesomeIcon
            icon={faChevronDown}
            className="categories__item__dropdown"
          />
        ) : null}
      </div>

      {isOpen && subs?.length ? (
        <div className={open ? "subcategory" : ""}>
          {subs.map((i) => {
            const { subcategory_rus, items } = i.attributes;
            return (
              <button
                className="subcategory__item"
                key={i.id}
                onClick={() => handleSelect(items?.data, true)}
              >
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

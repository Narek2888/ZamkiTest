import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCard } from "../../redux/features/shop/cardSlice";
import AddItemModal from "../../components/HomePageItem/AddItemModal";
import { Link } from "react-router-dom";


const PartnersItem = ({ item, id }) => {
  const [img, setiMg] = useState({ url: "", id: "", color: "" });
  const [addItemModal, setAddItemModal] = useState(false);
  const dispatch = useDispatch();

  const { name, model, material, price, images, colors } = item;
  const prettyName = name?.length < 20 ? name : `${name?.slice(0, 20)}...`;

  const handleSelectColor = (id, img) => {
    const currImg = img?.filter((item) => {
      return item.color.data.id === id;
    });

    setiMg((prev) => {
      return {
        ...prev,
        url: currImg[0]?.image?.data?.attributes?.url,
        id: currImg[0]?.id,
        color: currImg[0]?.color?.data?.id,
      };
    });
  };

  const onAdd = () => {
    const { name, price } = item;
    const image = {
      id: img.id,
      color: img?.color,
      url: img.url,
    };

    dispatch(addToCard({ name, price, id, img: image, count: 1 }));
    setAddItemModal(true);
  };

  useEffect(() => {
    setiMg(() => {
      return {
        url: images[0]?.image?.data?.attributes?.url,
        id: images[0]?.id,
        color: images[0]?.color?.data?.id,
      };
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Link to={`/homepage/${id}`} className="partners__section__items__item">
      <div className="partners__section__items__item__img">
        <img src={`http://zamki-strapi.codium.pro/${img?.url}`} alt="" />
        <div className="partners__section__items__item__img__color">
          {colors?.data?.map((item) => {
            const { id } = item;
            const { color_hex } = item.attributes;
            return (
              <button
                key={id}
                className="partners__section__items__item__img__color__item"
                onClick={() => handleSelectColor(id, images)}
                style={{ background: color_hex.trim() }}
              />
            );
          })}
        </div>
      </div>
      <div className="partners__section__items__item__description">
        <div className="partners__section__items__item__description__name">
          {prettyName}...
        </div>
        <div className="partners__section__items__item__description__model">
          {model}
        </div>
        <div className="partners__section__items__item__description__material">
          {material}
        </div>
        <div className="partners__section__items__item__description__price">
          {price} Руб.
        </div>
        <div className="partners__section__items__item__description__count">
          Кол-во <input type="number" name="count" readOnly value={1} />
        </div>
        <div
          className="partners__section__items__item__description__postpone"
          onClick={() => onAdd(item)}
        >
          <div className="partners__section__items__item__description__postpone__text">
            В корзину
          </div>
          <div className="partners__section__items__item__description__postpone__buyImg"></div>
        </div>
      </div>
      {addItemModal && (
              <AddItemModal
                setAddItemModal={setAddItemModal}
                itemName={item.name}
              />
            )}
    </Link>
  );
};

export default PartnersItem;

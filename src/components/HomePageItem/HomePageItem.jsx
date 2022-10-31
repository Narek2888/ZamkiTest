import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "react-loader-spinner";
import axios from "../../axios";
import "./HomePageItem.scss";
import AddItemModal from "./AddItemModal";
import image from "./dorma.png";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import Layout from "../../Layout/Layout";
import Path from "../../components/Path/Path";
import { useDispatch } from "react-redux";
import { addToCard } from "../../redux/features/shop/cardSlice";


const HomePageItem = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(1);
  const [img, setiMg] = useState({ url: "", id: "", color: "" });
  const [addItemModal, setAddItemModal] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    axios
      .get(`/items/${id}?populate=deep`)
      .then((res) => res.data.data.attributes)
      .then((data) => {
        setItem(() => {
          return { ...data };
        });

        const { images } = data;
        setiMg((prev) => {
          return {
            ...prev,
            url: images[0]?.image?.data?.attributes?.url,
            id: images[0]?.id,
            color: images[0]?.color?.data?.id,
          };
        });
      });

    setLoading(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onAdd = () => {
    const { name, price } = item;
    const image = {
      id: img.id,
      color: img?.color,
      url: img.url,
    };

    dispatch(addToCard({ name, price, id, img: image, count: Number(count) }));
    setAddItemModal(true);
  };

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const handleSelectColor = (it) => {
    const { id } = it;
    const currImg = item?.images?.filter((item) => {
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

  return (
    <Layout>
      {!loading ? (
        <div className="ditatePage">
          <Path
            path={[
              { name: "Главная страница > ", to: "/" },
              { name: `${item.name}`, to: `/homepage/${id}` },
            ]}
          />
          <HomeCategories />

          <div className="ditatePage__item">
            <h1>{item.name}</h1>
            <div className="ditatePage__item__bio">
              <div className="ditatePage__item__bio__data">
                <img
                  className="ditatePage__item__bio__data__img"
                  src={`http://zamki-strapi.codium.pro/${img?.url}`}
                  alt="img"
                />
                <div className="ditatePage__item__bio__data__description1">
                  <div className="ditatePage__item__bio__data__description1__price__brandLogo">
                    <img
                      src={`http://zamki-strapi.codium.pro/${item?.brand?.data?.attributes?.logo?.data[0].attributes?.url}`}
                      alt=""
                    />
                  </div>
                  <p className="ditatePage__item__bio__data__description1__text"></p>
                  <h4 className="ditatePage__item__bio__data__description1__name2">
                    {item.name}
                  </h4>
                  <div className="ditatePage__item__bio__data__description1__price">
                    {item?.price} Руб.
                  </div>
                  <div className="ditatePage__item__bio__data__description1__count">
                    Кол-во
                    <input
                      type="number"
                      name="count"
                      min={1}
                      value={count}
                      onChange={handleChange}
                    />
                  </div>
                  <div
                    className="ditatePage__item__bio__data__description1__postpone"
                    onClick={onAdd}
                  >
                    <div className="ditatePage__item__bio__data__description1__postpone__text">
                      В корзину
                    </div>
                    <div className="ditatePage__item__bio__data__description1__postpone__buyImg"></div>
                  </div>

                  <div className="ditatePage__item__bio__data__description1__color">
                    {item?.colors?.data?.map((item) => {
                      const { id } = item;
                      const { color_hex } = item.attributes;
                      return (
                        <button
                          key={id}
                          className="ditatePage__item__bio__data__description1__color__item"
                          onClick={() => handleSelectColor(item)}
                          style={{ background: color_hex.trim() }}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="ditatePage__item__bio__description2">
                <h3>Характеристики</h3>
                <h4>Технические характеристики:</h4>
                <p className="ditatePage__item__bio__description2__desc">
                  {item?.filters?.map((item) => {
                    return (
                      <span
                        key={`${item?.filter_name} - ${item?.filter_content}`}
                      >
                        {item?.filter_name} - {item?.filter_content}
                      </span>
                    );
                  })}
                </p>
                <br /> <br />
                <h4>Описание</h4>
                <p>{item.description}</p>
              </div>
            </div>
            <div className="ditatePage__item__similarProducts">
              <div className="ditatePage__item__similarProducts__name">
                Похожие товары
              </div>
              <div className="ditatePage__item__similarProducts__items">
                <div className="ditatePage__item__similarProducts__items__item">
                  <div className="ditatePage__item__similarProducts__items__item__img">
                    <img src={image} alt="categories_img" />
                  </div>

                  <div className="ditatePage__item__similarProducts__items__item__description">
                    <p>Дверные ручки на планке</p>
                    <span className="ditatePage__item__similarProducts__items__item__description__seeAll">
                      посмотреть все
                    </span>
                  </div>
                </div>
                <div className="ditatePage__item__similarProducts__items__item">
                  <div className="ditatePage__item__similarProducts__items__item__img">
                    <img src={image} alt="categories_img" />
                  </div>

                  <div className="ditatePage__item__similarProducts__items__item__description">
                    <p>Дверные ручки на планке</p>
                    <span className="ditatePage__item__similarProducts__items__item__description__seeAll">
                      посмотреть все
                    </span>
                  </div>
                </div>
                <div className="ditatePage__item__similarProducts__items__item">
                  <div className="ditatePage__item__similarProducts__items__item__img">
                    <img src={image} alt="categories_img" />
                  </div>

                  <div className="ditatePage__item__similarProducts__items__item__description">
                    <p>Дверные ручки на планке</p>
                    <span className="ditatePage__item__similarProducts__items__item__description__seeAll">
                      посмотреть все
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {addItemModal && (
              <AddItemModal
                setAddItemModal={setAddItemModal}
                itemName={item.name}
              />
            )}
          </div>
        </div>
      ) : (
        <Loader
          type="TailSpin"
          color="#16CED4"
          height={50}
          width={50}
          timeout={10000}
        />
      )}
    </Layout>
  );
};

export default HomePageItem;

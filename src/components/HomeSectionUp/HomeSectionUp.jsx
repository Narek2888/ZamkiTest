import image from "./image/ruchki.png";
import "./HomeSectionUp.scss";
import ReactCaroussel from "react-caroussel";
import "react-caroussel/dist/index.css";

const HomeSectionUp = () => {
  const items = [
    {
      name: "ЗАМКИ",
      img: image,
      id: 0,
    },
    {
      name: "РУЧКИ",
      img: image,
      id: 1,
    },
    {
      name: "ПЕТЛИ",
      img: image,
      id: 2,
    },

    {
      name: "Двери",
      img: image,
      id: 3,
    },
    {
      name: "Броненакладки",
      img: image,
      id: 4,
    },
    {
      name: "ЦИЛИНДРОВЫЕ МЕХАНИЗМЫ",
      img: image,
      id: 5,
    },

    {
      name: "ЗАМКИ",
      img: image,
      id: 6,
    },
    {
      name: "РУЧКИ",
      img: image,
      id: 7,
    },
    {
      name: "ПЕТЛИ",
      img: image,
      id: 8,
    },

    {
      name: "Двери",
      img: image,
      id: 9,
    },
    {
      name: "Броненакладки",
      img: image,
      id: 10,
    },
    {
      name: "ЦИЛИНДРОВЫЕ МЕХАНИЗМЫ",
      img: image,
      id: 11,
    },
    // {
    //   name: "Автопороги",
    //   img: image,
    //   id: 6,
    // }
  ];

  return (
    <div className="items">
      {items.length <= 6 ? (
        items.map((item) => {
          const { name, id } = item;
          return (
            <div key={id} className="items__item">
              <div className="items__item__img">
                <img src={item.img} alt="alt" />
              </div>
              <div className="items__item__name">{name}</div>
            </div>
          );
        })
      ) : (
        <ReactCaroussel slidesToShow={5} slidesToScroll={3} infinite={true}>
          {Array(items.length)
            .fill(2)
            .map((_, index) => (
              <div
                key={index}
                className="items__item"
                onClick={() => {
                  console.log("click");
                }}
              >
                <div className="items__item__img">
                  <img src={items[index].img} alt="a,t" />
                </div>
                <div className="items__item__name">{items[index].name}</div>
              </div>
            ))}
        </ReactCaroussel>
      )}
    </div>
  );
};
export default HomeSectionUp;

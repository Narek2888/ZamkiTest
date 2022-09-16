import image from "./image/ruchki.png";
import "./HomeSectionUp.scss";
import {Link} from "react-router-dom";

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
    // {
    //   name: "Автопороги",
    //   img: image,
    //   id: 6,
    // }
  ];

  return (
    <div className="items">
      {items.map((item, index) => {
        return (
          <div key={item.id} className="items__item">
            {/* <Link to={`/categories/${item.name.toLowerCase()}`}> */}
            <div className="items__item__img" >
              <img src={item.img} alt="image" />
            </div>
            {/* </Link> */}

            <div className="items__item__name">
                {item.name}
                </div>
          </div>
        );
      })}
    </div>
  );
};
export default HomeSectionUp;

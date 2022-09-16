import image from "./image/petli.png";
import './HomeSectionDown.scss'

const HomeSectionDown = ({name}) => {
  const categories = [
    {
      name: "КРЮЧКИ",
      patcat: "Крючки",
      country: "Amig (Испания)",
      img: image,
    },
    {
      name: "ЦИЛИНДРОВЫЕ МЕХАНИЗМЫ",
      patcat: "Крючки",
      country: "Amig (Испания)",
      img: image,
    },
    {
      name: "ПЕТЛИ",
      patcat: "Крючки",
      country: "Amig (Испания)",
      img: image,
    },
    {
      name: "КРЮЧКИ",
      patcat: "Крючки",
      country: "Amig (Испания)",
      img: image,
    },
    {
      name: "ЦИЛИНДРОВЫЕ МЕХАНИЗМЫ",
      patcat: "Крючки",
      country: "Amig (Испания)",
      img: image,
    },
    {
      name: "ПЕТЛИ",
      patcat: "Крючки",
      country: "Amig (Испания)",
      img: image,
    },
    {
      name: "КРЮЧКИ",
      patcat: "Крючки",
      country: "Amig (Испания)",
      img: image,
    },
    {
      name: "ЦИЛИНДРОВЫЕ МЕХАНИЗМЫ",
      patcat: "Крючки",
      country: "Amig (Испания)",
      img: image,
    },
    {
      name: "ПЕТЛИ",
      patcat: "Крючки",
      country: "Amig (Испания)",
      img: image,
    },
  ];

  return (
    <div className="homeCategories">
      <div className="homeCategories__text">КАТЕГОРИИ</div>

      <div className="homeCategories__categories">
        {categories.map((item, index) => {
          return (
            <div className="homeCategories__categories__item" key={index}>
              <div className="homeCategories__categories__item__img">
                <img src={item.img} alt="categories_img" />
              </div>

              <div className="homeCategories__categories__item__description">
                <h4>{item.name}</h4>
                <p>{item.patcat}</p>
                <p>{item.country}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeSectionDown;

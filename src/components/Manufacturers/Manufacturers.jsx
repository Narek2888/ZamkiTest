import image from "./image/manufacturer.png";
import "./Manufacturers.scss";

const Manufacturers = () => {
  const manufacturers = [
    {
      img: image,
    },
    {
      img: image,
    },
    {
      img: image,
    },
    {
      img: image,
    },
    {
      img: image,
    },
    {
      img: image,
    },
  ];

  return (
    <div className="manufacturers">
      <div className="manufacturers__text">Производители</div>

      <div className="manufacturers__logo">
        {manufacturers.map((item, index) => {
          return (
            <div className="manufacturers__logo__item" key={index}>
              <img src={item.img} alt="manufacturer.png" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Manufacturers;

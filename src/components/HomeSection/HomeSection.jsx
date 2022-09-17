import "./HomeSection.scss";
import HomeSectionUp from "../HomeSectionUp/HomeSectionUp";
import HomeSectionDown from "../HomeSectionDown/HomeSectionDown";

const HomeSection = () => {
  return (
    <div className="homeSection">
      <div className="homeSection__categories__news">
        <div>КАТЕГОРИИ</div>
        <div>НОВИНКИ</div>
      </div>
        <HomeSectionUp />
        <HomeSectionDown />
        
    </div>
  );
};
export default HomeSection;

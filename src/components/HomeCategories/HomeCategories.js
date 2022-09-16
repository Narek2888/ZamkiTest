import './HomeCategories.scss'
import dropdownPng from '../../assets/dropdown.png'

const HomeCategories =  (props) => {
console.log('active 3',  props.active);
    const CategoriesItem = [
      "Замки",
      "Ручки",
      "Петли",
      "Крючки",
      "Броненакладки",
      "Броненакладки",
      " Дверная фурнитура",
      " Доводчики дверей",
      " Фурнитура к раздвижным дверям",
      " Фурнитура для стеклянных дверей",
      " Перекодировочные ключи",
      "Оконная и ПВХ фурнитура",
      "Мебельная фурнитура",
      "Кронштейны",
    ];
    return <div className={props.active ? 'activeMenu' : 'categories'}  >
        {CategoriesItem.map((item, index) => {
            return (
                <div className='categories__item' key={index}>
                    {item}
                    <img src={dropdownPng} alt="dropdown" className='categories__item__dropdown' />
                </div>
            )
        })}
    </div>;
  }
  
  export default HomeCategories;
  
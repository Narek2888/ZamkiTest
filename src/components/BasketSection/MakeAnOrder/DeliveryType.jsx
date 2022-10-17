import React, { useState } from "react";
import { useForm } from "react-final-form";


const DeliveryType = () => {
  const form = useForm();
  const [activeLink, setActiveLink] = useState(1);

  const links = [
    {
      id: 1,
      name: "самовывоз",
    },
    {
      id: 2,
      name: "доставка в пределах мкад",
    },
    {
      id: 3,
      name: "доставка за мкад",
    },
  ];

  const handleClick = (link) => {
    const { name, id } = link;
    setActiveLink(id);
    form.change(`deliveryType`, name);
  };

  const className = (isActive) => {
    return isActive ? "selected__del" : "delivery__type";
  };
  return (
    <div className="DeliveryTypeBox">
      {links.map((link) => {
        return (
          <div
            key={link.id}
            onClick={() => handleClick(link)}
            className={className(link.id === activeLink)}
          >
            {link.name}
          </div>
        );
      })}
    </div>
  );
};

export default DeliveryType;

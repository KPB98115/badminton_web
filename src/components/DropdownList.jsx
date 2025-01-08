import { useState } from "react";
import arrow_up from "../assets/images/arrow-up.png";
import arrow_down from "../assets/images/arrow-down.png";

const DropdownList = (prop) => {
  const [active, setActive] = useState(false);

  return (
    <div className="dropdown_wrapper">
      <button onClick={() => setActive(!active)} className="dropdown_toggle">
        <h2 style={{ color: 'white' }}>{prop.title}</h2>
        <img src={active ? arrow_up : arrow_down} alt="" />
      </button>
      {active && (
        <ul className="dropdown_list">
          {prop.items.map((item, index) => {
            return (
              <li key={index}>
                <p>{item}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default DropdownList;

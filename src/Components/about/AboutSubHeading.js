import classNames from "classnames";
import React from "react";
import "../../styles/aboutMenu.css";

const AboutSubHeading = ({ title, content, active, onClick, menuItem }) => {
  const subContainerClass = `sub-container-${menuItem}`;

  return (
    <section
      className={classNames(subContainerClass, { "active-subheading": active })}
    >
      <h3 onClick={onClick}>{title}</h3>
      <p className="p-container">{content}</p>
    </section>
  );
};

export default AboutSubHeading;

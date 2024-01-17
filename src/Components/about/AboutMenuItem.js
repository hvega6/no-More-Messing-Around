import classNames from "classnames";
import React from "react";
import "../../styles/aboutMenu.css";

const AboutMenuItem = ({ title, active, onClick }) => {
  return (
    <section className={classNames("item", { active })} onClick={onClick}>
      <h2 className="title">{title}</h2>
    </section>
  );
};

export default AboutMenuItem;

import classNames from 'classnames';
import React, { Component } from 'react';
import machineLearningAIIcon from '../../assets/ai.png';
import backendIcon from '../../assets/development.png';
import dataAnalyticsIcon from '../../assets/monitor.png';
import marketingIcon from '../../assets/social-media.png';
import frontendIcon from '../../assets/web-design.png';
import '../../styles/skillsMenu.css';
import skills from '../skills/skillsData.js';


export default class SkillsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: 1,
    };
  }

  handleMenuItemClick = (menuItem) => {
    this.setState({
      activeMenuItem: menuItem,
    });
  };

  renderContent = (skills) => {
    return skills.map((skill, index) => (
      <section
        key={index}
        className={`skill-sub-container-${this.state.activeMenuItem}`}
      >
        <h3>{skill.title}</h3>
        <aside className="level-container">
          {[...Array(6)].map((_, i) => (
            <aside
              key={i}
              className={`level-point ${
                i < skill.level ? "filled" : "unfilled"
              }`}
            />
          ))}
        </aside>
      </section>
    ));
  };

  render() {
    const { activeMenuItem } = this.state;
    const menuItems = ["FRONT-END", "BACK-END", "DATA-SCIENCE", "MACHINE-LEARNING/AI", "MARKETING"];

    const currentIcon = activeMenuItem === 1 ? frontendIcon
      : activeMenuItem === 2
      ? backendIcon
      : activeMenuItem === 3
      ? dataAnalyticsIcon
      : activeMenuItem === 4
      ? machineLearningAIIcon
      : marketingIcon;

    return (
      <div className="skill-menu">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={classNames("skill-item", {
              activeSkill: activeMenuItem === index + 1,
            })}
            onClick={() => this.handleMenuItemClick(index + 1)}
          >
            <h2 className="skill-title">{item}</h2>
          </div>
        ))}
        <img className="skill-icon" src={currentIcon} alt="current skill" />
        <div className="skill-sub-container">
          {this.renderContent(skills[activeMenuItem])}
        </div>
      </div>
    );
  }
}

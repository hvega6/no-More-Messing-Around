import React, { Component } from 'react';
import Avatar from "../avatar/Avatar.js";
import SkillsMenu from "../skills/SkillsMenu.js";

export default class Skills extends Component {
  render() {
    return (
      <>
      <Avatar page="skills" />
      <SkillsMenu />
      </>
    );
  }
}

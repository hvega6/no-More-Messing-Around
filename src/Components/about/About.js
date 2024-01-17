import React, { Component } from 'react';
import AboutMenu from "../about/AboutMenu.js";
import Avatar from "../avatar/Avatar.js";


export default class About extends Component {
  render() {
    return (
      <>
        <Avatar page="about" />
        <AboutMenu />
      </>
    );
  }
}

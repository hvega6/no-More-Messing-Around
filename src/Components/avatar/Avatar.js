import PropTypes from "prop-types";
import React from 'react';
import AvatarImage from "../../assets/avatar-image.png";
import "../../styles/avatar.css";

const Avatar = ({page}) => {
    const avatarClass = `avatar ${page}`
    const spanClass = `shadow-overlay-${page}`

    return (
        <>
        <span className={spanClass}></span>
        <img src={AvatarImage} className={avatarClass} alt='avatar'/>
        </>
    );

};

Avatar.propTypes = {
    page: PropTypes.string.isRequired,
};

export default Avatar;
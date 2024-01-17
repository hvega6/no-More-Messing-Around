import React from "react";
import video from "../../assets/bg-universe.mp4";
import fallbackImage from "../../assets/fallback-image.png";
import "../../styles/background.css";

const background = () =>{
    return(
        <>
        <aside className="shadow-overlay"></aside>
        <video 
            playsInline 
            autoPlay 
            muted 
            loop 
            preload="auto" 
            id="bg" 
            poster={fallbackImage}
        >
            <source src={video} type="video/mp4"/>
        </video>
        </>
    )
}

export default background;
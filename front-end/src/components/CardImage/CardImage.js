import React from 'react';
import './CardImage.css';
import JohnImage from "../../assets/john.jpg";
import JaneImage from "../../assets/jane.jpg";
import MikeImage from "../../assets/mike.jpg";
import KarenImage from "../../assets/karen.jpg";
import TomImage from "../../assets/tom.jpg";
import EmmaImage from "../../assets/emma.jpg";
import DefaultImage from "../../assets/default.jpg";

const CardImage = (props) => {
    const userImages = {
        "John Doe": JohnImage,
        "Jane Smith": JaneImage,
        "Mike Johnson": MikeImage,
        "Karen Lee": KarenImage,
        "Tom Brown": TomImage,
        "Emma Wilson": EmmaImage
    }

    const imgSrc = userImages[props.user.name] || null;

    return imgSrc ? 
        <img src={imgSrc} alt={props.user.name} />
        : <img src={DefaultImage} alt={"default"} />;
};

export default CardImage;

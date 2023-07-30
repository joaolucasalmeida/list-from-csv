import React from 'react';
import './Card.css';
import CardImage from '../CardImage/CardImage';

const Card = (props) => {
    return (
        <div className="user-card">
            <CardImage user={props.user}/>
            <div className="user-details">
                <h2>{props.user.name}</h2>
                <p>Country: {props.user.country}</p>
                <p>City: {props.user.city}</p>
                <p>Favorite Sport: {props.user.favoriteSport}</p>
            </div>
        </div>
    );
};

export default Card;

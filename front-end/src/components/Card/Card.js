import React from 'react';
import './Card.css';
import CardImage from '../CardImage/CardImage';

const Card = (props) => {
    return (
        <div className="user-card">
            <CardImage user={props.user}/>
            <div className="user-details">
                <h2 className='user-card-title'>{props.user.name}</h2>
                <p className="user-card-description">Country: {props.user.country}</p>
                <p className="user-card-description">City: {props.user.city}</p>
                <p className="user-card-description">Sport: {props.user.favorite_sport}</p>
            </div>
        </div>
    );
};

export default Card;

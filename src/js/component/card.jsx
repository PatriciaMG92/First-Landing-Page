import React from "react";
import PropType from "prop-types";

const Card = (props) => {
    return (
        <>
        <div className="card ms-2">
            <img src={props.cardImageURL} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.cardTitle}</h5>
                <p className="card-text">{props.cardDescription}</p>
                <a href="#" className="btn btn-success">{props.cardButtonTitle}</a>
            </div>
        </div>
        </>
    );
};

Card.propTypes = {
    cardImageURL: PropType.string,
    cardTitle:  PropType.string,
    cardDescription:  PropType.string,
    cardButtonTitle:  PropType.string,
};



export default Card;
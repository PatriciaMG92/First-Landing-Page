import React from "react";
import Card from "./card.jsx";

const CardsRow = () => {
    return (
        <>
        <div className="row row-col-sm-1 row-col-lg-4 mb-3">
            <div className="col m-1">
                <Card cardImageURL="https://th.bing.com/th/id/OIP.UOuqmiH3dYyfS_T0kaKwgQAAAA?pid=ImgDet&rs=1" cardTitle="INDIA" cardDescription="Country of a thousand colors where you will discover the Hindu culture through its many temples." cardButtonTitle="Discover India!"/>
            </div>
            <div className="col m-1">
                <Card cardImageURL="https://c1.wallpaperflare.com/preview/288/364/913/sagrada-familia-cathedral-architecture-monument-thumbnail.jpg" cardTitle="SPAIN" cardDescription="Get to know Spain, a place of multiple contrasts where you will enjoy wonderful landscapes and monuments and amazing gastronomy" cardButtonTitle="Discover Spain!"/>
            </div>
            <div className="col m-1">
                <Card cardImageURL="https://c4.wallpaperflare.com/wallpaper/725/355/669/big-blue-icebergs-wallpaper-thumb.jpg" cardTitle="Groenland" cardDescription="Discover the largest island in the world and its glaciers. Travel only suitable for true adventurers" cardButtonTitle="Discover Groenland!"/>
            </div>
            <div className="col m-1">
                <Card cardImageURL="https://th.bing.com/th/id/OIP.ScNBlf3NFjQKcYB_9zChOwAAAA?pid=ImgDet&rs=1" cardTitle="Thailand" cardDescription="If you prefer a cheap destination and visit paradisiacal beaches, this is your place." cardButtonTitle="Discover Thailand!"/>
            </div>
        </div>
        </>
    )
}

export default CardsRow;
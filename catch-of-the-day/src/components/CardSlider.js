import React from "react";

class CardSlider extends React.Component {

    render() {
        return <div className="container">
                    <div className="carousel" data-flickity='{ "wrapAround": true, "prevNextButtons": false, "pageDots": false }'>
                        <div className="carousel-cell"></div>
                        <div className="carousel-cell"></div>
                        <div className="carousel-cell"></div>
                        <div className="carousel-cell"></div>
                        <div className="carousel-cell"></div>
                    </div>
                </div>

    }
}

export default CardSlider;
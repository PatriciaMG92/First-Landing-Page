import React from "react";
import PropType from "prop-types";

const Jumbotron = (props) => {
    return (
        <>
        <div className="p-2 ps-5 mb-2 bg-light rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-2 fw-normal">{props.jumbotronTitle}</h1>
                <p className="col-md-8 fs-4">{props.jumbotronDescription}</p>
                <button className="btn btn-primary btn-lg" type="button">{props.jumbotronButtonTitle}</button>
            </div>
        </div>
        </>
    )
}

Jumbotron.propTypes = {
    jumbotronTitle: PropType.string,
    jumbotronDescription: PropType.string,
    jumbotronButtonTitle: PropType.string,
}

export default Jumbotron;
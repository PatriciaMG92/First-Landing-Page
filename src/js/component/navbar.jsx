import React from "react";
import PropType from "prop-types";

const navbarImage = "https://freesvg.org/storage/img/thumb/Paper_Plane_vishnuvp.png"

const Navbar = (props) => {
    return (
        <>
        <nav className="navbar navbar-expand-sm bg-dark">
            <div className="container-sm justify-content-between"> 
                <a className="navbar-brand text-white" href="#"><img id="navbarImage" src={navbarImage}/>{props.navbarTitle}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active text-white" aria-current="page" href="#">{props.navbarLinkOne}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-secondary" href="#">{props.navbarLinkTwo}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-secondary" href="#">{props.navbarLinkThree}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-secondary" href="#">{props.navbarLinkFour}</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </>
    );
};

Navbar.propTypes = {
    navbarTitle: PropType.string,
    navbarLinkOne: PropType.string,
    navbarLinkTwo: PropType.string,
    navbarLinkThree: PropType.string,
    navbarLinkFour: PropType.string
}

export default Navbar;
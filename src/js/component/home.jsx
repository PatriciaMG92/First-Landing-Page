import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import CardsRow from "./cardsRow.jsx";


//create your first component
const Home = () => {
	return (
		<>
		<Navbar navbarTitle="WorldTravellers" navbarLinkOne="Home" navbarLinkTwo="About us" navbarLinkThree="Travels" navbarLinkFour="Contact" />
		<Jumbotron jumbotronTitle="Welcome to World Travellers!" jumbotronDescription="We have created this website to help you find and organize your next trip. Take a look at our destinations." jumbotronButtonTitle="Take a look!"/>
		<CardsRow />
		</>
	);
};

export default Home;

import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import AppoinmentBannar from "../AppoinmentBannar/AppoinmentBannar";
import Bannar from "../Bannar/Bannar";
import DentalCare from "../DentalCare/DentalCare";
import Doctors from "../Doctors/Doctors.js";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Bannar></Bannar>
      <Services></Services>
      <DentalCare></DentalCare>
      <AppoinmentBannar></AppoinmentBannar>
      <Doctors></Doctors>
    </div>
  );
};

export default Home;

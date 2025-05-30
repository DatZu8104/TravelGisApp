import React from "react";
import { IonPage, IonContent } from "@ionic/react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";
import TourSection from "../../components/TourSection/TourSection"; 
import CheckinGallery from "../../components/CheckinGallery/CheckinGallery";
import VungTauSpecialties from "../../components/VungTauSpecialties/VungTauSpecialties";
import HotSpots from "../../components/HotSpots/HotSpots";
import TravelTips from "../../components/TravelTips/TravelTips";

const HomePage: React.FC = () => {
  console.log(">>> Rendering HomePage with full ordered layout");

  return (
    <IonPage>
      <IonContent fullscreen scrollEvents={true}>
        <Header />
        <HeroSection />
        <TourSection />            {}
        <CheckinGallery />
        <VungTauSpecialties />
        <HotSpots />
        <TravelTips />
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default HomePage;

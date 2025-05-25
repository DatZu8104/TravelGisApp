import React from 'react';
import { IonPage, IonContent } from '@ionic/react';


import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import HeroHeader from 'components/HeroSection/HeroSection';
import HotSpots from 'components/HotSpots/HotSpots';
import CheckinGallery from 'components/CheckinGallery/CheckinGallery';
import VungTauSpecialties from 'components/VungTauSpecialties/VungTauSpecialties';
import TravelTips from 'components/TravelTips/TravelTips';

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
    {/* <HeroHeader /> */}
    {/* <HotSpots /> */}
    {/* <CheckinGallery /> */}
    {/* <VungTauSpecialties /> */}
    {/* <TravelTips /> */}
  </IonContent>
  {/* <Footer /> */}
</IonPage>
  );
};

export default HomePage;

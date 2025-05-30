import React from 'react';
import { IonContent, IonPage } from '@ionic/react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MarineBannerSection from './MarineBannerSection/MarineBannerSection';
import PromotionsSection from './PromotionsSection/PromotionsSection';

const HomeMain: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <MarineBannerSection/>
        <PromotionsSection/>
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default HomeMain;

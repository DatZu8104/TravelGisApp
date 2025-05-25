import { IonText } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import './VungTauSpecialties.css';

const specialties = [
  '/assets/food 1.png',
  '/assets/food 2.png',
  '/assets/food 3.png',
  '/assets/food 4.png',
];

const VungTauSpecialties = () => {
  return (
    <div className="specialties-section">
      <IonText className="specialties-title">Vũng Tàu</IonText>
      <IonText className="specialties-subtitle">
        thiên đường đặc sản, ăn là nhớ, nhớ là thèm!!
      </IonText>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={2.2}
        breakpoints={{
          768: { slidesPerView: 4, spaceBetween: 30 },
        }}
      >
        {specialties.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="circle-image-wrapper">
              <img src={src} alt={`Specialty ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VungTauSpecialties;

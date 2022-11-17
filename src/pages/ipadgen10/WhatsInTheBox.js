import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/css/pagination';

const IpadWITB = () => {
  return (
    <div className="mb-20">
      <h2 className="text-4xl font-semibold text-center mt-20 text-white">
        สิ่งที่มีมาให้ในกล่อง
      </h2>
      <div className="mt-14 hidden lg:block">
        <div
          className="grid grid-cols-3 rounded-xl"
          style={{
            backgroundColor: '#fafafa',
            maxHeight: '330px',
          }}
        >
          <div>
            <img
              src="assets/whatsInTheBox/ipad.jpg"
              className="mx-auto"
              style={{ height: '330px' }}
              alt="WITB iPad"
            />
          </div>
          <div>
            <img
              src="assets/whatsInTheBox/typec-cable.jpg"
              className="mx-auto"
              style={{ height: '330px' }}
              alt="WITB C Cable"
            />
          </div>
          <div>
            <img
              src="assets/whatsInTheBox/20w-adapter.jpg"
              className="mx-auto"
              style={{ height: '330px' }}
              alt="WITB 20W Adapter"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 mt-5">
          <div className="text-center text-white">
            <span>iPad</span>
          </div>
          <div className="text-center text-white">
            <span>USB-C Charge Cable</span>
          </div>
          <div className="text-center text-white">
            <span>อะแดปเตอร์แปลงไฟ USB-C ขนาด 20 วัตต์</span>
          </div>
        </div>
      </div>
      <div className="mt-14 block lg:hidden">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide>
            <div>
              <div
                style={{
                  backgroundColor: '#fafafa',
                  maxHeight: '330px',
                }}
              >
                <img
                  src="assets/whatsInTheBox/ipad.jpg"
                  className="mx-auto"
                  style={{ height: '330px' }}
                  alt="WITB iPad"
                />
              </div>
              <div className="text-center mt-5">
                <span>iPad</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div
                style={{
                  backgroundColor: '#fafafa',
                  maxHeight: '330px',
                }}
              >
                <img
                  src="assets/whatsInTheBox/typec-cable.jpg"
                  className="mx-auto"
                  style={{ height: '330px' }}
                  alt="WITB C Cable"
                />
              </div>
              <div className="text-center mt-5">
                <span>USB-C Charge Cable</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div
                style={{
                  backgroundColor: '#fafafa',
                  maxHeight: '330px',
                }}
              >
                <img
                  src="assets/whatsInTheBox/20w-adapter.jpg"
                  className="mx-auto"
                  style={{ height: '330px' }}
                  alt="WITB 20W Adapter"
                />
              </div>
              <div className="text-center mt-5">
                <span>อะแดปเตอร์แปลงไฟ USB-C ขนาด 20 วัตต์</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default IpadWITB;
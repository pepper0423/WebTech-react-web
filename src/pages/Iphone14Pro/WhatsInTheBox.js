import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/css/pagination';

const Iphone14ProWITB = () => {
  return (
    <div className="mb-20">
      <h2 className="text-4xl font-semibold text-center mt-20 text-white">
        สิ่งที่มีมาให้ในกล่อง
      </h2>
      <div className="mt-14 hidden lg:block">
        <div
          className="grid grid-cols-2 rounded-xl"
          style={{
            backgroundColor: '#fafafa',
            maxHeight: '330px',
          }}
        >
          <div>
            <img
              src="assets/whatsInTheBox/iphone14pro.jpg"
              className="mx-auto"
              style={{ height: '330px' }}
              alt="WITB iPhone 14 Pro"
            />
          </div>
          <div>
            <img
              src="../assets/whatsInTheBox/iphone-14-pro-cable-witb-202209.jpg"
              className="mx-auto"
              style={{ height: '330px' }}
              alt="WITB Lightning Cable"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 mt-5 text-white">
          <div className="text-center">
            <span>iPhone</span>
          </div>
          <div className="text-center">
            <span>สาย USB-C เป็น ​Lightning</span>
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
                  src="assets/whatsInTheBox/iphone14pro.jpg"
                  className="mx-auto"
                  style={{ height: '330px' }}
                  alt="WITB iPhone 14 Pro"
                />
              </div>
              <div className="text-center mt-5">
                <span>iPhone</span>
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
                  src="../assets/whatsInTheBox/iphone-14-pro-cable-witb-202209.jpg"
                  className="mx-auto"
                  style={{ height: '330px' }}
                  alt="WITB Lightning Cable"
                />
              </div>
              <div className="text-center mt-5">
                <span>สาย USB-C เป็น ​Lightning</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <p className="text-sm text-center mt-10 text-gray-300">
        iPhone 14 และ iPhone 14 Pro Max ไม่มีอะแดปเตอร์แปลงไฟหรือ EarPods ให้มาด้วย{' '}
        <span className="text-white">
        ซึ่งเป็นส่วนหนึ่งในความพยายามของเราที่จะไปสู่ ความเป็นกลางทางคาร์บอนภายในปี 2030
        </span>{' '}
        สิ่งที่มีมาให้ในกล่องได้แก่สาย USB‑C เป็น Lightning
        ที่รองรับการชาร์จเร็วและใช้งานได้กับอะแดปเตอร์แปลงไฟ USB-C
        รวมถึงพอร์ตคอมพิวเตอร์ต่างๆ <br />
        <br />
        เราส่งเสริมให้คุณใช้ซ้ำสาย USB‑A เป็น Lightning
        รวมถึงอะแดปเตอร์แปลงไฟและหูฟังที่คุณมีอยู่แล้วในตอนนี้
        ซึ่งสามารถใช้งานได้กับ iPhone รุ่นต่างๆ เหล่านี้
        แต่หากคุณต้องการอะแดปเตอร์แปลงไฟหรือหูุฟังของ Apple อันใหม่
        ก็มีวางจำหน่ายให้เลือกซื้อได้
      </p>
    </div>
  );
};

export default Iphone14ProWITB;

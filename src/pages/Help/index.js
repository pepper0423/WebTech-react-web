import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Nav from '../../components/nav';
import Breadcrumb from '../../components/Breadcrumb';
import FormContact from '../../components/FormContact';

const Help = () => {

  return (
    <div className='bg-netflix-black'>
      <Nav disableSticky={true} />
      <div id="title">
        <div
          className="hidden md:block"
          style={{
            backgroundImage:
              'url("assets/src_image/help/psp-hero-banner-homepage-welcome.image.large_2x.jpg")',
            height: '540px',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h1
            className="text-5xl font-medium text-white text-center"
            style={{ paddingTop: '150px' }}
          >
            บริการช่วยเหลือของ Apple
          </h1>
        </div>
        <div className="md:hidden">
          <img
            style={{ height: '326px' }}
            src="assets/src_image/help/psp-hero-banner-homepage-welcome.image.large_2x.jpg"
            className="object-cover"
            alt=""
          />
          <h1 className="text-3xl font-medium text-center pt-14">
            บริการช่วยเหลือของ Apple
          </h1>
        </div>
      </div>
      <div className="my-12 grid grid-cols-1 justify-items-center text-center">
        <div>
          <h1 className="text-5xl text-white font-medium my-4">ค้นหาหัวข้อ</h1>
          <div className="container flex mx-auto mt-4">
            <div className="flex border-2 rounded">
              <button className="flex items-center justify-center px-4 bg-red-200">
                <svg
                  className="w-6 h-6 text-white-800"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
                </svg>
              </button>
              <input
                type="text"
                className="px-4 py-2"
                style={{ width: '50vw' }}
                placeholder="ค้นหาบริการช่วยเหลือ"
              />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-2 my-12 gap-y-8 md:grid-cols-3 justify-items-center xl:grid-cols-7 text-center xl:mx-96 xl:my-24">
        <div className="w-16 flex flex-col space-y-4">
          <img
            alt=""
            src="assets/src_image/help/homepage_productnav_iphone_family_2x.png"
            className='invert'
          />
          <span className='text-white'>iPhone</span>
        </div>
        <div className="w-16 flex flex-col space-y-4">
          <img
            alt=""
            src="assets/src_image/help/homepage_productnav_imac_family_2x.png"
            className='invert'
          />
          <span className='text-white'>Mac</span>
        </div>
        <div className="w-16 flex flex-col space-y-4">
          <img
            alt=""
            src="assets/src_image/help/homepage_productnav_ipad_family_2x.png"
            className='invert'
          />
          <span className='text-white'>iPad</span>
        </div>
        <div className="w-16 flex flex-col space-y-4">
          <img
            alt=""
            src="assets/src_image/help/homepage_productnav_apple_watch_2x.png"
            className='invert'
          />
          <span className='text-white'>Watch</span>
        </div>
        <div className="w-16 flex flex-col space-y-4">
          <img
            alt=""
            src="assets/src_image/help/homepage-productdrawer-airpods-dark_2x.png"
            className='invert'
          />
          <span className='text-white'>AirPods</span>
        </div>
        <div className="w-16 flex flex-col space-y-4">
          <img
            alt=""
            src="assets/src_image/help/homepage_productdrawer_applemusic_2x.png"
            className='invert'
          />
          <span className='text-white'>Music</span>
        </div>
        <div className="w-16 flex flex-col space-y-4">
          <img
            alt=""
            src="assets/src_image/help/homepage-productdrawer-appletv_2x.png"
            className='invert'
          />
          <span className='text-white'>TV</span>
        </div>
      </div>
      <hr />
      <FormContact />
      <div
        className="grid grid-cols-1 my-12 text-center gap-20 xl:my-20 xl:mx-96 xl:grid-cols-3 xl:divide-x xl:gap-0 text-white"
      >
        <div className="flex-1 ">
          <img
            alt=""
            src="assets/src_image/help/promo-icon-homepage-password_2x.png"
            className="mx-auto mb-4 w-10"
          />
          <span className='hover:underline cursor-pointer font-semibold'>
            ลืม Apple ID หรือรหัสผ่าน
            <KeyboardArrowRightIcon sx={{ fontSize: '18px' }} />
          </span>
        </div>
        <div className="flex-1 ">
          <img
            alt=""
            src="assets/src_image/help/promo-icon-homepage-subscriptions_2x.png"
            className="mx-auto mb-4 w-10"
          />
          <span className='hover:underline cursor-pointer font-semibold'>
            การเรียกเก็บเงินและการสมัครรับ
            <KeyboardArrowRightIcon sx={{ fontSize: '18px' }} />
          </span>
        </div>
        <div className="flex-1 ">
          <img
            alt=""
            src="assets/src_image/help/promo-icon-find-my_2x.png"
            className="mx-auto mb-4 w-10"
          />
          <span className='hover:underline cursor-pointer font-semibold'>
            ค้นหาของฉัน
            <KeyboardArrowRightIcon sx={{ fontSize: '18px' }} />
          </span>
        </div>
      </div>
      <hr />
      <div className="relative my-12 object-contain">
        <img
          alt=""
          src="assets/src_image/help/psp-hero-banner-homepage-getsupport.image.large_2x.jpg"
          className="object-contain h-full"
        />
        <div className="relative ml-4 xl:inset-y-1/4 xl:left-1/4 xl:absolute sm:py-5 sm:pl-5  ">
          <h1 className="text-3xl text-white font-medium xl:text-white md:text-5xl mt-4">
            รับบริการช่วยเหลือ
          </h1>
          <p className="text-xl text-gray-300 my-4 xl:text-white">
            เลือกผลิตภัณฑ์ แล้วเราจะหาวิธีแก้ปัญหาที่ดีที่สุดให้กับคุณ
            <br />
          </p>
          <p className="text-xl cursor-pointer hover:underline" style={{ color: '#6BF' }}>
            เริ่มเลย <KeyboardArrowRightIcon sx={{ fontSize: '18px' }} />
          </p>
          <p className="text-xl cursor-pointer hover:underline" style={{ color: '#6BF' }}>
            ดาวน์โหลดแอพ Apple Support{' '}
            <KeyboardArrowRightIcon sx={{ fontSize: '18px' }} />
          </p>
        </div>
        <hr></hr>
      </div>
      <div className="grid grid-cols-1  mx-10 xl:w-5/12 xl:mx-auto my-12 xl:grid-cols-2">
        <div className="flex ">
          <img
            alt=""
            src="assets/src_image/help/applecare-products_2x.png"
            className="object-scale-down "
          />
        </div>
        <div className="mt-4 xl:pr-12">
          <h1 className="text-3xl text-white font-medium my-4 ">
            บริการและความช่วยเหลือจากผู้เชี่ยวชาญของ Apple
          </h1>
          <p className="text-xl mt-4 mb-14 text-gray-300">
            ผลิตภัณฑ์ AppleCare
            มีตัวเลือกบริการด้านฮาร์ดแวร์เพิ่มเติมและการสนับสนุนด้านเทคนิคโดยผู้เชี่ยวชาญจาก
            Apple
          </p>
          <p className="text-xl text-white cursor-pointer hover:underline">
            ดูข้อมูลเกี่ยวกับแผน AppleCare
            <KeyboardArrowRightIcon sx={{ fontSize: '18px' }} />
          </p>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-1 justify-items-center my-12 text-center">
        <div>
          <img
            alt=""
            src="assets/src_image/help/contentlink-warrantyandrepair_2x.png"
            className="object-scale-down w-64"
          />
        </div>
        <div className="mx-10 xl:w-7/12">
          <h1 className="text-5xl text-white font-medium my-4">
            การรับประกันและการซ่อมแซม
          </h1>
          <div className="mx-auto max-w-screen-md px-5">
            <p className="text-xl text-gray-300 ">
              <span className='text-white font-mediumn cursor-pointer hover:underline'>
                ดูว่าผลิตภัณฑ์ Apple ของคุณเข้าเกณฑ์
              </span>
              การรับบริการและบริการช่วยเหลือภายใต้การรับประกันแบบจำกัดของเราหรือไม่
              มีการซ่อมที่อยู่ระหว่างดำเนินการแล้วใช่หรือไม่{' '}
              <span className='text-white font-mediumn cursor-pointer hover:underline'>มาตรวจสอบสถานะกัน</span>
            </p>
          </div>
        </div>
      </div>
      <hr className="w-8/12 mx-auto" />
      <h1 className="text-center mt-10 mb-3 text-3xl text-white  font-medium">
        โปรดระวังชิ้นส่วนของปลอม
      </h1>
      <div className="mx-auto max-w-screen-md mb-10 px-5">
        <p className="text-center text-xl text-gray-300">
          อะแดปเตอร์แปลงไฟและแบตเตอรี่ที่เป็นของปลอมหรือของผู้ให้บริการรายอื่นอาจไม่ได้รับการออกแบบมาอย่างเหมาะ
          สมและสามารถส่งผลให้เกิดปัญหาด้านความปลอดภัยได้
          เพื่อให้แน่ใจว่าคุณได้รับแบตเตอรี่ Apple ของแท้ในระหว่าง
          ที่ส่งเครื่องเข้ารับการเปลี่ยนแบตเตอรี่ เราขอแนะนำให้คุณไปรับบริการที่{' '}
          <span className='text-white font-mediumn cursor-pointer hover:underline'>Apple Store</span> หรือ{' '}
          <span className='text-white font-mediumn cursor-pointer hover:underline'>
            ผู้ให้บริการที่ได้รับอนุญาตจาก Apple
          </span>{' '}
          หากคุณจำเป็นต้องเปลี่ยนเป็นอะแดปเตอร์ใหม่เพื่อชาร์จอุปกรณ์ Apple
          เราขอแนะนำให้คุณซื้ออะแดปเตอร์แปลงไฟของ Apple
        </p>
        <p className="mt-3 text-center text-xl text-gray-300">
          นอกจากนี้
          จอแสดงผลหน้าจอที่ไม่ใช่ชิ้นส่วนของแท้ที่นำมาเปลี่ยนอาจทำงานผิดปกติและส่งผลให้คุณภาพของภาพลดลง
          การซ่อมหน้าจอที่ได้รับการรับรองจาก Apple จะดำเนินการโดยผู้เชี่ยว
          ชาญที่เชื่อถือได้ ซึ่งจะใช้ชิ้นส่วนของแท้จาก Apple
        </p>
      </div>
      <hr />
      <div className="grid grid-cols-1  mx-10 xl:w-5/12 xl:mx-auto my-12 xl:grid-cols-2">
        <div className="mt-4 xl:pr-12">
          <h1 className="text-3xl text-white font-medium my-4 xl:text-5xl ">
            บริการช่วยเหลือของฉัน
          </h1>
          <p className="text-xl mt-4 mb-14 text-gray-300">
            ตรวจสอบความคุ้มครองของบริการและการสนับสนุน
            และรับข้อมูลเกี่ยวกับผลิตภัณฑ์ Apple ของคุณได้ในที่เดียว
          </p>
          <p className="text-xl text-white font-mediumn cursor-pointer hover:underline">
            ดูข้อมูลเกี่ยวกับแผน AppleCare
            <KeyboardArrowRightIcon sx={{ fontSize: '18px' }} />
          </p>
        </div>
        <div className="flex">
          <img
            alt=""
            src="assets/src_image/help/featured-section-my-support_2x.png"
            className="object-scale-down "
          />
        </div>
      </div>
      <hr />
      <div className="justify-items-center">
        <h1 className="text-3xl text-white font-medium xl:text-white md:text-5xl mt-4 text-center">
          Apple Iconsiam
        </h1>
        <p className="text-xl mt-4 mb-14 text-gray-300 text-center">
          เปิดให้บริการถึง 22:00
        </p>
        <br />
        <div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.869738528118!2d100.50597522865358!3d13.726335270774802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2994df8fca6cf%3A0xa752fe700b7fbc5f!2z4LmB4Lit4Lib4LmA4Lib4Li04LmJ4LilIOC5hOC4reC4hOC4reC4meC4quC4ouC4suC4oQ!5e0!3m2!1sth!2sth!4v1668678009134!5m2!1sth!2sth" 
            width="100%" 
            height="450" 
            style={{border:"0"}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
      <Breadcrumb breadcrumb={['บริการช่วยเหลือ']} />
    </div>
  );
};

export default Help;

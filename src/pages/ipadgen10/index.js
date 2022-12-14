import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useStore } from '../../hooks/store';
import { FaAppleAlt } from 'react-icons/fa';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Nav from '../../components/nav';
import ProductNavBar from '../../components/ProductNavBar';
import VariantOption from '../../components/VariantOption';
import VariantSelection from '../../components/VariantSelection';
import AppleButton from '../../components/AppleButton';
import Breadcrumb from '../../components/Breadcrumb';
import Footnote from '../../components/Footnote';

import IpadWITB from './WhatsInTheBox';
import IpadServices from './Services';



const ipadPrice = {
  wifi: {
    '64GB': 17900,
    '256GB': 23900,
  },
  cellular: {
    '64GB': 23900,
    '256GB': 29900,
  },
};

const colorNameTH = {
  blue: 'ฟ้า',
  pink: 'ชมพู',
  silver: 'เงิน',
  yellow: 'เหลือง',
};

const Ipadgen10 = () => {
  const navigate = useNavigate();
  const store = useStore();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [price, setPrice] = useState(ipadPrice['wifi']['64GB']);
  const [priceText, setPriceText] = useState('เริ่มต้นที่ ฿17,900');
  const [productImage, setProductImage] = useState('ipad-family.png');

  const [variantType, setVariantType] = useState('');
  const handleChangeVariantType = (type) => {
    setVariantType(type);
  };

  const [variantColor, setVariantColor] = useState('');
  const handleChangeVariantColor = (color) => {
    setVariantColor(color);
    setProductImage(`ipad-${color}.png`);
  };

  const [variantStorage, setVariantStorage] = useState('');
  const handleChangeVariantStorage = (storage) => {
    setVariantStorage(storage);
  };

  const [variantEngraving, setVariantEngraving] = useState('');
  const handleChangeVariantEngraving = (engraving) => {
    setVariantEngraving(engraving);
    setTimeout(() => {
      const element = document.getElementById('checkout');
      const yOffset = -50;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }, 100);
  };

  const [variantAppleCare, setVariantAppleCare] = useState(false);
  const handleChangeVariantAppleCare = () => {
    setVariantAppleCare(!variantAppleCare);
  };

  useEffect(() => {
    let calPrice;
    if (!variantType) {
      calPrice = ipadPrice['wifi'][!!variantStorage ? variantStorage : '64GB'];
      setPriceText(`เริ่มต้นที่ ฿${Number(calPrice).toLocaleString('en')}`);
    } else {
      calPrice = ipadPrice[variantType][variantStorage];
      if (variantAppleCare) {
        calPrice += 2590;
      }
      setPriceText(
        `฿${Number(calPrice).toLocaleString('en', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`
      );
    }
    setPrice(calPrice);
  }, [variantType, variantStorage, variantAppleCare]);

  const addProductToBag = () => {
    console.log('add product');
    const { bag, setBag } = store;
    const product = {
      id: Date.now(),
      product: 'iphone13pro',
      name: `iPad รุ่น 10.2 นิ้ว ${variantType === 'wifi' ? 'Wi-fi' : 'Wi-fi + Cellular'
        } ${variantStorage} - สี${colorNameTH[variantColor]}`,
      shortName: `iPad (รุ่นที่ 10)`,
      color: variantColor,
      type: variantType,
      storage: variantStorage,
      appleCare: variantAppleCare,
      appleCareCost: 2590,
      price: price,
      image: `assets/products/ipad/${productImage}`,
    };
    setBag([...bag, product]);
    navigate('/bag');
  };

  return (
    <div className='bg-netflix-black'>
      <Nav disableSticky={true} />
      <ProductNavBar productName="iPad" priceText={priceText} />
      <div className="max-w-screen-lg mx-auto px-5 min-h-screen">
        <div
          id="iphone13pro-selection"
          className="grid grid-cols-1 md:grid-cols-2 mb-10"
        >
          <div>
            <div className="sticky top-0">
              <div className="md:hidden text-center mt-14">
                <p className="text-red-600 mb-2">ใหม่</p>
                <h1 className="text-4xl font-semibold text-white">ซื้อ iPad</h1>
                <p className="text-white mb-2 ">รุ่นที่10</p>
              </div>
              <img
                src={`assets/products/ipad/${productImage}`}
                alt="iPad"
                className="block mx-auto mb-5"
              />
              <div className="mt-20 grid grid-cols-3 gap-3 mb-5 text-center">
                <div className="flex flex-col items-center">
                  <svg
                    viewBox="0 0 35 35"
                    role="img"
                    aria-hidden="true"
                    width="35px"
                    height="35px"
                    fill='white'
                  >
                    <path fill="none" d="M0 0h35v35H0z"></path>
                    <path d="M27.687 10.547l-9-4.852a2.5 2.5 0 00-2.373 0l-9 4.852A2.5 2.5 0 006 12.748v9.471a2.494 2.494 0 001.313 2.2l9 4.852a2.5 2.5 0 002.373 0l9-4.852a2.5 2.5 0 001.314-2.2v-9.471a2.5 2.5 0 00-1.313-2.201zm-10.9-3.971a1.5 1.5 0 011.424 0l9 4.852c.041.022.072.055.11.081l-4.41 2.507-9.628-5.55zm-4.538 2.446l9.651 5.566-4.4 2.5-9.823-5.58c.038-.026.07-.059.111-.081zM7.788 23.539A1.5 1.5 0 017 22.219v-9.471a1.494 1.494 0 01.069-.436L17 17.957v10.516a1.494 1.494 0 01-.212-.082zM28 22.219a1.5 1.5 0 01-.788 1.32l-9 4.851a1.481 1.481 0 01-.212.082V17.957l9.931-5.646a1.5 1.5 0 01.069.436z"></path>
                  </svg>
                  <p className="mt-1 text-xs font-semibold text-white">จัดส่งฟรี</p>
                </div>
                <div className="flex flex-col items-center">
                  <svg
                    viewBox="0 0 35 35"
                    role="img"
                    aria-hidden="true"
                    width="35px"
                    height="35px"
                    fill='white'
                  >
                    <path fill="none" d="M0 0h35v35H0z"></path>
                    <path d="M17.5 6.1A11.4 11.4 0 116.1 17.5 11.413 11.413 0 0117.5 6.1m0-1.1A12.5 12.5 0 1030 17.5 12.5 12.5 0 0017.5 5z"></path>
                    <path d="M23 20.5H12a.5.5 0 010-1h11a.5.5 0 010 1zM25 15.5H10a.5.5 0 010-1h15a.5.5 0 010 1z"></path>
                  </svg>
                  <p className="mt-1 text-xs font-semibold text-white">
                    บริการสลักข้อความฟรี
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <svg
                    viewBox="0 0 35 35"
                    role="img"
                    aria-hidden="true"
                    width="35px"
                    height="35px"
                    fill='white'
                  >
                    <path fill="none" d="M0 0h35v35H0z"></path>
                    <path
                      d="M12.249 9.022l-4.461 2.4c-.041.022-.073.055-.111.081l9.823 5.588 4.4-2.5zM27.322 11.507c-.038-.025-.069-.058-.11-.081l-9-4.852a1.5 1.5 0 00-1.424 0l-3.5 1.889 9.628 5.55zM10.8 18.5a.5.5 0 01-.5.5H7v3.219a1.5 1.5 0 00.788 1.32l9 4.852a1.494 1.494 0 00.212.082V17.957l-9.931-5.645a1.494 1.494 0 00-.069.436V18h3.3a.5.5 0 01.5.5zM18 17.957v10.515a1.481 1.481 0 00.212-.082l9-4.851a1.5 1.5 0 00.788-1.32v-9.471a1.5 1.5 0 00-.069-.436z"
                      fill="none"
                    ></path>
                    <path d="M27.687 10.547l-9-4.852a2.5 2.5 0 00-2.373 0l-9 4.852A2.5 2.5 0 006 12.748V17h1v-4.252a1.494 1.494 0 01.069-.436L17 17.957v10.516a1.494 1.494 0 01-.212-.082l-9-4.852A1.5 1.5 0 017 22.219V20H6v2.219a2.494 2.494 0 001.313 2.2l9 4.852a2.5 2.5 0 002.373 0l9-4.852a2.5 2.5 0 001.314-2.2v-9.471a2.5 2.5 0 00-1.313-2.201zm-10.9-3.971a1.5 1.5 0 011.424 0l9 4.852c.041.022.072.055.11.081l-4.41 2.507-9.628-5.55zm-9.11 4.932c.038-.026.07-.059.111-.081l4.461-2.4 9.651 5.561-4.4 2.5zM28 22.219a1.5 1.5 0 01-.788 1.32l-9 4.851a1.481 1.481 0 01-.212.082V17.957l9.931-5.646a1.5 1.5 0 01.069.436z"></path>
                    <path d="M2.507 18l1.646-1.646a.5.5 0 00-.707-.707l-2.5 2.5a.5.5 0 000 .707l2.5 2.5a.5.5 0 10.707-.707L2.507 19H6v-1zM10.3 19a.5.5 0 000-1H7v1zM6 18h1v1H6z"></path>
                  </svg>
                  <p className="mt-1 text-xs font-semibold text-white">
                    ส่งคืนสะดวกและฟรี
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:pl-20">
            <div className="mt-14">
              <div className="hidden md:block">
                <p className="text-red-600 text-xl mb-2">ใหม่</p>
                <h1 className="text-4xl font-semibold text-white">ซื้อ iPad</h1>
                <p className="text-white-300 mb-2 text-white">(รุ่นที่10)</p>
              </div>
              <div className="divide-y divide-gray-300">
                <VariantColorSelection
                  variantColor={variantColor}
                  onChange={handleChangeVariantColor}
                />
                <VariantStorageSelection
                  allowSelect={!!variantColor}
                  variantStorage={variantStorage}
                  onChange={handleChangeVariantStorage}
                />
                <VariantTypeSelection
                  allowSelect={!!variantStorage}
                  variantType={variantType}
                  variantStorage={variantStorage}
                  onChange={handleChangeVariantType}
                />
                <VariantEngravingSelection
                  allowSelect={!!variantType}
                  variantEngraving={variantEngraving}
                  onChange={handleChangeVariantEngraving}
                />
              </div>
            </div>
            <div id="checkout" className="p-5 pt-16 divide-y">
              <div className="mb-10">
                <p className="text-3xl font-medium text-white">{priceText}</p>
                <div className={`${!!variantType ? '' : 'hidden'}`}>
                  <p className="text-xs text-white">
                    รวม VAT โดยประมาณ: ฿
                    {Number((price / 1.07) * 0.07).toLocaleString('en', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                    *
                  </p>
                  <p className="text-sm text-gray-300">
                    ฿
                    {Number(price / 10).toLocaleString('en', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                    /เดือน ดอกเบี้ย 0% เป็นเวลา 10 เดือน
                  </p>
                </div>
              </div>
              <div className="relative pt-5 mb-5">
                <div
                  className={`absolute bg-gray-800 bg-opacity-25 h-full w-full rounded-xl ${!!variantEngraving ? 'hidden' : ''
                    }`}
                ></div>
                <div id="variantAppleCare">
                  <h4 className="text-lg font-bold text-white">
                    ปกป้อง iPad เครื่องใหม่ของคุณ
                  </h4>
                  <div className="mt-3 flex justify-between gap-2 mb-5">
                    <div className="flex gap-2">
                      <div className="pt-1 ml-1 mr-1">
                        <FaAppleAlt className='mr-2 translate-y-1 fill-red-600' />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">AppleCare+</p>
                        <p className="text-sm text-white">฿2,590.00</p>
                        <p className="text-sm text-white">
                          ปกป้อง iPad, Apple Pencil และคีย์บอร์ดของ Apple
                          จากอุบัติเหตุการตกกระแทกและทำน้ำหกใส่ สูงสุด 2 ปี ด้วย
                          AppleCare+ ได้บ่อยครั้งเท่าที่คุณต้องการ
                        </p>
                      </div>
                    </div>
                    <div
                      className="pl-5 text-right"
                      style={{ minWidth: '100px' }}
                    >
                      <button
                        className="text-sm text-gray-300 cursor-pointer hover:underline"
                        onClick={handleChangeVariantAppleCare}
                      >
                        {variantAppleCare ? 'ลบออก' : 'เพิ่ม'}
                      </button>
                    </div>
                  </div>
                </div>
                <div className={`flex ${!!variantEngraving ? 'hidden' : ''}`}>
                  <AppleButton className="w-full text-xl">ต่อไป</AppleButton>
                  <svg
                    viewBox="0 0 35 35"
                    role="img"
                    aria-hidden="true"
                    width="35px"
                    height="35px"
                    className="ml-5"
                    fill='red'
                  >
                    <path fill="none" d="M0 1.213h35v35H0z"></path>
                    <path
                      d="M17.5 29.263a1.194 1.194 0 01-.85-.352L6.967 19.2a6.531 6.531 0 01.46-9.617 6.708 6.708 0 018.943.647l1.13 1.133 1.13-1.133a6.706 6.706 0 018.943-.647 6.531 6.531 0 01.46 9.617l-9.683 9.711a1.192 1.192 0 01-.85.352zm-6.06-20a5.154 5.154 0 00-3.31 1.167 5.352 5.352 0 00-1.948 3.913 5.424 5.424 0 001.564 4.081l9.684 9.711.53.388-.39-.388 9.684-9.711a5.424 5.424 0 001.564-4.081 5.352 5.352 0 00-1.948-3.913 5.6 5.6 0 00-7.461.577l-1.7 1.7a.3.3 0 01-.425 0l-1.7-1.7a5.89 5.89 0 00-4.144-1.741z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className={`pt-5 ${!!variantEngraving ? '' : 'hidden'}`}>
                <div className="mb-4 flex gap-2">
                  <div>
                    <svg
                      viewBox="0 0 25 25"
                      role="img"
                      aria-hidden="true"
                      width="25px"
                      height="25px"
                      fill='white'
                    >
                      <path fill="none" d="M0 0h25v25H0z"></path>
                      <path d="M19.69 7.154l-6-3.245a2.5 2.5 0 00-2.38 0l-6 3.245A2.5 2.5 0 004 9.354v6.269a2.5 2.5 0 001.311 2.2l6 3.245a2.5 2.5 0 002.379 0l6-3.245a2.5 2.5 0 001.31-2.2V9.354a2.5 2.5 0 00-1.31-2.2zm-7.9-2.365a1.492 1.492 0 011.427 0l6 3.244a1.454 1.454 0 01.151.11l-2.931 1.665-6.743-3.886zM8.661 6.48l6.768 3.9-2.929 1.666-6.864-3.9a1.456 1.456 0 01.151-.11zM5.787 16.941A1.5 1.5 0 015 15.622V9.354a1.5 1.5 0 01.053-.39L12 12.912v7.358a1.463 1.463 0 01-.213-.083zM20 15.622a1.5 1.5 0 01-.786 1.319l-6 3.245a1.5 1.5 0 01-.214.084v-7.358l6.947-3.949a1.508 1.508 0 01.053.391z"></path>
                    </svg>
                  </div>
                  <p className="text-sm leading-none">
                    <span className="font-bold text-white">การจัดส่ง:</span>
                    <br />
                    <span className='text-white'>4-5 สัปดาห์</span>
                    <br />
                    <span className='text-white'>บริการจัดส่งฟรี</span>
                    <br />
                  </p>
                </div>
                <div className="mb-8 flex gap-2">
                  <div>
                    <svg
                      viewBox="0 0 25 25"
                      role="img"
                      aria-hidden="true"
                      width="25px"
                      height="25px"
                      fill='white'
                    >
                      <path fill="none" d="M0 0h25v25H0z"></path>
                      <path d="M18.5 5h-1.775a4.231 4.231 0 00-8.45 0H6.5A2.5 2.5 0 004 7.5v11A2.5 2.5 0 006.5 21h12a2.5 2.5 0 002.5-2.5v-11A2.5 2.5 0 0018.5 5zm-6-3a3.245 3.245 0 013.225 3h-6.45A3.245 3.245 0 0112.5 2zM20 18.5a1.5 1.5 0 01-1.5 1.5h-12A1.5 1.5 0 015 18.5v-11A1.5 1.5 0 016.5 6h12A1.5 1.5 0 0120 7.5z"></path>
                      <path d="M14.4 12.448a1.592 1.592 0 01.738-1.328 1.607 1.607 0 00-1.37-.687c-.52 0-.941.317-1.22.317s-.663-.3-1.129-.3a1.861 1.861 0 00-1.739 2.068 4.32 4.32 0 00.723 2.3c.346.491.648.883 1.084.883s.617-.287 1.144-.287c.55 0 .663.279 1.137.279s.791-.43 1.084-.853a3.24 3.24 0 00.474-.989 1.516 1.516 0 01-.926-1.403zM12.583 10.357a1.346 1.346 0 00.941-.5 1.594 1.594 0 00.361-.974.731.731 0 00-.008-.136 1.5 1.5 0 00-1.016.528 1.547 1.547 0 00-.384.943c0 .053.008.106.008.128.03.004.06.011.098.011z"></path>
                    </svg>
                  </div>
                  <p className="text-sm leading-none">
                    <span className="font-bold text-white">การรับสินค้า:</span>
                    <br />
                  </p>
                </div>
                <div className="flex">
                  <AppleButton
                    onClick={addProductToBag}
                    className="w-full text-xl"
                  >
                    ใส่ลงในถุง
                  </AppleButton>
                  <svg
                    viewBox="0 0 35 35"
                    role="img"
                    aria-hidden="true"
                    width="35px"
                    height="35px"
                    className="ml-5"
                    fill='red'
                  >
                    <path fill="none" d="M0 1.213h35v35H0z"></path>
                    <path
                      d="M17.5 29.263a1.194 1.194 0 01-.85-.352L6.967 19.2a6.531 6.531 0 01.46-9.617 6.708 6.708 0 018.943.647l1.13 1.133 1.13-1.133a6.706 6.706 0 018.943-.647 6.531 6.531 0 01.46 9.617l-9.683 9.711a1.192 1.192 0 01-.85.352zm-6.06-20a5.154 5.154 0 00-3.31 1.167 5.352 5.352 0 00-1.948 3.913 5.424 5.424 0 001.564 4.081l9.684 9.711.53.388-.39-.388 9.684-9.711a5.424 5.424 0 001.564-4.081 5.352 5.352 0 00-1.948-3.913 5.6 5.6 0 00-7.461.577l-1.7 1.7a.3.3 0 01-.425 0l-1.7-1.7a5.89 5.89 0 00-4.144-1.741z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div id="chatwithspecialist" className="mt-5 flex justify-center">
              <svg
                viewBox="0 0 35 35"
                role="img"
                aria-hidden="true"
                width="35px"
                height="35px"
                className="mr-3 fill-white"
              >
                <path fill="none" d="M0 .213h35v35H0z"></path>
                <path d="M14.4 21.048a13.284 13.284 0 01-1.344.076q-.411 0-.829-.025l-.334-.02-.279.185a15.461 15.461 0 01-4.388 2.109 16.182 16.182 0 001.365-2.054l.484-.923-.941-.446a7.127 7.127 0 01-4.384-6.276c0-4.114 4.274-7.461 9.529-7.461s9.529 3.347 9.529 7.461c0 .059-.009.116-.011.174.33-.029.664-.046 1-.046 0-.043.008-.085.008-.128 0-4.677-4.67-8.461-10.529-8.461S2.75 9 2.75 13.674a8.1 8.1 0 004.95 7.181 18.048 18.048 0 01-1.573 2.305c-.481.6-.236 1.28.613 1.28 1.17 0 3.557-1.1 5.425-2.343q.448.027.888.027c.455 0 .9-.028 1.34-.069-.011-.157-.029-.312-.029-.472 0-.183.018-.357.036-.535z"></path>
                <path d="M32.25 21.583c0-3.749-3.745-6.782-8.443-6.782h-.1c-.351 0-.694.027-1.032.063-3.876.413-6.886 2.906-7.269 6.036a5.584 5.584 0 00-.042.678c0 .117.015.23.021.345.222 3.737 3.994 6.428 8.6 6.428.235 0 .473-.007.712-.021a10.723 10.723 0 004.35 1.878c.681 0 .878-.543.492-1.026a14.459 14.459 0 01-1.263-1.848 6.5 6.5 0 003.974-5.751zm-4.4 4.852l-.942.446.484.923a10.673 10.673 0 00.759 1.2 14.28 14.28 0 01-2.9-1.5l-.279-.185-.334.02c-.219.013-.437.019-.653.019-4.21 0-7.515-2.462-7.614-5.629 0-.048-.009-.1-.009-.144a4.521 4.521 0 01.1-.922c.5-2.386 2.87-4.288 5.908-4.75a9.506 9.506 0 011.092-.1c.113 0 .225-.013.339-.013 4.1 0 7.443 2.594 7.443 5.782a5.517 5.517 0 01-3.394 4.853z"></path>
              </svg>
              <p className="text-xs">
                <span className="font-semibold text-white">
                  หากมีคำถามเกี่ยวกับการซื้อ iPad
                </span>
                <br />
                <span className="text-white cursor-pointer hover:underline">
                  แชทกับผู้เชี่ยวชาญด้าน iPad
                </span>
              </p>
            </div>
          </div>
        </div>
        <IpadWITB />
        <IpadServices />
      </div>
      <Footnote>
        <p className="text-xs text-gray-300">
          ราคาสินค้าดังกล่าวได้รวมภาษีมูลค่าเพิ่มแล้ว
          และไม่มีค่าธรรมเนียมการจัดส่งสินค้าทุกประเภท
          <br />* โดยประมาณ ค่าธรรมเนียมอาจเปลี่ยนแปลงได้
        </p>
        <ol className="pl-3 list-decimal list-outside text-xs text-gray-300">
          <li>
            พื้นที่ว่างจะน้อยกว่าที่กำหนดและอาจแตกต่างกันไปอันเนื่องมาจากปัจจัยหลายประการ
            โดยการกำหนดค่าตามมาตรฐานที่ให้มานั้นจะใช้พื้นที่ประมาณ 10GB ถึง 13GB
            (รวม iPadOS และแอพที่ติดตั้งล่วงหน้า)
            ทั้งนี้ขึ้นอยู่กับรุ่นและการตั้งค่า
            แอพที่ติดตั้งไว้ให้แล้วใช้พื้นที่ประมาณ 4GB
            และคุณสามารถลบแอพเหล่านี้และเรียกคืนกลับมาได้
            พื้นที่จัดเก็บข้อมูลอาจเปลี่ยนแปลงได้ขึ้นอยู่กับเวอร์ชั่นของซอฟต์แวร์
            และอาจแตกต่างกันไปตามอุปกรณ์
          </li>
          <li>
            Apple Pencil และ Smart Keyboard จำหน่ายแยกต่างหาก
            อุปกรณ์เสริมจำหน่ายแยกต่างหาก
          </li>
        </ol>
        <p className="text-xs text-gray-300">
          §§ ระยะเวลาการใช้งานแบตเตอรี่แตกต่างกันไปตามการใช้งานและการกำหนดค่า
          ดูข้อมูลเพิ่มเติมได้ที่www.apple.com/batteries
          <br />† การใช้ Apple TV+ และ Apple Arcade ต้องสมัครสมาชิกก่อน
        </p>
      </Footnote>
      <Breadcrumb
        breadcrumb={[
          <NavLink to='/ipad' className='cursor-pointer hover:underline'>iPad</NavLink>,
          <NavLink to='/ipad' className='cursor-pointer hover:underline'>iPad รุ่น 10.9</NavLink>,
          'ซื้อ iPad รุ่น 10.9 นิ้ว',
        ]}
      />
    </div >
  );
};

export default Ipadgen10;

const VariantColorSelection = (props) => {
  const [show, setShow] = useState(true);
  const toggleShow = () => {
    setShow(!show);
  };
  const { variantColor, onChange } = props;

  const handleChangeVariantColor = (event) => {
    onChange(event.target.value);
    toggleShow();
  };

  if (!show) {
    return (
      <>
        <div className="mt-5"></div>
        <button onClick={toggleShow} className="block w-full">
          <div className="py-5 flex justify-between items-center hover:text-apple-link-blue">
            <h4 className="text-2xl font-medium text-white">
              {colorNameTH[variantColor]}
            </h4>
            <span className="text-sm text-gray-200 cursor-pointer hover:underline">
              เปลี่ยน
            </span>
          </div>
        </button>
      </>
    );
  } else {
    return (
      <VariantSelection id="variantColor" allowSelect={true}>
        <div className="mb-2">
          <h4 className="text-xl font-bold text-white">สี</h4>
        </div>
        <div id="variantColorOptions" className="grid grid-cols-2 gap-3">
          <VariantOption
            variant="color"
            value="blue"
            selected={variantColor === 'blue'}
            onChange={handleChangeVariantColor}
          >
            <img
              src="assets/productVariantColors/ipad/blue.png"
              alt="variant-color-blue"
              style={{ maxWidth: '32px' }}
              className="block mx-auto"
            />
            <p className="mt-2 text-center text-sm text-white">ฟ้า</p>
          </VariantOption>
          <VariantOption
            variant="color"
            value="pink"
            selected={variantColor === 'pink'}
            onChange={handleChangeVariantColor}
          >
            <img
              src="assets/productVariantColors/ipad/pink.png"
              alt="variant-color-pink"
              style={{ maxWidth: '32px' }}
              className="block mx-auto"
            />
            <p className="mt-2 text-center text-sm text-white">ชมพู</p>
          </VariantOption>
          <VariantOption
            variant="color"
            value="silver"
            selected={variantColor === 'silver'}
            onChange={handleChangeVariantColor}
          >
            <img
              src="assets/productVariantColors/ipad/silver.png"
              alt="variant-color-silver"
              style={{ maxWidth: '32px' }}
              className="block mx-auto"
            />
            <p className="mt-2 text-center text-sm text-white">เงิน</p>
          </VariantOption>
          <VariantOption
            variant="color"
            value="yellow"
            selected={variantColor === 'yellow'}
            onChange={handleChangeVariantColor}
          >
            <img
              src="assets/productVariantColors/ipad/yellow.png"
              alt="variant-color-yellow"
              style={{ maxWidth: '32px' }}
              className="block mx-auto"
            />
            <p className="mt-2 text-center text-sm text-white">เหลือง</p>
          </VariantOption>
        </div>
      </VariantSelection>
    );
  }
};

const VariantStorageSelection = (props) => {
  const [show, setShow] = useState(true);
  const toggleShow = () => {
    setShow(!show);
  };
  const { variantStorage, onChange, allowSelect } = props;
  const handleChangeVariantStorage = (event) => {
    onChange(event.target.value);
    toggleShow();
  };
  if (!show) {
    return (
      <button onClick={toggleShow} className="block w-full">
        <div className="py-5 flex justify-between items-center hover:text-apple-link-blue">
          <h4 className="text-2xl font-medium text-white">{variantStorage}¹</h4>
          <span className="text-sm text-gray-200 cursor-pointer hover:underline">
            เปลี่ยน
          </span>
        </div>
      </button>
    );
  } else {
    return (
      <VariantSelection id="variantStorage" allowSelect={allowSelect}>
        <div className="mb-5">
          <h4 className="text-xl font-semibold text-white">พื้นที่จัดเก็บข้อมูล</h4>
        </div>
        <div className="flex bg-gray-600 rounded-2xl p-5 mb-5">
          <p className="text-xs text-white">
            <span className="font-bold text-white">วางแผนล่วงหน้า เผื่อวันข้างหน้า</span>{' '}
            ยิ่ง iPad ของคุณมีพื้นที่จัดเก็บข้อมูลมากขึ้นเท่าไหร่
            คุณก็ยิ่งมีพื้นที่ในการจัดเก็บคอนเทนต์แบบดิจิทัลทั้งในปัจจุบันและอนาคตมากขึ้นเท่านั้น
          </p>
          <ErrorOutlineIcon className="ml-5" />
        </div>
        <div id="variantStorageOptions" className="grid grid-cols-2 gap-3">
          <VariantOption
            variant="storage"
            value="64GB"
            selected={variantStorage === '64GB'}
            onChange={handleChangeVariantStorage}
          >
            <div className="flex flex-col text-center py-1">
              <p>
                <span className="text-3xl text-white">64</span>
                <span className="font-medium text-lg text-white">GB¹</span>
              </p>
              <span className="text-xs text-white">
                เริ่มต้นที่ ฿
                {Number(ipadPrice['wifi']['64GB']).toLocaleString('en')}
              </span>
            </div>
          </VariantOption>
          <VariantOption
            variant="storage"
            value="256GB"
            selected={variantStorage === '256GB'}
            onChange={handleChangeVariantStorage}
          >
            <div className="flex flex-col text-center py-1">
              <p>
                <span className="text-3xl text-white">256</span>
                <span className="font-medium text-lg text-white">GB¹</span>
              </p>
              <span className="text-xs text-white">
                เริ่มต้นที่ ฿
                {Number(ipadPrice['wifi']['256GB']).toLocaleString('en')}
              </span>
            </div>
          </VariantOption>
        </div>
      </VariantSelection>
    );
  }
};

const VariantTypeSelection = (props) => {
  const [show, setShow] = useState(true);
  const toggleShow = () => {
    setShow(!show);
  };
  const { variantStorage, variantType, onChange, allowSelect } = props;

  const handleChangeVariantType = (event) => {
    onChange(event.target.value);
    toggleShow();
  };
  if (!show) {
    return (
      <button onClick={toggleShow} className="block w-full">
        <div className="py-5 flex justify-between items-center hover:text-apple-link-blue">
          <h4 className="text-2xl font-medium text-white">
            {variantType === 'wifi' ? 'Wi-Fi' : 'Wi-Fi + Cellular'}
          </h4>
          <span className="text-sm text-gray-200 cursor-pointer hover:underline">
            เปลี่ยน
          </span>
        </div>
      </button>
    );
  } else {
    return (
      <VariantSelection id="variantType" allowSelect={allowSelect}>
        <div className="mb-5">
          <h4 className="text-xl font-semibold text-white">การเชื่อมต่อ</h4>
        </div>
        <div className="flex bg-gray-600 rounded-2xl p-5 mb-5">
          <p className="text-xs text-white">
            <span className="font-bold text-white">สองวิธีในการต่อติดที่รวดเร็ว</span> iPad
            ทุกเครื่องสามารถเชื่อมต่อกับเครือข่าย Wi-Fi ได้ รุ่น Wi-Fi +
            Cellular ช่วยให้คุณต่อติดกับทุกเรื่องได้เสมอ แม้ไม่มีสัญญาณ Wi-Fi
          </p>
          <ErrorOutlineIcon className="ml-5" />
        </div>
        <div id="variantTypeOptions" className="grid grid-cols-2 gap-3">
          <VariantOption
            variant="type"
            value="wifi"
            selected={variantType === 'wifi'}
            onChange={handleChangeVariantType}
          >
            <div className="flex flex-col text-center py-1">
              <p>
                <span className="font-medium text-lg text-white">Wi-Fi</span>
              </p>
              <span className="text-xs">
                {!!variantStorage
                  ? `฿${Number(
                    ipadPrice['wifi'][variantStorage]
                  ).toLocaleString('en', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}`
                  : `เริ่มต้นที่ ฿${Number(
                    ipadPrice['wifi']['64GB']
                  ).toLocaleString('en')}`}
              </span>
            </div>
          </VariantOption>
          <VariantOption
            variant="type"
            value="cellular"
            selected={variantType === 'cellular'}
            onChange={handleChangeVariantType}
          >
            <div className="flex flex-col text-center py-1">
              <p>
                <span className="font-medium text-lg text-white">Wi-Fi + Cellular</span>
              </p>
              <span className="text-xs">
                {!!variantStorage
                  ? `฿${Number(
                    ipadPrice['cellular'][variantStorage]
                  ).toLocaleString('en', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}`
                  : `เริ่มต้นที่ ฿${Number(
                    ipadPrice['cellular']['64GB']
                  ).toLocaleString('en')}`}
              </span>
            </div>
          </VariantOption>
        </div>
      </VariantSelection>
    );
  }
};

const VariantEngravingSelection = (props) => {
  const [show, setShow] = useState(true);
  const toggleShow = () => {
    setShow(!show);
  };
  const { variantEngraving, onChange, allowSelect } = props;

  const handleChangeVariantEngraving = (event) => {
    onChange(event.target.value);
    toggleShow();
  };
  if (!show) {
    return (
      <button onClick={toggleShow} className="block w-full">
        <div className="py-5 flex justify-between items-center hover:text-apple-link-blue">
          <h4 className="text-2xl font-medium text-white">
            {variantEngraving === '1' ? 'เพิ่มการสลัก' : 'ไม่สลัก'}
          </h4>
          <span className="text-sm text-gray-200 cursor-pointer hover:underline">
            เปลี่ยน
          </span>
        </div>
      </button>
    );
  } else {
    return (
      <VariantSelection id="variantEngraving" allowSelect={allowSelect}>
        <div className="mb-5">
          <h4 className="text-xl font-semibold text-white">ใส่ความเป็นคุณบนอุปกรณ์</h4>
        </div>
        <div className="flex bg-gray-600 rounded-2xl p-5 mb-5">
          <p className="text-xs text-white">
            <span className="font-bold text-white">ใส่ความเป็นคุณให้กับ iPad ได้ฟรี</span>{' '}
            สลักอิโมจิผสมกับข้อความและตัวเลขเพื่อทำให้ iPad
            ของคุณเป็นของคุณคนเดียว ที่ Apple เท่านั้น
          </p>
          <ErrorOutlineIcon className="ml-5" />
        </div>
        <div id="varaintEngravingOptions" className="space-y-3">
          <VariantOption
            variant="engraving"
            value="1"
            selected={variantEngraving === '1'}
            onChange={handleChangeVariantEngraving}
          >
            <div className="flex justify-between">
              <p className="text-lg font-semibold text-white">เพิ่มการสลัก</p>
              <p className="text-lg text-white">ฟรี</p>
            </div>
          </VariantOption>
          <VariantOption
            variant="engraving"
            value="0"
            selected={variantEngraving === '0'}
            onChange={handleChangeVariantEngraving}
          >
            <p className="text-lg font-semibold text-white">ไม่สลัก</p>
          </VariantOption>
        </div>
      </VariantSelection>
    );
  }
};
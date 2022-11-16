import React from 'react';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import AppleButton from '../../components/AppleButton';

const Recommendations = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-5 pt-14 pb-5">
      <h2 className="text-4xl font-semibold text-center mt-10">
        สินค้าแนะนำ
      </h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-24">
        <div className="flex flex-col">
          <div>
            <img
              className="mx-auto"
              src="assets/bag/bigadapter.jpeg"
              alt=""
              style={{ maxWidth: '194px' }}
            />
            <p className="mt-5 text-lg font-medium text-black">
              อะแดปเตอร์แปลงไฟ USB-C ขนาดกะทัดรัดแบบพอร์ตคู่ขนาด 35 วัตต์
            </p>
            <p className="mb-10 text-black">฿1,890.00</p>
          </div>
          <div className="mt-auto">
            <AppleButton className="px-5 w-full py-3 rounded-xl">
              ใส่ลงถุง
            </AppleButton>
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <img
              className="mx-auto"
              src="assets/bag/applemagsafe.jpeg"
              alt=""
              style={{ maxWidth: '194px' }}
            />
            <p className="mt-5 text-lg font-medium text-black">ที่ชาร์จ MagSafe</p>
            <p className="mb-10 text-black">฿1,490.00</p>
          </div>
          <div className="mt-auto">
            <AppleButton className="px-5 w-full py-3 rounded-xl">
              ใส่ลงถุง
            </AppleButton>
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <img
              className="mx-auto"
              src="assets/bag/airpodgen2.jpeg"
              alt=""
              style={{ maxWidth: '194px' }}
            />
            <p className="mt-5 text-xs text-red-600"></p>
            <p className="text-lg font-medium text-black">AirPods รุ่นที่ 2</p>
            <p className="mb-10 text-black">฿5,290.00</p>
          </div>
          <div className="mt-auto">
            <AppleButton className="px-5 w-full py-3 rounded-xl">
              ใส่ลงถุง
            </AppleButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
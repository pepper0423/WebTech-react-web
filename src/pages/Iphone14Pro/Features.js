import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Iphone14ProFeatures = () => {
  return (
    <div>
      <h2 className="text-4xl font-semibold text-center mt-20">
        โปรยิ่งกว่าโปร
      </h2>
      <div className="keyfeatures-container mt-10">
        <div className="keyfeature-col keyfeature-col-span-4 grid grid-cols-2">
          <div className="p-7">
            <p className="text-3xl font-medium text-gray-500">
              <span className="text-black">
                ความละเอียดมากขึ้นสูงสุด 4 เท่า
              </span>{' '}
              iPhone 14 Pro สร้างมาตรฐานใหม่ให้กับสิ่งที่ 48 เมกะพิกเซลทำได้ นั่นคือการ
              บันทึกภาพด้วยความละเอียดที่มากขึ้นถึง 4 เท่าในแบบ ProRAW แล้วคุณจะตื่นตาตื่นใจไปกับรายละเอียดในทุกการครอป
            </p>
          </div>
          <div>
            <img
              style={{ height: '450px' }}
              alt="Camera Feature"
              className="w-full rounded-r-2xl"
              src="assets/features/iphone14pro/iphone-14-pro-key-features-camera.png"
            />
          </div>
        </div>

        <div className="keyfeature-col keyfeature-col-span-2">
          <div className="p-7">
            <p className="text-3xl font-medium text-gray-500">
              <span className="text-black">Dynamic Island</span>{' '}
              นวัตกรรมของ Apple อย่างแท้จริง
            </p>
          </div>
          <div className="absolute bottom-0">
            <img
              style={{ height: '350.5px'}}
              alt="dynamic Feature"
              className="h-full rounded-b-2xl"
              src="assets/features/iphone14pro/iphone-14-pro-key-features-dynamic.png"
            />
          </div>
        </div>

        <div className="keyfeature-col keyfeature-col-span-3">
          <div className="p-7 w-3/4">
            <p className="text-3xl font-medium text-gray-500">
              <span className="text-black">
                จอภาพแบบติดตลอด พร้อมอยู่ตลอด
              </span>{' '}
              มาพร้อมกับแบตเตอรี่ที่ใช้งานได้ตลอดทั้งวัน
            </p>
          </div>
          <div className="absolute bottom-0 right-0">
            <img
              alt="Display Feature"
              src="assets/features/iphone14pro/iphone-14-pro-key-features-display.png"
            />
          </div>
        </div>
        <div className="keyfeature-col keyfeature-col-span-3">
          <div className="w-full absolute" style={{ top: '-10px' }}>
            <img
              alt="Chip Feature"
              className="mx-auto rounded-r-2xl"
              style={{ maxWidth: '440px' }}
              src="assets/features/iphone14pro/iphone-14-pro-key-features-chip.webp"
            />
          </div>
          <div className="absolute bottom-0 p-7">
            <p className="text-3xl text-center font-medium text-gray-500">
              <span className="text-black">A16 Bionic</span>{' '}
              ชิปสมาร์ทโฟนที่เร็วที่สุดในโลก
              <br />
              <span className="text-black">5G ที่เร็วสุดแรง</span>{' '}
              เพื่อการดาวน์โหลดที่เร็วยิ่งขึ้น และการสตรีมคุณภาพสูง³
            </p>
          </div>
        </div>
        <div className="keyfeature-col keyfeature-col-span-4">
          <div className="p-7">
            <p className="text-3xl text-center font-medium text-gray-500">
              <span className="text-black">
                กล้องหลักความละเอียด 48MP พร้อมเซ็นเซอร์ แบบ Quad-pixel ที่ล้ำสมัย
              </span>{' '}
              ระบบกล้องระดับโปรที่ โปรอย่างยิ่งใหญ่กว่าครั้งไหนๆ
            </p>
          </div>
          <div className="absolute bottom-0">
            <img
              style={{ height: '300px' }}
              alt="camera Feature"
              className="rounded-r-2xl"
              src="assets/features/iphone14pro/iphone-14-camera-shaking.jpg"
            />
          </div>
        </div>
        <div className="keyfeature-col keyfeature-col-span-2">
          <div className="p-7">
            <p className="text-3xl font-medium text-gray-500">
              <span className="text-black">Ceramic Shield</span>{' '}
              แข็งแกร่งกว่ากระจกไหนๆ บนสมาร์ทโฟน ความสามารถในการทนน้ำ
              เสริมด้วยสแตนเลสสตีลเกรดเดียวกับที่ใช้ทำเครื่องมือศัลยกรรม
            </p>
          </div>
          <div className="absolute bottom-0 right-0">
            <img
              alt="Glass Feature"
              className="h-full rounded-b-2xl"
              style={{ maxWidth: '200px' }}
              src="assets/features/iphone14pro/iphone-14-pro-key-features-glass.jpg"
            />
          </div>
        </div>
      </div>
      <p className="text-center text-lg font-medium mt-14">
        <span
          className="text-apple-link-blue hover:underline"
        >
          ดูเพิ่มเติมเกี่ยวกับ iPhone 14 Pro
          <KeyboardArrowRightIcon />
        </span>
      </p>
    </div>
  );
};

export default Iphone14ProFeatures;
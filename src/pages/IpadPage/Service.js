import React from 'react';

const Service = () => {
  return (
    <div className="my-20">
            <h2 className="text-4xl font-semibold text-center mt-20">
        บริการของเรา
      </h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="keyfeature-col keyfeature-col-span-4 grid grid-cols-1">
          <div className="p-7">
            <p className="text-6xl font-large text-black">
                จัดส่งฟรี
            </p>
            <br></br>
            <p className='text-4xl font-medium text-gray-500'>
            เลือกรับบริการจัดส่งฟรี
หรือไปรับสินค้าที่มีพร้อมจำหน่ายได้ที่ Apple Store
            </p>
            <img
              style={{ scale: '1' }}
              alt="shipping"
              className="rounded-r-2xl"
              src="assets/compareProduct/iphone/icon_delivery.png"
            />
          </div>

        </div>

        <div className="keyfeature-col keyfeature-col-span-2">
          <div className="p-7">
            <p className="text-3xl font-medium text-gray-500">
              <span className="text-black">บริการด้านการเงิน</span>{' '}<br></br><br></br>
              มีบริการผ่อนชำระ 0%
            </p>
          </div>
          <div className="">
            <img
              alt="dynamic Feature"
              className="h-full rounded-b-2xl"
              src="assets/compareProduct/iphone/icon_financing_.png"
            />
          </div>
        </div>

        <div className="keyfeature-col keyfeature-col-span-2">
          <div className="p-7">
          <p className="text-3xl font-medium text-gray-500">
              <span className="text-black">บริการด้านการเงิน</span>{' '}<br></br><br></br>
              <p className='text-gray-500'>เมื่อมีคำถาม</p><p className='text-gray-500'>โทรหา Specialist หรือแชทออนไลน์</p><p className='text-gray-500'>โทร. 1800-01-9209</p>
            </p>
          </div>
          <div className="">
            <img
              alt="dynamic Feature"
              className="h-full rounded-b-2xl"
              src="assets/compareProduct/iphone/icon_personal_session.png"
            />
          </div>
        </div>

        </div>

    </div>
  );
};

export default Service;

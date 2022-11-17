import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Iphone14Compare = () => {
  return (
    <div className="my-20">
      <h2 className="text-4xl font-semibold text-center text-white">
        iPhone รุ่นไหนเหมาะกับคุณ
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 text-center mt-12">
        <div className="p-3 border-r">
          <div>
            <img
              alt="iPhone 13 Pro"
              className="mx-auto mb-5"
              src="assets/compareProduct/iphone/iphone-compare-iphone-13-pro.png"
            />
            <img
              alt="iPhone 13 Pro"
              className="mx-auto my-5"
              src="assets/compareProduct/iphone/iphone-compare-iphone-13-pro-swatch.png"
            />
            <p className="text-sm text-red-600 font-semibold">ใหม่</p>
            <h6 className="text-2xl font-medium text-white">iPhone 14 Pro</h6>
            <p className="mt-2 text-md font-medium text-gray-400">ที่สุดของ iPhone</p><br/>
            <p className="mt-1 text-md font-medium text-gray-400">เริ่มต้นที่ ฿41,900</p>
          </div>
          <div className="my-10">
            <p className="text-2xl font-medium text-white">6.7″ หรือ 6.1″</p>
            <p className="mt-1 font-semibold text-gray-400">
              จอภาพ Super Retina XDR¹<br/>
              เทคโนโลยี ProMotion<br/>
              จอภาพแบบติดตลอด
            </p>
          </div>
          <div className="my-10">
            <img
              alt="5G"
              className="mx-auto invert"
              src="assets/compareProduct/iphone/iphone-compare-icon-5g.png"
            />
            <p className="mt-4 font-semibold text-white">Dynamic Island
              วิธีใหม่ในการโต้ตอบกับ iPhone</p>
          </div>
          <div className="my-10">
            <img
              alt="5G"
              className="mx-auto invert"
              src="assets/compareProduct/iphone/iphone-compare-icon-a15-chip.png"
            />
            <p className="mt-4 font-semibold text-white">SOS ฉุกเฉิน</p>
            <p className="font-semibold text-gray-400">
              การตรวจจับการชนกัน
            </p>
          </div>
          <div className="my-10">
            <img
              alt="iPhone 13 Pro Camera"
              className="mx-auto invert"
              src="assets/compareProduct/iphone/iphone-compare-icon-iphone-13-pro-camera.png"
            />
            <p className="mt-4 font-semibold text-white">ระบบกล้องระดับโปร</p>
            <p className="font-semibold text-gray-400">
              เทเลโฟโต้ ไวด์ และอัลตร้าไวด์
            </p>
          </div>
          <div className="my-10">
            <img
              alt="Battery"
              className="mx-auto invert"
              src="assets/compareProduct/iphone/iphone-compare-icon-battery.png"
            />
            <p className="mt-4 font-semibold text-white">
              เล่นวิดีโอ นานสูงสุด 29 ชั่วโมง⁴
            </p>
          </div>
          <div className="mt-10">
            <img
              alt="MagSafe"
              className="mx-auto invert w-1/4"
              src="assets/compareProduct/iphone/iphone14Prochip.png"
            />
            <p className="mt-4 font-semibold text-white">ชิป A16 Bionic</p>
          </div>
        </div>

        <div className="p-3 md:border-r">
          <div>
            <img
              alt="iPhone 13"
              className="mx-auto mb-5"
              src="assets/compareProduct/iphone/iphone-compare-iphone-13.png"
            />
            <img
              alt="iPhone 13 Pro"
              className="mx-auto my-5"
              src="assets/compareProduct/iphone/iphone-compare-iphone-13-swatch.png"
            />
            <p className="text-sm text-red-600 font-semibold">ใหม่</p>
            <h6 className="text-2xl font-medium text-white">iPhone 14</h6>
            <p className="mt-2 text-md font-medium text-gray-400">ขุมพลังครบเครื่อง</p><br/>
            <p className="mt-1 text-md font-medium text-gray-400">เริ่มต้นที่ ฿32,900</p>
          </div>
          <div className="my-10">
            <p className="text-2xl font-medium text-white">6.7″ หรือ 6.1″</p>
            <p className="mt-1 font-semibold text-gray-400">จอภาพ Super Retina XDR¹</p>
          </div>
          <div className="my-10">
            <img
              alt="5G"
              className="mx-auto opacity-0"
              src="assets/compareProduct/iphone/iphone-compare-icon-5g.png"
            />
            <p className="mt-4 font-semibold text-white">-</p><br />
          </div>
          <div className="my-10">
            <img
              alt="Chip"
              className="mx-auto invert"
              src="assets/compareProduct/iphone/iphone-compare-icon-a15-chip.png"
            />
            <p className="mt-4 font-semibold text-white">SOS ฉุกเฉิน</p>
            <p className="font-semibold text-gray-400">
              การตรวจจับการชนกัน
            </p>
          </div>
          <div className="my-10">
            <img
              alt="Camera"
              className="mx-auto invert"
              src="assets/compareProduct/iphone/iphone14_camera.png"
            />
            <p className="mt-4 font-semibold text-white">ระบบกล้องคู่สุดล้ำ</p>
            <p className="font-semibold text-gray-400">ไวด์ และอัลตร้าไวด์</p>
          </div>
          <div className="my-10">
            <img
              alt="Battery"
              className="mx-auto invert"
              src="assets/compareProduct/iphone/iphone-compare-icon-battery.png"
            />
            <p className="mt-4 font-semibold text-white">
              เล่นวิดีโอ นานสูงสุด 26 ชั่วโมง⁴
            </p>
          </div>
          <div className="mt-10">
            <img
              alt="MagSafe"
              className="mx-auto w-1/4 invert"
              src="assets/compareProduct/iphone/Iphone-14-A15chip.png"
            />
            <p className="mt-4 font-semibold text-white">ชิป A15 Bionic</p>
            <p className="font-semibold text-gray-400">พร้อม GPU แบบ 5-core</p>
          </div>
        </div>

        <div className="p-3">
          <div>
            <img
              alt="iPhone 12"
              className="mx-auto mb-5"
              src="assets/compareProduct/iphone/iphone-compare-iphone-12.png"
            />
            <img
              alt="iPhone 13 Pro"
              className="mx-auto mt-5"
              src="assets/compareProduct/iphone/iphone-compare-iphone-12-swatch.png"
            />
            <br/>
            <h6 className="text-2xl font-medium text-white pt-5">iPhone 13</h6>
            <p className="mt-2 text-md font-medium text-gray-400">น่าทึ่งอย่างที่เคย</p><br/>
            <p className="mt-1 text-md font-medium text-gray-400">เริ่มต้นที่ ฿24,900</p>
          </div>
          <div className="my-10">
            <p className="text-2xl font-medium text-white">6.1″ หรือ 5.4″</p>
            <p className="mt-1 font-semibold text-white">จอภาพ Super Retina XDR¹</p>
          </div>
          <div className="my-10">
            <img
              alt="5G"
              className="mx-auto opacity-0"
              src="assets/compareProduct/iphone/iphone-compare-icon-5g.png"
            />
            <p className="mt-4 font-semibold text-white">-</p>
          </div>
          <div className="my-10">
            <img
              alt="Chip"
              className="mx-auto invert"
              src="assets/compareProduct/iphone/iphone-compare-icon-a15-chip.png"
            />
            <p className="mt-4 font-semibold text-white">SOS ฉุกเฉิน</p>
            <p className="font-semibold text-white">-</p>
          </div>
          <div className="my-10">
            <img
              alt="Camera"
              className="mx-auto invert"
              src="assets/compareProduct/iphone/iphone14_camera.png"
            />
            <p className="mt-4 font-semibold text-white">ระบบกล้องคู่</p>
            <p className="font-semibold text-gray-400">ไวด์ และอัลตร้าไวด์</p>
          </div>
          <div className="my-10">
            <img
              alt="Battery"
              className="mx-auto invert"
              src="assets/compareProduct/iphone/iphone-compare-icon-battery.png"
            />
            <p className="mt-4 font-semibold text-white">
              เล่นวิดีโอ นานสูงสุด 19 ชั่วโมง⁴
            </p>
          </div>
          <div className="mt-10">
            <img
              alt="MagSafe"
              className="mx-auto w-1/4 invert"
              src="assets/compareProduct/iphone/Iphone-14-A15chip.png"
            />
            <p className="mt-4 font-semibold text-white">ชิป A15 Bionic</p>
            <p className="font-semibold text-gray-400">พร้อม GPU แบบ 4‑core</p>
          </div>
        </div>
      </div>
      <p className="text-center text-lg font-medium mt-14">
        <span
          className="hover:underline text-white font-medium cursor-pointer">
          เปรียบเทียบ iPhone ทุกรุ่น
          <KeyboardArrowRightIcon />
        </span>
      </p>
    </div>
  );
};

export default Iphone14Compare;

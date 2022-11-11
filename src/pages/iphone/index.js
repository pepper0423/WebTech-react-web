import './iphone.css';
import Nav from '../../components/nav';
import Iphone14ProCompare from './Compare';
import { Link } from 'react-router-dom';

function Iphone() {
    return (


        <div className='iPhonebody'>
            <header>
                <Nav disableSticky={true} />
            </header>
            <div className='bg-iPhone14 grid grid-cols-2 md:grid-cols-2 text-center mt-12'>
                <div className='Text'>
                    <h3 className='a'>ใหม่</h3>
                    <h3 className='b'>iPhone14</h3>
                    <h1 className='c d'>ใหญ่เจอใหญ่กว่า</h1>
                    <h1 className='c a'>เริ่มต้นที่ ฿32,900</h1><br></br>
                    <div className='rounded md:rounded-lg'>

                    </div>
                </div>
                <center><img className='pichover' src="assets/baners/iphone14.jpg" alt='' /></center>
            </div>

            <div className='bg-iPhone14 grid grid-cols-2 md:grid-cols-2 text-center mt-12'>
                <center><img src="assets/products/iphone14/14plus.jpg" alt='' /></center>
                <div className='Text'>
                    <h3 className='a '>มีอะไรใหม่ใน</h3>
                    <h3 className='c d'>iPhone14</h3>
                    <h3 className='a text-black'>กลุ่มผลิตภัณฑ์ iPhone มาพร้อมดีไซน์ที่ใหญ่ขึ้นในขนาด 6.7 นิ้วเพิ่มเติมจากดีไซน์ยอดนิยมขนาด 6.1 นิ้ว ทั้งยังมาพร้อมระบบกล้องคู่ใหม่ คุณสมบัติการตรวจจับการชนกัน ซึ่งเป็นบริการด้านความปลอดภัยบริการแรกในอุตสาหกรรมสมาร์ทโฟนพร้อม SOS ฉุกเฉินผ่านดาวเทียม และยังมีแบตเตอรี่ที่ใช้งานได้ดีที่สุดใน iPhone</h3>
                    <h1>เริ่มต้นที่ ฿32,900</h1><br></br>
                    <div className='rounded md:rounded-lg'>

                        <div className="my-10 grid grid-cols-3 md:grid-cols-3 text-center mt-12">
                            <div>
                                <img
                                    alt="Chip"
                                    className="mx-auto"
                                    src="assets/compareProduct/iphone/Iphone-14-A15chip.jpg"  //5g.jpg
                                />
                                <p className="mt-4 font-semibold text-black">ชิพ A15 Bionic</p>
                                <p className="font-semibold text-gray-400">
                                    ชิปที่เร็วที่สุดในสมาร์ทโฟน
                                </p>
                            </div>
                            <div>
                                <img
                                    alt="Chip"
                                    className="mx-auto largepicicon"
                                    src="assets/compareProduct/iphone/iphone14_camera.jpg"  //iphone14_camera.jpg
                                />
                                <p className="mt-4 font-semibold text-black">ระบบกล้องคู่</p>
                                <p className="font-semibold text-gray-400">
                                    ความละเอียดกว่า 12 MP
                                </p>
                            </div>
                            <div>
                                <img
                                    alt="Chip"
                                    className="mx-auto largepicicon"
                                    src="assets/compareProduct/iphone/5g.jpg"  //5g.jpg
                                />
                                <br></br>
                                <p className="mt-4 font-semibold text-black">ระบบเซลลูลาร์ 5G ที่เร็วสุดแรง³</p>    </div>
                        </div>
                        <Link to='/iphone14'>
                        <button class="rounded-full bg-stone-800 w-20">
                            <h1 className='text-white'>ซื้อเลย</h1>
                        </button>
                        </Link>
                    </div>

                </div>
            </div>


            <div className='bg-iPhone14Pro'>
                <div className=' grid grid-cols-2 md:grid-cols-2 text-center mt-12'>
                <div className="iphone14txt" >
                    <h3 className='a c'>ใหม่</h3>
                    <h3 className='b c'>iPhone14 Pro</h3>
                    <h1 className='c e'>โปร ยิ่งกว่าโปร</h1>
                    <h1 className='a c'>เริ่มต้นที่ ฿41,900</h1>
                </div>
                <div>
                    <center>
                        <img src="assets/baners/iphone14pro.jpg" alt='' />
                    </center>
                    </div>
                    
                
            </div>
            <div className='row'>
            <div className='bg-iPhone14 grid grid-cols-2 md:grid-cols-2 text-center mt-12 dark '>
            <center><img className='dark bigger' src="assets/products/iphone14pro/iphone14pro-pro-family.png" alt='' /></center>
                <div className='Text '>
                    <h3 className='c e dark'>iPhone14Pro</h3>
                    <h3 className='a text-black dark'>มาพร้อมจอภาพแบบติดตลอด, กล้องความละเอียด 48MP ครั้งแรกบน iPhone, คุณสมบัติการตรวจจับการชนกัน, คุณสมบัติ SOS ฉุกเฉินผ่านดาวเทียม และวิธีใหม่สุดล้ำสำหรับรับการแจ้งเตือนและกิจกรรมต่างๆ ด้วย Dynamic Island</h3>
                    <h1>เริ่มต้นที่ ฿41,900</h1><br></br>
                    <div className='rounded md:rounded-lg'>

                        <div className="my-10 grid grid-cols-3 md:grid-cols-3 text-center mt-12">
                            <div>
                                <img
                                    alt="Chip"
                                    className="mx-auto"
                                    src="assets/compareProduct/iphone/iphone14Prochip.jpg"  //5g.jpg
                                />
                                <p className="mt-4 font-semibold text-black">ชิป A16 Bionic</p>
                                <br></br>
                                <p className="font-semibold text-white-400 dark">
                                    ชิปที่เร็วที่สุดในสมาร์ทโฟน
                                </p>
                            </div>
                            <div>
                                <img
                                    alt="Chip"
                                    className="mx-auto largepicicon"
                                    src="assets/compareProduct/iphone/iphone14proCamera.jpg"  //iphone14_camera.jpg
                                />
                                <p className="mt-4 font-semibold text-black">ระบบกล้องระดับโปร</p>
                                <br></br>
                                <p className="font-semibold text-gray-400">
                                    กล้องหลักความละเอียด 48MP
                                </p>
                            </div>
                            <div>
                                <img
                                    alt="Chip"
                                    className="mx-auto largepicicon "
                                    src="assets/compareProduct/iphone/dynamic-iphone14Pro.jpg"
                                />
                                <p className="mt-4 font-semibold text-black">Dynamic Island <br></br>วิธีใหม่ในการโต้ตอบกับ iPhone</p>    </div>
                        </div>
                        <Link to='/iphone14pro'>
                            <button class="rounded-full bg-stone-800 w-20">
                                <h1 className='text-white'>ซื้อเลย</h1>
                            </button>
                        </Link>
                    <br></br>
                    </div>

                </div>
            </div>
            </div>
            </div>
            <Iphone14ProCompare />

        </div>
    );
}

export default Iphone;
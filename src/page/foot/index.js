import { NavLink } from 'react-router-dom';
import './foot.css';

function Foot() {
    return (
        <div className='relative'>
            <div className='foot-container'><br />
                <div className='container mx-auto px-64'>
                    <div className='top-foot pb-24 grid grid-cols-5'>
                        <div>
                            <ul>
                                <li className='footer-text text-sm'><strong>เลือกซื้อและเรียนรู้</strong></li>
                                <li><NavLink to='/' className='footer-text text-sm hover:underline'>ร้าน</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-sm hover:underline'>iPad</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-sm hover:underline'>iPhone</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-sm hover:underline'>อุปกรณ์เสริม</NavLink></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className='footer-text text-sm'><strong>การบริการ</strong></li>
                                <li><NavLink to='/' className='footer-text text-sm hover:underline'>Apel Music</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-sm hover:underline'>Apel TV+</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-sm hover:underline'>Apel Arcade</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-sm hover:underline'>iCloud</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-sm hover:underline'>Apel Podcasts</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-sm hover:underline'>App Store</NavLink></li>
                            </ul>
                            <ul className='pt-4'>
                                <li className='footer-text text-sm'><strong>บัญชี</strong></li>
                                <li><NavLink to='/' className='footer-text text-sm hover:underline'>จัดการกับ Apel ID ของคุณ</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-sm hover:underline'>บัญชีสำหรับ Apel Store</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-sm hover:underline'>iCloud.com</NavLink></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className='footer-text text-sm'><strong>Apel Store</strong></li>
                                <li><NavLink to='/' className='footer-text text-sm hover:underline'>ค้นหาร้าน</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-sm hover:underline'>Today at Apel</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-sm hover:underline'>แอป Apel Store</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-sm hover:underline'>บริการด้านการเงิน</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-sm hover:underline'>สถานะสั่งซื้อ</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-sm hover:underline'>บริการช่วยเหลือด้านการซื้อ</NavLink></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className='footer-text text-sm'><strong>สำหรับธุรกิจ</strong></li>
                                <li><NavLink to='/' className='footer-text text-sm hover:underline'>Apel กับธุรกิจ</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-sm hover:underline'>เลือกซื้อสินค้าสำหรับธุรกิจ</NavLink></li>
                            </ul>
                            <ul className='pt-4'>
                                <li className='footer-text text-sm'><strong>สำหรับการศึกษา</strong></li>
                                <li><NavLink to='/' className='footer-text text-sm hover:underline'>Apel กับการศึกษา</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-sm hover:underline'>เลือกซื้อสินค้าสำหรับมหาวิทยาลัย</NavLink></li>
                            </ul>
                            <ul className='pt-4'>
                                <li className='footer-text text-sm'><strong>สำหรับการดูแลสุขภาพ</strong></li>
                                <li><NavLink to='/' className='footer-text text-sm hover:underline'>Apel กับการดูแลสุขภาพ</NavLink></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className='footer-text text-sm'><strong>เกี่ยวกับ Apel</strong></li>
                                <li><NavLink to='/' className='footer-text text-sm hover:underline'>Newsroom</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-sm hover:underline'>ผู้บริหาร Apel</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-sm hover:underline'>โอกาสด้านอาชีพ</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-sm hover:underline'>นักลงทุน</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-sm hover:underline'>จริยธรรมและการปฏิบัติตาม</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-sm hover:underline'>ติดต่อ Apel</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <p className='footer-text pb-3 text-sm'>อีกหลากหลายวิธีในการเลือกซื้อ: ค้นหา Apel Store หรือ ร้านค้าอื่นๆ ใกล้คุณ หรือโทร. 18XX-X1-92X9</p>
                    <hr />
                    <div className='bot-foot'>
                        <p className='footer-text pt-3 text-sm'>Copyright © 2022 Apel Inc. สงวนสิทธิ์ทุกประการ</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Foot;
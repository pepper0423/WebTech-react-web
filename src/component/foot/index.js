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
                                <li className='footer-text text-small cursor-default'><strong>เลือกซื้อและเรียนรู้</strong></li>
                                <li><NavLink to='/' className='footer-text text-small hover:underline'>ร้าน</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-small hover:underline'>iPad</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-small hover:underline'>iPhone</NavLink></li>
                                <li><NavLink to='/accessories' className='footer-text text-small hover:underline'>อุปกรณ์เสริม</NavLink></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className='footer-text text-small cursor-default'><strong>การบริการ</strong></li>
                                <li><NavLink to='/' className='footer-text text-small hover:underline'>Apel Music</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-small hover:underline'>Apel TV+</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-small hover:underline'>Apel Arcade</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-small hover:underline'>iCloud</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-small hover:underline'>Apel Podcasts</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-small hover:underline'>App Store</NavLink></li>
                            </ul>
                            <ul className='pt-4'>
                                <li className='footer-text text-small cursor-default'><strong>บัญชี</strong></li>
                                <li><NavLink to='/' className='footer-text text-small hover:underline'>จัดการกับ Apel ID ของคุณ</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-small hover:underline'>บัญชีสำหรับ Apel Store</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-small hover:underline'>iCloud.com</NavLink></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className='footer-text text-small cursor-default'><strong>Apel Store</strong></li>
                                <li><NavLink to='/' className='footer-text text-small hover:underline'>ค้นหาร้าน</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-small hover:underline'>Today at Apel</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-small hover:underline'>แอป Apel Store</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-small hover:underline'>บริการด้านการเงิน</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-small hover:underline'>สถานะสั่งซื้อ</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-small hover:underline'>บริการช่วยเหลือด้านการซื้อ</NavLink></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className='footer-text text-small cursor-default'><strong>สำหรับธุรกิจ</strong></li>
                                <li><NavLink to='/' className='footer-text text-small hover:underline'>Apel กับธุรกิจ</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-small hover:underline'>เลือกซื้อสินค้าสำหรับธุรกิจ</NavLink></li>
                            </ul>
                            <ul className='pt-4'>
                                <li className='footer-text text-small cursor-default'><strong>สำหรับการศึกษา</strong></li>
                                <li><NavLink to='/' className='footer-text text-small hover:underline'>Apel กับการศึกษา</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-small hover:underline'>เลือกซื้อสินค้าสำหรับมหาวิทยาลัย</NavLink></li>
                            </ul>
                            <ul className='pt-4'>
                                <li className='footer-text text-small cursor-default'><strong>สำหรับการดูแลสุขภาพ</strong></li>
                                <li><NavLink to='/' className='footer-text text-small hover:underline'>Apel กับการดูแลสุขภาพ</NavLink></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className='footer-text text-small cursor-default'><strong>เกี่ยวกับ Apel</strong></li>
                                <li><NavLink to='/' className='footer-text text-small hover:underline'>Newsroom</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-small hover:underline'>ผู้บริหาร Apel</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-small hover:underline'>โอกาสด้านอาชีพ</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-small hover:underline'>นักลงทุน</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-small hover:underline'>จริยธรรมและการปฏิบัติตาม</NavLink></li>
                                <li><NavLink to='/' className='footer-text text-small hover:underline'>ติดต่อ Apel</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <p className='footer-text pb-3 text-small'>อีกหลากหลายวิธีในการเลือกซื้อ: ค้นหา Apel Store หรือ ร้านค้าอื่นๆ ใกล้คุณ หรือโทร. 18XX-X1-92X9</p>
                    <hr />
                    <div className='bot-foot'>
                        <p className='footer-text pt-3 text-small'>Copyright © 2022 Apel Inc. สงวนสิทธิ์ทุกประการ</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Foot;
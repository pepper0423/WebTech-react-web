import { NavLink } from 'react-router-dom';
import './foot.css';

function Foot() {
    return (
        <footer>
            <div className='relative'>
                <div className='foot-container'><br />
                    <div className='container mx-auto px-[17rem] max-[1280px]:px-0'>
                        <div className='top-foot pb-12 grid grid-cols-5'>
                            <div>
                                <ul>
                                    <li className='footer-text text-small cursor-default'><strong>เลือกซื้อและเรียนรู้</strong></li>
                                    <li><NavLink to='/' className='footer-text text-small hover:underline'>ร้าน</NavLink></li>
                                    <li><NavLink to='/ipad' className='footer-text text-small hover:underline'>iPad</NavLink></li>
                                    <li><NavLink to='/iphone' className='footer-text text-small hover:underline'>iPhone</NavLink></li>
                                    <li><NavLink to='/accessories' className='footer-text text-small hover:underline'>อุปกรณ์เสริม</NavLink></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li className='footer-text text-small cursor-default'><strong>การบริการ</strong></li>
                                    <li><NavLink to='/' className='footer-text text-small hover:underline'>Apple Music</NavLink></li>
                                    <li><NavLink to='/' className='footer-text text-small hover:underline'>Apple TV+</NavLink></li>
                                    <li><NavLink to='/' className='footer-text text-small hover:underline'>Apple Arcade</NavLink></li>
                                    <li><NavLink to='/' className='footer-text text-small hover:underline'>iCloud</NavLink></li>
                                    <li><NavLink to='/' className='footer-text text-small hover:underline'>Apple Podcasts</NavLink></li>
                                    <li><NavLink to='/' className='footer-text text-small hover:underline'>App Store</NavLink></li>
                                </ul>
                                <ul className='pt-4'>
                                    <li className='footer-text text-small cursor-default'><strong>บัญชี</strong></li>
                                    <li><NavLink to='/' className='footer-text text-small hover:underline'>จัดการกับ Apple ID ของคุณ</NavLink></li>
                                    <li><NavLink to='/' className='footer-text text-small hover:underline'>บัญชีสำหรับ Apple Store</NavLink></li>
                                    <li><NavLink to='/' className='footer-text text-small hover:underline'>iCloud.com</NavLink></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li className='footer-text text-small cursor-default'><strong>Apple Store</strong></li>
                                    <li><NavLink to='/' className='footer-text text-small hover:underline'>ค้นหาร้าน</NavLink></li>
                                    <li><NavLink to='/' className='footer-text text-small hover:underline'>Today at Apple</NavLink></li>
                                    <li><NavLink to='/' className='footer-text text-small hover:underline'>แอป Apple Store</NavLink></li>
                                    <li><NavLink to='/' className='footer-text text-small hover:underline'>บริการด้านการเงิน</NavLink></li>
                                    <li><NavLink to='/' className='footer-text text-small hover:underline'>สถานะสั่งซื้อ</NavLink></li>
                                    <li><NavLink to='/' className='footer-text text-small hover:underline'>บริการช่วยเหลือด้านการซื้อ</NavLink></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li className='footer-text text-small cursor-default'><strong>สำหรับธุรกิจ</strong></li>
                                    <li><NavLink to='/' className='footer-text text-small hover:underline'>Apple กับธุรกิจ</NavLink></li>
                                    <li><NavLink to='/' className='footer-text text-small hover:underline'>เลือกซื้อสินค้าสำหรับธุรกิจ</NavLink></li>
                                </ul>
                                <ul className='pt-4'>
                                    <li className='footer-text text-small cursor-default'><strong>สำหรับการศึกษา</strong></li>
                                    <li><NavLink to='/' className='footer-text text-small hover:underline'>Apple กับการศึกษา</NavLink></li>
                                    <li><NavLink to='/' className='footer-text text-small hover:underline'>เลือกซื้อสินค้าสำหรับมหาวิทยาลัย</NavLink></li>
                                </ul>
                                <ul className='pt-4'>
                                    <li className='footer-text text-small cursor-default'><strong>สำหรับการดูแลสุขภาพ</strong></li>
                                    <li><NavLink to='/' className='footer-text text-small hover:underline'>Apple กับการดูแลสุขภาพ</NavLink></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li className='footer-text text-small cursor-default'><strong>เกี่ยวกับ Apple</strong></li>
                                    <li><NavLink to='/' className='footer-text text-small hover:underline'>Newsroom</NavLink></li>
                                    <li><NavLink to='/' className='footer-text text-small hover:underline'>ผู้บริหาร Apple</NavLink></li>
                                    <li><NavLink to='/' className='footer-text text-small hover:underline'>โอกาสด้านอาชีพ</NavLink></li>
                                    <li><NavLink to='/' className='footer-text text-small hover:underline'>นักลงทุน</NavLink></li>
                                    <li><NavLink to='/' className='footer-text text-small hover:underline'>จริยธรรมและการปฏิบัติตาม</NavLink></li>
                                    <li><NavLink to='/' className='footer-text text-small hover:underline'>ติดต่อ Apple</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <p className='footer-text pb-3 text-small'>อีกหลากหลายวิธีในการเลือกซื้อ: ค้นหา Apple Store หรือ ร้านค้าอื่นๆ ใกล้คุณ หรือโทร. 18XX-X1-92X9</p>
                        <hr />
                        <div className='bot-foot'>
                            <p className='footer-text pt-3 text-small'>Copyright © 2022 Apple Inc. สงวนสิทธิ์ทุกประการ</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Foot;
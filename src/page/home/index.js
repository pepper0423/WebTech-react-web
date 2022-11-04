import { NavLink } from 'react-router-dom';
import Carousel from '../../component/carousel';
import Itemslider from '../../component/itemslider';

function Home() {
    return (
        <div>
            <section>
                <div className='mx-auto text-center py-3 bg-[#f5f5f7]'>
                    <span><NavLink to='store' className='text-sky-500'>เลือกซื้อสินค้าออนไลน์</NavLink> แล้วรับความช่วยเหลือจาก Specialist พร้อมบริการจัดส่งฟรีและอีกมากมาย</span>
                </div>
                <Carousel />
                <div className='container mx-auto py-12 px-60'>
                    <Itemslider title='แนะนำ' rowID='0' toItem='store' />
                    <Itemslider title='iPhone' rowID='1' toItem='iphone' />
                    <Itemslider title='iPad' rowID='2' toItem='ipad' />
                    <Itemslider title='อุปกรณ์เสริม' rowID='3' toItem='accessories' />
                </div>
            </section>
        </div>
    );
}

export default Home;
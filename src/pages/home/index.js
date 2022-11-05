import { NavLink } from 'react-router-dom';
import Carousel from '../../components/carousel';
import Itemslider from '../../components/itemslider';

function Home() {
    return (
        <div>
            <section>
                <div className='mx-auto text-center py-3 bg-apple-white'>
                    <span className='text-medium'><NavLink to='store' className='text-apple-blue hover:underline text-medium'>เลือกซื้อสินค้าออนไลน์</NavLink> แล้วรับความช่วยเหลือจาก Specialist พร้อมบริการจัดส่งฟรีและอีกมากมาย</span>
                </div>
                <Carousel />
                <div className='container mx-auto py-12 px-60'>
                    <Itemslider title='แนะนำ' rowID='0' toItem='store' />
                    <Itemslider title='iPhone' rowID='1' toItem='iphone' />
                    <Itemslider title='อุปกรณ์เสริม' rowID='2' toItem='accessories' />
                </div>
            </section>
        </div>
    );
}

export default Home;
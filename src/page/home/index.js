import { NavLink } from 'react-router-dom';
import Carousel from '../carousel';
import './home.css';

function Home() {
    return (
        <div>
            <section>
                <div className='mx-auto text-center py-3 bg-[#f5f5f7]'>
                    <span><NavLink to='/' className='text-sky-500'>เลือกซื้อสินค้าออนไลน์</NavLink> แล้วรับความช่วยเหลือจาก Specialist พร้อมบริการจัดส่งฟรีและอีกมากมาย</span>
                </div>
                <Carousel />
                <div className='container mx-auto py-32'>
                    <h3>iPhone</h3>
                    <h3>iPad</h3>
                    <h3>Accessories</h3>
                </div>
            </section>
        </div>
    );
}

export default Home;
import { NavLink } from 'react-router-dom';
import Carousel from '../../components/carousel';
import Itemslider from '../../components/itemslider';
import Nav from '../../components/nav';

const Home = () => {
    const recommendData = [
        { id: 1, itemName: 'iphone 14 pro max', linkto: 'iphone14pro' },
        { id: 2, itemName: 'iphone 14 pro', linkto: 'iphone14pro' },
        { id: 3, itemName: 'iphone 14', linkto: 'iphone14' },
        { id: 4, itemName: 'iphone 14 plus', linkto: 'iphone14plus' },
        { id: 5, itemName: 'ipad gen 10', linkto: 'ipadgen10' },
        { id: 6, itemName: 'apel pencil 2nd gen', linkto: 'apelpencil2ndgen' },
        { id: 7, itemName: 'apel keyboard', linkto: 'apelkeyboard' },
        { id: 8, itemName: 'airpod pro', linkto: 'airpodpro' }
    ];

    const iphoneData = [
        { id: 1, itemName: 'iphone 14 pro max', linkto: 'iphone14pro' },
        { id: 2, itemName: 'iphone 14 pro', linkto: 'iphone14pro' },
        { id: 3, itemName: 'iphone 14', linkto: 'iphone14' },
        { id: 4, itemName: 'iphone 14 plus', linkto: 'iphone14plus' }
    ];

    const accessData = [
        { id: 1, itemName: 'apel pencil 2nd gen', linkto: 'apelpencil2ndgen' },
        { id: 2, itemName: 'apel keyboard', linkto: 'apelkeyboard' },
        { id: 3, itemName: 'airpod pro', linkto: 'airpodpro' }
    ];

    return (
        <div>
            <header>
                <Nav disableSticky={true} />
            </header>
            <section>
                <div className='mx-auto text-center py-3 bg-apple-white'>
                    <span className='text-medium'><NavLink to='store' className='text-apple-blue hover:underline text-medium'>เลือกซื้อสินค้าออนไลน์</NavLink> แล้วรับความช่วยเหลือจาก Specialist พร้อมบริการจัดส่งฟรีและอีกมากมาย</span>
                </div>
                <Carousel />
                <div className='container mx-auto py-12 px-60'>
                    <Itemslider title='แนะนำ' rowID='0' toItem='store' itemArr={recommendData} />
                </div>
                <div className='container mx-auto relative'>
                    <div className='item-wrapper text-center'>
                        <h2 className='font-bold text-[48px] mx-[70%] mt-[30%]'>iPad</h2>
                        <h3 className='text-[24px]'>รักเลย วาดเลย เอาใจไปเลย</h3>
                        <div className='bg-[url("../public/assets/image/homepage/ipad_hero.jpg")] h-[1500px] absolute'></div>
                    </div>
                    <div className='image-wrapper'>
                        <figure className='w-full h-full'></figure>
                    </div>
                </div>
                <div className='container mx-auto py-12 px-60'>
                    <Itemslider title='iPhone' rowID='1' toItem='iphone' itemArr={iphoneData} />
                    <Itemslider title='อุปกรณ์เสริม' rowID='2' toItem='accessories' itemArr={accessData} />
                </div>
            </section>
        </div>
    );
};

export default Home;
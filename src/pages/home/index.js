import { Link } from 'react-router-dom';
import Carousel from '../../components/carousel';
import Itemslider from '../../components/itemslider';
import Nav from '../../components/nav';

const Ipadgen10 = () => {
    return (
        <div className="bg-apple-white relative">
            <div>
                <img alt="" src="../assets/image/homepage/ipad_hero.jpg" className="mx-auto max-w-full"/>
            </div>
            <div className="text-center absolute ml-[56%] top-[48%]">
                <h2 className="text-5xl font-semibold">iPad</h2>
                <p className="text-3xl mt-2 text-black">รักเลย วาดเลย เอาใจไปเลย</p>
            </div>
            <div className="mt-5 text-center text-xl text-apple-blue absolute ml-[60%] top-[55%]">
                <Link to="/ipad" className="hover:underline mr-4">ดูเพิ่มเติม &#10095;</Link>
                <Link to="/ipadgen10" className="hover:underline">ซื้อ &#10095;</Link>
            </div>
        </div>
    );
};

const Home = () => {
    const recommendData = [
        { id: 1, itemName: 'iphone 14 pro max', linkto: '/iphone14pro' },
        { id: 2, itemName: 'iphone 14 pro', linkto: '/iphone14pro' },
        { id: 3, itemName: 'iphone 14', linkto: '/iphone14' },
        { id: 4, itemName: 'iphone 14 plus', linkto: '/iphone14plus' },
        { id: 5, itemName: 'ipad gen 10', linkto: 'ipadgen10' },
        { id: 6, itemName: 'apel pencil 2nd gen', linkto: 'apelpencil2ndgen' },
        { id: 7, itemName: 'apel keyboard', linkto: 'apelkeyboard' },
        { id: 8, itemName: 'airpod pro', linkto: 'airpodpro' }
    ];

    const iphoneData = [
        { id: 1, itemName: 'iphone 14 pro max', linkto: '/iphone14pro' },
        { id: 2, itemName: 'iphone 14 pro', linkto: '/iphone14pro' },
        { id: 3, itemName: 'iphone 14', linkto: '/iphone14' },
        { id: 4, itemName: 'iphone 14 plus', linkto: '/iphone14plus' }
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
                    <span className='text-medium'><Link to='/store' className='text-apple-blue hover:underline text-medium'>เลือกซื้อสินค้าออนไลน์</Link> แล้วรับความช่วยเหลือจาก Specialist พร้อมบริการจัดส่งฟรีและอีกมากมาย</span>
                </div>
                <Carousel />
                <div className='container mx-auto py-12 px-60'>
                    <Itemslider title='แนะนำ' rowID='0' toItem='store' itemArr={recommendData} />
                </div>
                <Ipadgen10 />
                <div className='container mx-auto py-12 px-60'>
                    <Itemslider title='iPhone' rowID='1' toItem='iphone' itemArr={iphoneData} />
                    <Itemslider title='อุปกรณ์เสริม' rowID='2' toItem='accessories' itemArr={accessData} />
                </div>
            </section>
        </div>
    );
};

export default Home;
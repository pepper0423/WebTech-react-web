import { Link } from 'react-router-dom';
import Carousel from '../../components/carousel';
import Itemslider from '../../components/itemslider';
import Nav from '../../components/nav';

const Home = () => {
    const recommendData = [
        { id: 1, itemName: 'iPhone 14 Pro Max', linkto: '/iphone14pro', itemPic: '../assets/image/homepage/iphone-14-pro_overview.png' },
        { id: 2, itemName: 'iPhone 14 Pro', linkto: '/iphone14pro', itemPic: '../assets/image/homepage/iphone-14-pro_overview_1.png' },
        { id: 3, itemName: 'iPhone 14', linkto: '/iphone14', itemPic: '../assets/image/homepage/iphone-14_overview_1.png' },
        { id: 4, itemName: 'iPhone 14 Plus', linkto: '/iphone14plus', itemPic: '../assets/image/homepage/iphone-14_overview_2.png' },
        { id: 5, itemName: 'Ipad รุ่นที่ 10', linkto: 'ipadgen10', itemPic: '../assets/image/homepage/ipad_gen_10_overview.jpg' },
        { id: 6, itemName: 'Apel Pencil รุ่นที่ 2', linkto: 'apelpencil2ndgen', itemPic: '../assets/image/homepage/applepencil2ndgen_overview.jpg' },
        { id: 7, itemName: 'Magic Keyboard', linkto: 'magickeyboard', itemPic: '../assets/image/homepage/magickeyboard_overview.jpg' },
        { id: 8, itemName: 'Airpod Pro', linkto: 'airpodpro', itemPic: '../assets/image/homepage/airpodpro_overview.jpg' }
    ];

    const iphoneData = [
        { id: 1, itemName: 'iPhone 14 Pro Max', linkto: '/iphone14pro', itemPic: '../assets/image/homepage/iphone-14-pro_overview.png' },
        { id: 2, itemName: 'iPhone 14 Pro', linkto: '/iphone14pro', itemPic:  '../assets/image/homepage/iphone-14-pro_overview_1.png'},
        { id: 3, itemName: 'iPhone 14', linkto: '/iphone14', itemPic: '../assets/image/homepage/iphone-14_overview_1.png' },
        { id: 4, itemName: 'iPhone 14 Plus', linkto: '/iphone14plus', itemPic: '../assets/image/homepage/iphone-14_overview_2.png' }
    ];
    
    const accessData = [
        { id: 1, itemName: 'Apel Pencil รุ่นที่ 2', linkto: 'apelpencil2ndgen', itemPic: '../assets/image/homepage/applepencil2ndgen_overview.jpg' },
        { id: 2, itemName: 'Magic Keyboard', linkto: 'magickeyboard', itemPic: '../assets/image/homepage/magickeyboard_overview.jpg' },
        { id: 3, itemName: 'Airpod Pro', linkto: 'airpodpro', itemPic: '../assets/image/homepage/airpodpro_overview.jpg' }
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
                    <Itemslider title='iPhone' rowID='1' toItem='iphone' itemArr={iphoneData} />
                    <Itemslider title='อุปกรณ์เสริม' rowID='2' toItem='accessories' itemArr={accessData} />
                </div>
            </section>
        </div>
    );
};

export default Home;
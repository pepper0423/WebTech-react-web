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
        { id: 5, itemName: 'Ipad รุ่นที่ 10', linkto: '/ipadgen10', itemPic: '../assets/image/homepage/ipad_gen_10_overview.jpg' },
        { id: 6, itemName: 'Apple Pencil รุ่นที่ 2', linkto: '/applepencil2ndgen', itemPic: '../assets/image/homepage/applepencil2ndgen_overview.jpg' },
        { id: 7, itemName: 'Magic Keyboard', linkto: '/magickeyboard', itemPic: '../assets/image/homepage/magickeyboard_overview.jpg' },
        { id: 8, itemName: 'Airpod Pro', linkto: '/airpodpro', itemPic: '../assets/image/homepage/airpodpro_overview.jpg' }
    ];

    const iphoneproData = [
        { id: 1, itemName: 'iPhone 14 Pro Max', linkto: '/iphone14pro', itemPic: '../assets/image/homepage/iPhone_14_Pro_Max_Deep_Purple_PDP_Image_Position-1A_Deep_Purple_5.jpg' },
        { id: 2, itemName: 'iPhone 14 Pro Max', linkto: '/iphone14pro', itemPic: '../assets/image/homepage/iPhone_14_Pro_Max_Gold_PDP_Image_Position-1A_Gold_5.jpg' },
        { id: 3, itemName: 'iPhone 14 Pro Max', linkto: '/iphone14pro', itemPic: '../assets/image/homepage/iPhone_14_Pro_Max_Silver_PDP_Image_Position-1A_Silver_5.jpg' },
        { id: 4, itemName: 'iPhone 14 Pro Max', linkto: '/iphone14pro', itemPic: '../assets/image/homepage/iPhone_14_Pro_Max_Space_Black_PDP_Image_Position-1A_Space_Black_5.jpg' },
        { id: 5, itemName: 'iPhone 14 Pro', linkto: '/iphone14pro', itemPic:  '../assets/image/homepage/iPhone_14_Pro_Silver_PDP_Image_Position-1A_Silver_4.jpg'},
        { id: 6, itemName: 'iPhone 14 Pro', linkto: '/iphone14pro', itemPic:  '../assets/image/homepage/iPhone_14_Pro_Deep_Purple_PDP_Image_Position-1A_Deep_Purple_4.jpg'},
        { id: 7, itemName: 'iPhone 14 Pro', linkto: '/iphone14pro', itemPic:  '../assets/image/homepage/iPhone_14_Pro_Gold_PDP_Image_Position-1A_Gold_4.jpg'},
        { id: 8, itemName: 'iPhone 14 Pro', linkto: '/iphone14pro', itemPic:  '../assets/image/homepage/iPhone_14_Pro_Space_Black_PDP_Image_Position-1A_Space_Black_4.jpg'}
    ];

    const iphoneData = [
        { id: 1, itemName: 'iPhone 14', linkto: '/iphone14', itemPic: '../assets/image/homepage/iPhone_14_Blue_PDP_Image_Position-1A_Blue_4.jpg' },
        { id: 2, itemName: 'iPhone 14', linkto: '/iphone14', itemPic: '../assets/image/homepage/iPhone_14_ProductRED_PDP_Image_Position-1A_ProductRED_4.jpg' },
        { id: 3, itemName: 'iPhone 14', linkto: '/iphone14', itemPic: '../assets/image/homepage/iPhone_14_Purple_PDP_Image_Position-1A_Purple_4.jpg' },
        { id: 4, itemName: 'iPhone 14', linkto: '/iphone14', itemPic: '../assets/image/homepage/iPhone_14_Starlight_PDP_Image_Position-1A_Starlight_4.jpg' },
        { id: 5, itemName: 'iPhone 14', linkto: '/iphone14', itemPic: '../assets/image/homepage/iPhone_14_Midnight_PDP_Image_Position-1A_Midnight_4.jpg' },
        { id: 6, itemName: 'iPhone 14 Plus', linkto: '/iphone14plus', itemPic: '../assets/image/homepage/iphone-14_overview_2.png'},
        { id: 7, itemName: 'iPhone 14 Plus', linkto: '/iphone14plus', itemPic: '../assets/image/homepage/iPhone_14_Plus_Blue_PDP_Image_Position-1A_Blue_5.jpg'},
        { id: 8, itemName: 'iPhone 14 Plus', linkto: '/iphone14plus', itemPic: '../assets/image/homepage/iphone-14_overview_2.png'},
        { id: 9, itemName: 'iPhone 14 Plus', linkto: '/iphone14plus', itemPic: '../assets/image/homepage/iphone-14_overview_2.png'}
    ];
    
    const accessData = [
        { id: 1, itemName: 'Apple Pencil รุ่นที่ 2', linkto: '/applepencil2ndgen', itemPic: '../assets/image/homepage/applepencil2ndgen_overview.jpg' },
        { id: 2, itemName: 'Magic Keyboard สำหรับ iPad', linkto: '/magickeyboard', itemPic: '../assets/image/homepage/magickeyboard_overview.jpg' },
        { id: 3, itemName: 'Airpods Pro', linkto: 'airpodpro', itemPic: '../assets/image/homepage/airpodpro_overview.jpg' },
        { id: 4, itemName: 'อะแดปเตอร์แปลงไฟ USB-C ขนาด 20 วัตต์', linkto: '/adapter', itemPic: '../assets/image/homepage/adapter.jpg' },
        { id: 5, itemName: 'อะแดปเตอร์ Digital AV แบบ Lightning', linkto: '/digitalAV', itemPic: '../assets/image/homepage/digitalAV.jpg' }
    ];

    return (
        <div>
            <header>
                <Nav disableSticky={true} />
            </header>
            <section>
                <div className='mx-auto text-center py-3 bg-apple-white'>
                    <span className='text-medium'><Link to='/' className='text-apple-blue hover:underline text-medium'>เลือกซื้อสินค้าออนไลน์</Link> แล้วรับความช่วยเหลือจาก Specialist พร้อมบริการจัดส่งฟรีและอีกมากมาย</span>
                </div>
                <Carousel />
                <div className='container mx-auto py-12'>
                    <Itemslider title='แนะนำ' rowID='0' toItem='/' itemArr={recommendData}/>
                    <Itemslider title='iPhone 14 Pro & Pro Max' rowID='1' toItem='/iphone' itemArr={iphoneproData} />
                    <Itemslider title='iPhone 14 & 14 Plus' rowID='2' toItem='/iphone' itemArr={iphoneData} />
                    <Itemslider title='อุปกรณ์เสริม' rowID='3' toItem='/accessories' itemArr={accessData} />
                </div>
            </section>
        </div>
    );
};

export default Home;
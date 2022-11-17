import Nav from '../../components/nav';
import './accessory.css';
import { Link } from 'react-router-dom';
import Itemslider from '../../components/itemslider';
import Service from './Service';

function Accessories() {

    const accessData = [
        { id: 1, itemName: 'Airpod', linkto: '', itemPic: '../assets/accesory/list/common/MV7N2.png' },
        { id: 2, itemName: 'สายชาร์จไร้สาย', linkto: '', itemPic: '../assets/accesory/list/common/MLWJ3.png' },
        { id: 3, itemName: 'Adaptor', linkto: '', itemPic: '../assets/accesory/list/common/MNWM3.png' },
        { id: 4, itemName: 'สายแบบ Trail Loop', linkto: '', itemPic: '../assets/accesory/list/common/MQEJ3ref.png' },
        { id: 5, itemName: 'Apple pencil Gen 2', linkto: '', itemPic: '../assets/accesory/list/common/MU8F2.png' },
        { id: 6, itemName: 'แท่นชาร์จแบบไร้สาย', linkto: '', itemPic: '../assets/accesory/list/common/HQ3F2.png' }
    ];
    const accessData1 = [
        { id: 1, itemName: 'ที่ชาร์จ MagSafe', linkto: '', itemPic: '../assets/accesory/list/iphone/MHXH3.png' },
        { id: 2, itemName: 'เคสหนัง', linkto: '', itemPic: '../assets/accesory/list/iphone/MPPP3.png' },
        { id: 3, itemName: 'เคสหนังแบบกระเป๋าสตางค์', linkto: '', itemPic: '../assets/accesory/list/iphone/MPPT3.png' },
        { id: 4, itemName: 'อะแดปเตอร์แปลงไฟ USB-C ขนาด 20 วัตต์', linkto: '', itemPic: '../assets/accesory/list/iphone/MPU63.png' },
        { id: 5, itemName: 'อะแดปเตอร์ Digital AV แบบ Lightning', linkto: '', itemPic: '../assets/accesory/list/iphone/MU7T2_GEO_TH.png' },
        { id: 6, itemName: 'เคส iPhone 14 พร้อม MagSafe', linkto: '', itemPic: '../assets/accesory/list/iphone/MV7N2.png' }
    ];
    const accessData2 = [
        { id: 1, itemName: 'Apple Pencil รุ่นที่ 1', linkto: '', itemPic: '../assets/accesory/list/ipad/MK0C2.png' },
        { id: 2, itemName: 'Magic Keyboard สำหรับ iPad', linkto: '', itemPic: '../assets/accesory/list/ipad/MQDP3_FV401.png' },
        { id: 3, itemName: 'Smart Folio', linkto: '', itemPic: '../assets/accesory/list/ipad/MQDV3.png' },
        { id: 4, itemName: 'Apple Pencil รุ่นที่ 2', linkto: '', itemPic: '../assets/accesory/list/ipad/MU8F2.png' }

    ];
    const accessData3 = [
        { id: 1, itemName: 'สายแบบ Milanese Loop สีการไฟต์', linkto: '', itemPic: '../assets/accesory/list/watch/ML773.png' },
        { id: 2, itemName: 'สายแบบ Leather Link สีน้ำตาลแดงอัมเบอร์', linkto: '', itemPic: '../assets/accesory/list/watch/MP853ref.png' },
        { id: 3, itemName: 'สายแบบ Solo Loop สีเขียวเอเชเวอเรีย', linkto: '', itemPic: '../assets/accesory/list/watch/MPF43ref.png' },
        { id: 4, itemName: 'สายแบบ Trail Loop', linkto: '', itemPic: '../assets/accesory/list/watch/MPH73ref.png' },
        { id: 5, itemName: 'สายแบบ Sport Loop สีม่วงเอลเดอร์เบอรี่', linkto: '', itemPic: '../assets/accesory/list/watch/MPLD3.png' },
        { id: 6, itemName: 'สายแบบ Braided Solo Loop สีเขียว ', linkto: '', itemPic: '../assets/accesory/list/watch/MQGM3ref.png' }

    ];

    return (
        <div className='bg-netflix-black'>
            <Nav disableSticky={true} />
            <div className='columns-2'>
                <div className='header'>
                    <div className='headertext text-5xl font-bold text-white'>
                        <h1>มิกซ์แอนด์แมทช์</h1>
                        <h1>กับ MagSafe</h1>
                    </div>
                    <div className='smallertext text-2xl text-white'>
                        <h1>
                            ติดเข้ากับเคสและกระเป๋าสตางค์
                        </h1>
                        <h1>
                            MagSafe หรือที่ชาร์จแบบไร้สาย
                        </h1>
                    </div>
                </div>
                <div>
                    <img src='assets/accesory/magsafe-202209_GEO_TH.png' alt='' />
                </div>
            </div>
            <center className='mt-10'>
                <div className='mt-10'>
                    <h1 className='upperline size'>
                        <h1 className='mt-10 text-3xl font-bold text-white'>
                            ใช้กับ
                        </h1>
                    </h1>

                    <div className='containericon columns-4 mx-0 mb-10'>
                        <div className='border itemsize rounded-full'>
                            <div className='ipad'>
                                <Link to='/ipad'>
                                    <img
                                        src='assets/accesory/icon-product-ipad.png'
                                        alt=''
                                        className='icon invert'
                                    />
                                </Link>
                            </div>
                        </div>

                        <div className='border itemsize rounded-full'>
                            <div className='ipad'>
                                <Link to='/iphone'>
                                    <img
                                        src='assets/accesory/icon-product-iphone.png'
                                        alt=''
                                        className='icon invert'
                                    />
                                </Link>
                            </div>
                        </div>

                        <div className='border itemsize rounded-full'>
                            <div className='ipad'>
                                <img
                                    src='assets/accesory/icon-product-mac.png'
                                    alt=''
                                    className='icon invert'
                                />
                            </div>
                        </div>
                        <div className='border itemsize rounded-full'>
                            <div className='ipad'>
                                <img
                                    src='assets/accesory/icon-product-watch.png'
                                    alt=''
                                    className='icon invert'
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='upperline size2'>
                    <div className='container mx-auto py-12'>
                        <Itemslider title='ของขวัญสำหรับเทศกาลวันหยุด' rowID='1' toItem='/' itemArr={accessData} />
                        <Itemslider title='เสริมความสะดวกให้ iPhone ของคุณ' rowID='2' toItem='/' itemArr={accessData1} />
                        <Itemslider title='เสริมความสะดวกให้ iPad ของคุณ' rowID='3' toItem='/' itemArr={accessData2} />
                        <Itemslider title='ตกแต่ง Apple Watch' rowID='4' toItem='/' itemArr={accessData3} />
                    </div>
                </div>
                <Service />
            </center>

        </div>
    );
}

export default Accessories;
import './ipad.css';
import Nav from '../../components/nav';
import Service from './Service';
import { Link } from 'react-router-dom';
import Itemslider from '../../components/itemslider';



const Ipad = () => {
    const accessData = [
        { id: 1, itemName: 'Apple Pencil รุ่นที่ 2', linkto: '/applepencil2ndgen', itemPic: '../assets/image/homepage/applepencil2ndgen_overview.jpg' },
        { id: 2, itemName: 'Magic Keyboard สำหรับ iPad', linkto: '/magickeyboard', itemPic: '../assets/image/homepage/magickeyboard_overview.jpg' },
        { id: 3, itemName: 'Airpods Pro', linkto: 'airpodpro', itemPic: '../assets/image/homepage/airpodpro_overview.jpg' },
        { id: 4, itemName: 'อะแดปเตอร์แปลงไฟ USB-C ขนาด 20 วัตต์', linkto: '/adapter', itemPic: '../assets/image/homepage/adapter.jpg' },
        { id: 5, itemName: 'อะแดปเตอร์ Digital AV แบบ Lightning', linkto: '/digitalAV', itemPic: '../assets/image/homepage/digitalAV.jpg' }];
    return (

        
        <div className='iPhonebody'>
            <header>
                <Nav disableSticky={true} />
            </header>
            <div className='bg-iPhone14 grid grid-cols-2 md:grid-cols-2 text-center mt-12'>
            <center><img className=' ipadbaner' src="assets/baners/ipadgen10.jpg" alt='' /></center>
                <div className='Text place-self-start mt-20'>
                    <h1 className='text-red-600'>ใหม่</h1>
                    <h1 className='text-9xl	font-bold'>iPad</h1><br></br>
                    <h1 className='text-2xl	font-bold'>รักเลย วาดเลย</h1>
                    <h1 className='text-2xl	font-bold'>เอาใจไปเลย</h1><br></br>
                    <h3 className='b'>เริ่มต้นที่ ฿17,900</h3>
                    <Link to='/ipadgen10'>
                        <button className="rounded-full bg-slate-600  w-20 h-10 mt-5">
                            <h1 className='text-white'>ซื้อเลย</h1>
                        </button>
                        </Link>
                </div>
                
            </div>

            <center>
            <div className='bg-iPhone14 grid grid-cols-2 md:grid-cols-1 text-center mt-12 sizing'>
                <div className='Text'>
                    <h3 className='text-black text-5xl font-bold'>iPad กับไลฟ์ไสตล์ของคุณ</h3>

                    <div className='rounded md:rounded-lg'>


                    </div>
                    <br></br>
                </div>

                <div className='darken bg-iPhone14 grid sm:grid-cols-1 grid-cols-2 md:grid-cols-2 text-center mt-12'>
                    <div className='mr-4 usewk'>
                        <p className='text-4xl	mt-10 mb-10'>
                            iPad ในที่ทำงาน
                        </p>
                        <div className='text-xl'>
                        <p>
                            พร้อมช่วยให้การทำงานเป็นไปด้วยความสะดวก
                        </p>
                        <p>
                            เพื่อการทำงานอย่างมีประสิทธิภาพ
                        </p>
                        </div>
                        <Link to='/ipadgen10'>
                        <button className="rounded-full bg-slate-100 w-20 h-10 mt-5">
                            <h1 className='text-black'>เลือกดู</h1>
                        </button>
                        </Link>
                    </div>
                    <div className='darken ml-4 useed mb-10'>
                        <p className='text-4xl	mt-10 mb-10'>
                            iPad กับการเรียนรู้
                        </p>
                        <div className='text-xl'>
                        <p>
                            เสริมศักยภาพให้นักการศึกษาและนักเรียน
                        </p>
                        <p>
                            ขับเคลื่อนโลกใบนี้ให้ก้าวไปข้างหน้า
                        </p>
                        </div>
                        <Link to='/ipadgen10'>
                        <button className="rounded-full bg-slate-100 w-20 h-10 mt-5">
                            <h1 className='text-black'>เลือกดู</h1>
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
            </center>
            <div className='container mx-auto py-12 px-60'>

                    <Itemslider title='อุปกรณ์เสริม' rowID='2' toItem='accessories' itemArr={accessData} />
            </div>

            <center>
            <div className='sizing'>
                
            <Service />
            
            </div>
            </center>
        </div>
    );
}

export default Ipad;
import './carousel.css';
import { Link } from 'react-router-dom';

function Carousel() {
    return (
        <div className='max-w-full bg-gray-100'>
            <div>
                <video autoPlay loop width='80%' className='mx-auto brightness-75'>
                    <source src="../assets/image/homepage/ipadcarouselvid1.mp4" type='video/mp4'/>
                </video>
            </div>
            <div className='floatin'>
                <h2><strong>iPad</strong></h2>
                <p>สุดสดใสแบบใหม่หมดสำหรับสิ่งต่างๆ ที่คุณทำทุกวัน</p>
                <Link to="/ipadgen10" id='buy'>ซื้อ &#10095;</Link>
                <Link to="/ipad" className="mr-4" id='seemore'>ดูเพิ่มเติม &#10095;</Link>
            </div>
        </div>
    );
}

export default Carousel;
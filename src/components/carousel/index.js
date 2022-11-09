import './carousel.css';
import { Link } from 'react-router-dom';

function Carousel() {
    return (
        <div className='max-w-full bg-gray-900'>
            <div>
                <video autoPlay loop width='80%' className='mx-auto brightness-75'>
                    <source src="../assets/image/homepage/iphonecarouselvid.mp4" type='video/mp4'/>
                </video>
            </div>
            <div className='floatin'>
                <h2><strong>iPhone 14 Pro</strong></h2>
                <p>สุดสดใสแบบใหม่หมดสำหรับสิ่งต่างๆ ที่คุณทำทุกวัน</p>
                <Link to="/iphone14pro" id='buy'>ซื้อ &#10095;</Link>
                <Link to="/iphone" className="mr-4" id='seemore'>ดูเพิ่มเติม &#10095;</Link>
            </div>
        </div>
    );
}

export default Carousel;
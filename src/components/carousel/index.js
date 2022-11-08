import './carousel.css';
import { Link } from 'react-router-dom';

function Carousel() {
    return (
        <div className='max-w-full'>
            <div>
                <iframe width='100%' src="https://www.youtube.com/embed/4wKU9oIXnTI?version=3&autoplay=1&loop=1&controls=0&disablekb=1&playlist=4wKU9oIXnTI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
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
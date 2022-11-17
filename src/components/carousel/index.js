import './carousel.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { GoMute, GoUnmute } from 'react-icons/go';

function Carousel() {
    const [muted, setMuted] = useState(false);
    return (
        <div className='max-w-full bg-gray-900'>
            <div>
                <video autoPlay loop width='80%' className='mx-auto brightness-75'>
                    <source src="../assets/image/homepage/iphonecarouselvid.mp4" type='video/mp4' />
                </video>
            </div>
            <div className='floatin'>
                <h2><strong>iPhone 14 Pro</strong></h2>
                <p>ที่สุดของ iPhone</p>
                <Link to="/iphone14pro" id='buy'>ซื้อ &#10095;</Link>
                <Link to="/iphone" className="mr-4" id='seemore'>ดูเพิ่มเติม &#10095;</Link>
            </div>
            <div className='absolute top-[80%] right-[15%] bg-white bg-opacity-25 p-4 rounded-full hover:bg-opacity-75'>
                {muted?<GoMute className='text-4xl' onClick={()=>setMuted(false)}/>:<GoUnmute className='text-4xl' onClick={()=>setMuted(true)}/>}
            </div>
        </div>
    );
}

export default Carousel;
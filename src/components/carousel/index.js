import './carousel.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { GoMute } from 'react-icons/go';

function Carousel() {
    const [mutedVideo, setMutedVideo] = useState(true);
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
            <div className='absolute top-[80%] right-[15%] bg-white p-4 rounded-full hover:bg-opacity-75'>
                <GoMute className='text-4xl'/>
            </div>
        </div>
    );
}

export default Carousel;

function MuteVid(props) {
    const { src, id, muted } = props;
    let mutedParam = '';
    if (muted) {
        mutedParam = 'muted';
    }
    return (
        <div className='mx-auto brightness-75' dangerouslySetInnerHTML={{
            __html: `
          <video
            ${mutedParam}
            autoPlay loop     
            playsinline
            width='80%'
            src="${src}" 
            id="${id}"
          />`
        }}
        />);
};
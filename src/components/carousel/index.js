import './carousel.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { GoMute, GoUnmute } from 'react-icons/go';

function Carousel() {
    const [mutedVid, setMutedVid] = useState(true);

    return (
        <div className='max-w-full bg-gray-900'>
            <Vid src="../assets/image/homepage/iphonecarouselvid.mp4"
                   id="myVideo1"
                   muted={mutedVid}
            />
            <div className='floatin'>
                <h2><strong>iPhone 14 Pro</strong></h2>
                <p>ที่สุดของ iPhone</p>
                <Link to="/iphone14pro" id='buy'>ซื้อ &#10095;</Link>
                <Link to="/iphone" className="mr-4" id='seemore'>ดูเพิ่มเติม &#10095;</Link>
            </div>
            <div className='absolute top-[80%] right-[15%] border-2 bg-white bg-opacity-10 p-4 rounded-full hover:bg-opacity-30'>
                {mutedVid ? <GoMute className='text-4xl fill-white' onClick={() => setMutedVid(false)} /> : <GoUnmute className='text-4xl fill-white' onClick={() => setMutedVid(true)} />}
            </div>
        </div>
    );
}

export default Carousel;

function Vid(props) {
    const { src, id, muted, autoplay, loop } = props;
    let mutedParam = '';
    if (muted) {
        mutedParam = 'muted';
    }
    return (
        <div dangerouslySetInnerHTML={{
            __html: `
      <video
        ${mutedParam}
        autoplay
        loop
        playsinline
        src="${src}"   
        id="${id}"
        class="mx-auto brightness-75 w-[80%]"
      />`
        }}
        />
    );
}
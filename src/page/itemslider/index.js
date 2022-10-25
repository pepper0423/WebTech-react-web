import './itemslider.css';

function Itemslider() {
    return (
        <div className='itemsliderContainer'>
            <div className="carousel-container">
                <div className="inner-carousel">
                    <div className="track">
                        <div className="card-container">
                            <img src='https://cdn.pixabay.com/photo/2018/08/21/23/29/fog-3622519_960_720.jpg' height='100%' className="card" />
                        </div>
                        <div className="card-container">
                            <img src='https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_960_720.jpg' height='100%' className="card" />
                        </div>
                        <div className="card-container">
                            <img src='https://cdn.pixabay.com/photo/2016/08/11/23/48/italy-1587287_960_720.jpg' className="card" />
                        </div>
                        <div className="card-container">
                            <img src='https://cdn.pixabay.com/photo/2014/08/29/03/02/horse-430441_960_720.jpg' className="card" />
                        </div>
                        <div className="card-container">
                            <img src='https://cdn.pixabay.com/photo/2014/12/08/17/52/mare-561221_960_720.jpg' className="card" />
                        </div>
                        <div className="card-container">
                            <img src='https://cdn.pixabay.com/photo/2017/02/08/17/24/butterfly-2049567_960_720.jpg' className="card" />
                        </div>
                        <div className="card-container">
                            <img src='https://cdn.pixabay.com/photo/2017/11/30/22/00/pumpkin-2989569_960_720.jpg' className="card" />
                        </div>
                        <div className="card-container">
                            <img src='https://cdn.pixabay.com/photo/2016/07/24/22/25/woman-1539416_960_720.jpg' className="card" />
                        </div>
                        <div className="card-container">
                            <img src='https://cdn.pixabay.com/photo/2017/11/15/09/28/music-player-2951399_960_720.jpg' className="card" />
                        </div>
                        <div className="card-container">
                            <img src='https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_960_720.jpg' className="card" />
                        </div>
                        <div className="card-container">
                            <img src='https://cdn.pixabay.com/photo/2016/03/09/09/30/woman-1245817_960_720.jpg' className="card" />
                        </div>
                        <div className="card-container">
                            <img src='https://cdn.pixabay.com/photo/2016/11/08/05/31/adorable-1807544_960_720.jpg' className="card" />
                        </div>
                    </div>
                    <div className="nav">
                        <button className="prev"><ChevronLeft /></button>
                        <button className="next"><ChevronRight /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Itemslider;

function ChevronRight() {
    return <svg className='chevron' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>;
}

function ChevronLeft() {
    return <svg className='chevron' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>;
}
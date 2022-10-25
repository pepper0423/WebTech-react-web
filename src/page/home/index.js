import Carousel from '../carousel';
import Itemslider from '../itemslider';
import './home.css';

function Home() {
    return (
        <div>
            <section>
                <Carousel/>
                <h3 className='topic'>แนะนำ</h3>
                <Itemslider/>
                <h3 className='topic'>Mac</h3>
                <Itemslider/>
                <h3 className='topic'>iPhone</h3>
                <Itemslider/>
                <h3 className='topic'>iPad</h3>
                <Itemslider/>
                <h3 className='topic'>Accessories</h3>
                <Itemslider/>
            </section>
        </div>
    );
}

export default Home;
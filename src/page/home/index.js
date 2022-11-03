import Carousel from '../carousel';
import Itemslider from '../itemslider';
import './home.css';

function Home() {
    return (
        <div>
            <section>
                <Carousel />
                <div className='container mx-auto py-32'>
                    <h3>iPhone</h3>
                    <h3>iPad</h3>
                    <h3>Accessories</h3>
                </div>
            </section>
        </div>
    );
}

export default Home;
import './carousel.css';

function Carousel() {
    return (
        <div className='max-w-full'>
            <div>
                <iframe width='100%' src="https://www.youtube.com/embed/4wKU9oIXnTI?version=3&autoplay=1&loop=1&controls=0&disablekb=1&playlist=4wKU9oIXnTI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
            <div className='floatin'>
                <h3>Title</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <a href='#' id='buy'>ซื้อ &#10095;</a>
                <a href='#' id='seemore'>ข้อมูลเพิ่มเติม &#10095;</a>
            </div>
        </div>
    );
}

export default Carousel;
import './itemslider.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Itemslider = (props) => {

    const { title, rowID, toItem, itemArr } = props

    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft - 500;
    };
    const slideRight = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    return (
        <div>
            <div className='group'>
                <h3 className='text-3xl cursor-default p-4'>{title} &nbsp;
                    <Link to={toItem} className='text-xl text-[#2997FF] cursor-pointer absolute transition-all duration-300 translate-x-[-90px] group-hover:translate-x-0 translate-y-1 group-hover:opacity-100 opacity-0 ease-in-out'>ดูเพิ่มเติม</Link><span className='text-xl text-[#2997FF] cursor-pointer translate-y-1 group-hover:translate-x-[90px] transition-all duration-300 absolute ease-in-out'>&#10095;</span>
                </h3>
            </div>
            <div className='relative flex items-center group'>
                <MdChevronLeft
                    onClick={slideLeft}
                    className='bg-black left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                    size={60} color={'white'}
                />
                <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {itemArr.map((item) => (
                        <CardList item={ item }/>
                    ))}
                </div>
                <MdChevronRight
                    onClick={slideRight}
                    className='bg-black right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                    size={60} color={'white'}
                />
            </div>
        </div>
    );
}

const CardList = (props) => {
    const { item } = props;

    return (
        <div key={item.id} className='w-[240px] inline-block cursor-pointer relative p-2'>
            <div className='border-2 rounded-xl h-[240px]'>
                {item.itemName}
            </div>
            <div className='absolute top-2 left-2 w-[225px] h-[240px] hover:bg-black/80 opacity-0 hover:opacity-100 text-white rounded-xl'>
                <p className='white-space-normal text-big md:text-small font-bold flex justify-center items-center h-full text-center'>
                    {item?.itemName}
                </p>
                <Link to={item.linkto}>
                    <button className='top-36 left-20 w-12 h-8 text-gray-300 absolute border-2 border-[rgba(0,0,0,.25)] hover:border-apple-blue transition-all duration-300 ease-in-out rounded-full hover:text-apple-blue'>ซื้อ</button>
                </Link>
            </div>
        </div>
    );
};

export default Itemslider;
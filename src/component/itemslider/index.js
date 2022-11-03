import './itemslider.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

function Itemslider({ title, rowID }) {
    const test = [
        { id: 1, itemName: 'item1' },
        { id: 2, itemName: 'item2' },
        { id: 3, itemName: 'item3' },
        { id: 4, itemName: 'item4' },
        { id: 5, itemName: 'item5' },
        { id: 6, itemName: 'item6' }
    ];

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
            <h3 className='text-3xl cursor-default p-4'>{title} <span className='text-xl text-sky-500 cursor-pointer'>ดูเพิ่มเติม &#10095;</span></h3>
            <div className='relative flex items-center group'>
                <MdChevronLeft
                    onClick={slideLeft}
                    className='bg-black left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                    size={60} color={'white'}
                />
                <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {test.map((item) => (
                        <div className='w-[240px] inline-block cursor-pointer relative p-2'>
                            <div className='border-2 text-center p-24'>{item.itemName}</div>
                        </div>
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

export default Itemslider;
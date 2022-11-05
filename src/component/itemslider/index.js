import './itemslider.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Itemslider({ title, rowID, toItem }) {
    var itemMap;

    const test0 = [
        { id: 1, itemName: 'item1' },
        { id: 2, itemName: 'item2' },
        { id: 3, itemName: 'item3' },
        { id: 4, itemName: 'item4' },
    ];

    const test1 = [
        { id: 1, itemName: 'item1' },
        { id: 2, itemName: 'item2' },
        { id: 3, itemName: 'item3' },
        { id: 4, itemName: 'item4' },
        { id: 5, itemName: 'item5' },
        { id: 6, itemName: 'item6' }
    ];

    const test2 = [
        { id: 1, itemName: 'item1' },
        { id: 2, itemName: 'item2' },
        { id: 3, itemName: 'item3' },
        { id: 4, itemName: 'item4' },
        { id: 5, itemName: 'item5' }
    ];

    const test3 = [
        { id: 1, itemName: 'item1' },
        { id: 2, itemName: 'item2' },
        { id: 3, itemName: 'item3' },
        { id: 4, itemName: 'item4' },
        { id: 5, itemName: 'item5' },
        { id: 6, itemName: 'item6' },
        { id: 7, itemName: 'item7' }
    ];

    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft - 500;
    };
    const slideRight = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    if (title == 'iPhone') {
        itemMap = test1;
    } else if (title == 'iPad') {
        itemMap = test2;
    } else if (title == 'อุปกรณ์เสริม') {
        itemMap = test3;
    } else if (title == 'แนะนำ') {
        itemMap = test0;
    }


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
                    {itemMap.map((item) => (
                        <div className='w-[240px] inline-block cursor-pointer relative p-2'>
                            <div className='border-2 text-center p-24 rounded-xl'>
                                {item.itemName}
                            </div>
                            <button className='border-2 border-[rgba(0,0,0,.25)] hover:border-apple-blue w-full transition-all duration-300 ease-in-out rounded-full hover:text-apple-blue'>ซื้อ</button>
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
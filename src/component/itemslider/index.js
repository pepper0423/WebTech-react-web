import './itemslider.css';
/* import {} from 'react-icons/md'; */

function Itemslider({ title }) {
    const test = [
        { id: 1, itemName: 'item1' },
        { id: 2, itemName: 'item2' },
        { id: 3, itemName: 'item3' },
        { id: 4, itemName: 'item4' },
        { id: 5, itemName: 'item5' },
        { id: 6, itemName: 'item6' }
    ];

    return (
        <div>
            <h3 className='text-3xl cursor-default p-4'>{title} <span className='text-xl text-sky-500 cursor-pointer'>ดูเพิ่มเติม &#10095;</span></h3>
            <div className='relative flex items-center'>
                <div id='slider' className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {test.map((item) => (
                        <div className='w-[240px] inline-block cursor-pointer relative p-2'>
                            <div className='border-2 text-center p-24'>{ item.itemName }</div>
                        </div>
                    ))}
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
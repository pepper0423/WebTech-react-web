import { useState } from 'react';
import Popover from '@mui/material/Popover';
import { BsBag, BsBookmark, BsBoxSeam } from "react-icons/bs";
import { useStore } from '../../hooks/store.js';
import AppleButton from '../AppleButton';
import { Link } from 'react-router-dom';
import './nav.css';

const Bagpop = () => {
    const store = useStore();
    const { bag } = store;

    const [anchorEle, setAnchorEle] = useState(null);

    const handleClick = (event) => {
        setAnchorEle(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEle(null);
    };

    const open = Boolean(anchorEle);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <button className='block' onClick={handleClick}>
                <BsBag className='h-full' />
            </button>
            <Popover id={id} open={open} anchorEl={anchorEle} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} transformOrigin={{ vertical: 'top', horizontal: 'center' }} elevation={0}>
                <div className='bag-popover-body'>
                    <BagItems bag={bag} />
                    <Link to='/bag'><AppleButton className='w-full'>ชำระเงิน</AppleButton></Link>
                    <div className='my-3 divide-y divide-gray-300'>
                        <Link to='/bag'>
                            <div className='flex py-2 text-md text-apple-white hover:underline'>
                                <BsBag className='fill-apple-white' />
                                <span className='ml-2 font-semibold'>ถุง {!!bag ? `(${bag.length})` : '(0)'}</span>
                            </div>
                        </Link>
                        <div className='flex py-2 text-md text-apple-white hover:underline cursor-pointer'>
                            <BsBookmark className='fill-apple-white' />
                            <span className='ml-2 font-semibold '>รายการโปรด</span>
                        </div>
                        <div className='flex py-2 text-md text-apple-white hover:underline cursor-pointer'>
                            <BsBoxSeam className='fill-apple-white' />
                            <span className='ml-2 font-semibold '>คำสั่งซื้อ</span>
                        </div>
                    </div>
                </div>
            </Popover>
        </div >
    );
};

const BagItems = (props) => {
    const { bag } = props;
    if (bag.length > 0) {
        let minBag = bag;
        if (bag.length > 3) {
            minBag = minBag.slice(0, 3);
        }
        return (
            <div className='divide-y divide-gray-300'>
                {minBag.map((item) => (
                    <div key={item.id} className="py-5 grid grid-cols-4 gap-2">
                        <div>
                            <img src={item.image} alt="" />
                        </div>
                        <div className='col-span-3 flex items-center'>
                            <span className='text-small'>{item.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        );
    } else {
        return (
            <div className='text-center py-8 text-small text-apple-white'>
                <span>ถุงของคุณว่างเปล่า</span>
            </div>
        );
    }
};

export default Bagpop;
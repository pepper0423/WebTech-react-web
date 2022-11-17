import { NavLink } from 'react-router-dom';
import { FaAppleAlt, FaSearch } from 'react-icons/fa';
import './nav.css'
import Bagpop from './bagpop';

const Nav = (props) => {

    return (
        <nav className={`relative z-10 ${!!props.disableSticky ? 'pb-12' : ''}`}>
            <div className={`w-screen backdrop-blur-lg ${!!props.disableSticky ? 'fixed' : 'sticky top-0'}`}>
                <nav className='navbar'>
                    <div className='gap-x-10 flex p-4'>
                        <NavLink to='/' className='text-big cursor-pointer text-[#fdfbfb] transition-all duration-300' end><FaAppleAlt className='h-full' /></NavLink>
                        <NavLink to='/' className='text-small cursor-pointer text-apple-white transition-all duration-300'>ร้าน</NavLink>
                        <NavLink to='/iphone' className='text-small cursor-pointer text-apple-white transition-all duration-300'>iPhone</NavLink>
                        <NavLink to='/ipad' className='text-small cursor-pointer text-apple-white transition-all duration-300'>iPad</NavLink>
                        <NavLink to='/accessories' className='text-small cursor-pointer text-apple-white transition-all duration-300'>อุปกรณ์เสริม</NavLink>
                        <NavLink to='/help' className='text-small cursor-pointer text-apple-white transition-all duration-300'>บริการช่วยเหลือ</NavLink>
                        <div className='text-big cursor-pointer text-[#FBFBFD] transition-all duration-300 pl-[65%]'><FaSearch/></div>
                        <div className='text-big cursor-pointer text-[#FBFBFD] transition-all duration-300'><Bagpop /></div>
                    </div>
                </nav>
            </div>
        </nav>
    );
};

export default Nav;
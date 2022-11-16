import { NavLink } from 'react-router-dom';
import { FaAppleAlt } from 'react-icons/fa';
import './nav.css'
import Bagpop from './bagpop';

const Nav =(props)=> {
    return (
        <nav className={`relative z-10 ${!!props.disableSticky ? 'pb-12' : ''}`}>
            <div className={`w-screen backdrop-blur-lg ${!!props.disableSticky ? 'fixed' : 'sticky top-0'}`}>
                <nav className='navbar'>
                    <ul className='gap-x-10'>
                        <li><NavLink to='/' className='text-big cursor-pointer text-[#fdfbfb] transition-all duration-300' end><FaAppleAlt className='h-full' /></NavLink></li>
                        <li><NavLink to='/' className='text-small cursor-pointer text-apple-white transition-all duration-300'>ร้าน</NavLink></li>
                        <li><NavLink to='/iphone' className='text-small cursor-pointer text-apple-white transition-all duration-300'>iPhone</NavLink></li>
                        <li><NavLink to='/ipad' className='text-small cursor-pointer text-apple-white transition-all duration-300'>iPad</NavLink></li>
                        <li><NavLink to='/accessories' className='text-small cursor-pointer text-apple-white transition-all duration-300'>อุปกรณ์เสริม</NavLink></li>
                        <li><NavLink to='/help' className='text-small cursor-pointer text-apple-white transition-all duration-300'>บริการช่วยเหลือ</NavLink></li>
                        <li className='text-big cursor-pointer text-[#FBFBFD] transition-all duration-300'><Bagpop /></li>
                    </ul>
                </nav>
            </div>
        </nav>
    );
};

export default Nav;
import { NavLink } from 'react-router-dom';
import { BsBag } from "react-icons/bs";
import { FaAppleAlt } from 'react-icons/fa'
import './nav.css'

function Nav() {
    return (
        <div className='relative pb-12 z-40 max-w-full'>
            <div className='fixed top-0 w-full backdrop-blur-lg'>
                <nav className='navbar'>
                    <ul className='gap-x-10'>
                        <li><NavLink to='/' className='text-big cursor-pointer text-[#FBFBFD] transition-all duration-300' end><FaAppleAlt className='h-full' /></NavLink></li>
                        <li><NavLink to='store' className='text-small cursor-pointer text-apple-white transition-all duration-300'>ร้าน</NavLink></li>
                        <li><NavLink to='iphone' className='text-small cursor-pointer text-apple-white transition-all duration-300'>iPhone</NavLink></li>
                        <li><NavLink to='ipad' className='text-small cursor-pointer text-apple-white transition-all duration-300'>iPad</NavLink></li>
                        <li><NavLink to='accessories' className='text-small cursor-pointer text-apple-white transition-all duration-300'>อุปกรณ์เสริม</NavLink></li>
                        <li><NavLink to='/' className='text-small cursor-pointer text-apple-white transition-all duration-300'>บริการช่วยเหลือ</NavLink></li>
                        <li><NavLink to='/' className='text-big cursor-pointer text-[#FBFBFD] transition-all duration-300'><BsBag className='h-full'/></NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Nav;
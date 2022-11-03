import { NavLink } from 'react-router-dom';
import './nav.css'

function Nav() {
    return (
        <div className='relative pb-12 z-40 max-w-full'>
            <div className='fixed top-0 w-full backdrop-blur-xl'>
                <nav className='navbar'>
                    <ul className='gap-20'>
                        <li><NavLink to='/' className='text-sm'><Logo /></NavLink></li>
                        <li><NavLink to='/' className='text-sm'>ร้าน</NavLink></li>
                        <li><NavLink to='/' className='text-sm'>iPhone</NavLink></li>
                        <li><NavLink to='/' className='text-sm'>iPad</NavLink></li>
                        <li><NavLink to='/' className='text-sm'>อุปกรณ์เสริม</NavLink></li>
                        <li><NavLink to='/' className='text-sm'>บริการช่วยเหลือ</NavLink></li>
                        <li><NavLink to='/' className='text-sm'><Basket /></NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Nav;

function Logo() {
    return <svg className='navbar-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 112c-8.8 0-16-7.2-16-16V80c0-44.2 35.8-80 80-80h16c8.8 0 16 7.2 16 16V32c0 44.2-35.8 80-80 80H224zM0 288c0-76.3 35.7-160 112-160c27.3 0 59.7 10.3 82.7 19.3c18.8 7.3 39.9 7.3 58.7 0c22.9-8.9 55.4-19.3 82.7-19.3c76.3 0 112 83.7 112 160c0 128-80 224-160 224c-16.5 0-38.1-6.6-51.5-11.3c-8.1-2.8-16.9-2.8-25 0c-13.4 4.7-35 11.3-51.5 11.3C80 512 0 416 0 288z" /></svg>;
}

function Basket() {
    return <svg className='navbar-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 96c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24zm200-24c0 13.3-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24z" /></svg>;
}
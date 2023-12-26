import Logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <div className='flex justify-around p-5 items-center web-nav'>
                <img className='w-48' src={Logo} alt="" />
                <ul className='flex gap-x-5 text-[#2b2b2b] font-ligth'>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/about">ABOUT</Link>
                    </li>
                    <li>
                        <Link to="/contact">CONTACT</Link>
                    </li>
                </ul>
                <div className='flex gap-x-5 text-[#A9A9A9] font-thin text-lg items-center'>
                    <input type="text" placeholder='filter' className='border rounded-full px-2 py-1 border-[#D3D3D3]' />
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <a href="">
                        <i className="fa-regular fa-heart relative">
                            <span className='bg-[#f86d72] rounded-full text-xs text-center absolute bottom-2 left-3 w-5 h-5 flex justify-center items-center text-white'>0</span>
                        </i>
                    </a>
                    <a href="">
                        <i className="fa-solid fa-basket-shopping relative">
                            <span className='bg-[#f86d72] rounded-full text-xs text-center absolute bottom-2 left-3 w-5 h-5 flex justify-center items-center text-white'>0</span>
                        </i>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Navbar
import Logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { setFilter } from '../redux/slice/bookSlice';
import { useDispatch } from 'react-redux';
const Navbar = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const dispatch = useDispatch();
    const [filter, setFilterValue] = useState('');
    const handleFilterChange = (e) => {
        const value = e.target.value;
        setFilterValue(value);
        dispatch(setFilter(value));
    };
    const handleMouseEnter = () => {
        setPopupVisible(true);
    };

    const handleMouseLeave = () => {
        setPopupVisible(false);
    };

    return (
        <>
            <div className='flex justify-around p-5 items-center web-nav'>
                <img className='w-48' src={Logo} alt='' />
                <ul className='flex gap-x-5 text-[#2b2b2b] font-light'>
                    <li>
                        <Link to='/'>HOME</Link>
                    </li>
                    <li>
                        <Link to='/about'>ABOUT</Link>
                    </li>
                    <li>
                        <Link to='/contact'>CONTACT</Link>
                    </li>
                    <li>
                        <Link to='/chart'>SEPET</Link>
                    </li>
                </ul>
                <div
                    className='flex gap-x-5 text-[#A9A9A9] font-thin text-lg items-center relative'
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <input
                        type='text'
                        placeholder='filter'
                        className='border rounded-full px-2 py-1 border-[#D3D3D3]'
                        value={filter}
                        onChange={handleFilterChange}
                    />
                    <i className='fa fa-search' aria-hidden='true'></i>
                    <a href='' className='relative group'>
                        <i className='fa-solid fa-basket-shopping'>
                            <span className={`bg-[#f86d72] rounded-full text-xs text-center absolute bottom-2 left-3 w-5 h-5 flex justify-center items-center text-white group-hover:bg-[#e25155]`}>
                                0
                            </span>
                            {isPopupVisible && (
                                <div className='absolute bg-gray-200 p-2 rounded-md'>
                                    Popup Content
                                </div>
                            )}
                        </i>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;

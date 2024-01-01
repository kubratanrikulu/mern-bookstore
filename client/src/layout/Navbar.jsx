import { useState, useEffect, useRef } from "react";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { setFilter } from "../redux/slice/bookSlice";
import { useDispatch, useSelector } from "react-redux";
import CardPopup from "../components/CardPopup";

const Navbar = () => {
    const totalCount = useSelector((state) => state.cart.totalCount);
    const [filter, setFilterValue] = useState("");
    const dispatch = useDispatch();
    const [isPopupVisible, setPopupVisible] = useState(false);
    console.log(useSelector((state) => state.cart))
    const handleFilterChange = (e) => {
        const value = e.target.value;
        setFilterValue(value);
        dispatch(setFilter(value));
    };

    const handleToggleClick = (e) => {
        e.preventDefault();
        setPopupVisible(!isPopupVisible);
    };

    const popupRef = useRef(null);
    console.log(totalCount);
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (popupRef.current && !popupRef.current.contains(e.target)) {
                setPopupVisible(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    return (
        <>
            <div className="container mx-auto flex justify-between p-5 items-center font-raleway">
                <Link to="/">
                    <img className="w-48" src={Logo} alt="" />
                </Link>
                <div className="lg:hidden">
                    <button
                        className="text-gray-500 hover:text-white focus:outline-none"
                        onClick={handleToggleClick}
                    >
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>
                <ul className="hidden lg:flex gap-x-5 text-[#2b2b2b] font-light">
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/about">ABOUT</Link>
                    </li>
                    <li>
                        <Link to="/contact">CONTACT</Link>
                    </li>
                    {/* <li>{totalCount}</li> */}
                </ul>
                <div className="hidden lg:flex gap-x-5 text-[#A9A9A9] font-thin text-lg items-center relative">
                    <input
                        type="text"
                        placeholder="search"
                        className="border rounded-full px-2 py-1 border-[#D3D3D3]"
                        value={filter}
                        onChange={handleFilterChange}
                    />
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <a href="" className="relative group" onClick={handleToggleClick}>
                        <i className="fa-solid fa-basket-shopping">
                            <span
                                className={`bg-[#f86d72] rounded-full text-xs text-center absolute bottom-2 left-3 w-5 h-5 flex justify-center items-center text-white group-hover:bg-[#e25155]`}
                            >
                                {totalCount}
                            </span>
                        </i>
                    </a>

                    {isPopupVisible && (
                        <div
                            className="absolute top-0 right-0 mt-16 mr-4 z-50"
                            ref={popupRef}
                        >
                            <CardPopup />
                        </div>
                    )}
                </div>
            </div>
            {isPopupVisible && (
                <div className="lg:hidden p-4 bg-white ">
                    <ul className="flex flex-col gap-4">
                        <li>
                            <Link
                                to="/"
                                className="text-footerText"
                                onClick={handleToggleClick}
                            >
                                HOME
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="text-footerText"
                                onClick={handleToggleClick}
                            >
                                ABOUT
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="text-footerText"
                                onClick={handleToggleClick}
                            >
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default Navbar;
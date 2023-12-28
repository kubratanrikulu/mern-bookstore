const Footer = () => {
    return (
        <>
            <footer>
                <div className="container mx-auto grid grid-cols-3 py-10">
                    <div className="text-[#666] flex flex-col gap-y-8 items-center justify-star">
                        <h1 className="border-b-2 border-[#f86d72]">
                            CONTACT US
                        </h1>
                        <ul className="flex flex-col gap-y-3">
                            <li><a href=""><i className="fa-solid fa-location-dot mr-1"></i>1998 Wall Street 707, Washington DC, USA</a></li>
                            <li><a href=""><i className="fa-regular fa-envelope mr-1"></i>bookmart@domain.com</a></li>
                            <li><a href=""><i className="fa-solid fa-mobile-screen-button mr-1"></i>( 84) 00123 456 789</a></li>
                        </ul>
                    </div>
                    <div className="text-[#666] flex flex-col gap-y-8 items-center justify-star">
                        <h1 className="border-b-2 border-[#f86d72]">
                            INFORMATION
                        </h1>
                        <ul className="flex flex-col gap-y-3">
                            <li><a href="">Contact Us</a></li>
                            <li><a href="">Site Map</a></li>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">About Us</a></li>
                        </ul>
                    </div>
                    <div className="text-[#666] flex flex-col gap-y-8 items-center justify-star">
                        <h1 className="border-b-2 border-[#f86d72]">
                            MY ACCOUNT
                        </h1>
                        <ul className="flex flex-col gap-y-3">
                            <li><a href="">Sign In</a></li>
                            <li><a href="">View Card</a></li>
                            <li><a href="">Help</a></li>
                        </ul>
                    </div>

                </div>
                <div className="flex flex-col items-center justify-center gap-y-1 py-5">
                    <div>
                        <input className="border-b-2 border-[#f86d72] " type="text" placeholder="Enter you mail address" /><i className="fa-regular fa-paper-plane text-[#f86d72]"></i>
                    </div>
                    <p className="text-[#919191] text-sm font-extralight font-serif">*Be informed about the latest books.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
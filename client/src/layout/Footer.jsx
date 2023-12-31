const Footer = () => {
    return (
        <>
            <footer>
                <div className="grid grid-cols-1 sm:grid-cols-3 py-10">
                    <div className="text-footerText flex flex-col gap-y-8 lg:items-center">
                        <h1 className="border-b-2 border-primary font-font-ebGaramond ">
                            CONTACT US
                        </h1>
                        <ul className="flex flex-col gap-y-3 font-raleway">
                            <li><a href=""><i className="fa-solid fa-location-dot mr-1"></i>1998 Wall Street 707, Washington DC, USA</a></li>
                            <li><a href=""><i className="fa-regular fa-envelope mr-1"></i>bookmart@domain.com</a></li>
                            <li><a href=""><i className="fa-solid fa-mobile-screen-button mr-1"></i>( 84) 00123 456 789</a></li>
                        </ul>
                    </div>
                    <div className="text-footerText flex flex-col gap-y-8 lg:items-center">
                        <h1 className="border-b-2 border-primary font-ebGaramond">
                            INFORMATION
                        </h1>
                        <ul className="flex flex-col gap-y-3 font-raleway">
                            <li><a href="">Contact Us</a></li>
                            <li><a href="">Site Map</a></li>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">About Us</a></li>
                        </ul>
                    </div>
                    <div className="text-footerText flex flex-col gap-y-8 lg:items-center">
                        <h1 className="border-b-2 border-primary font-ebGaramond">
                            MY ACCOUNT
                        </h1>
                        <ul className="flex flex-col gap-y-3 font-raleway">
                            <li><a href="">Sign In</a></li>
                            <li><a href="">View Card</a></li>
                            <li><a href="">Help</a></li>
                        </ul>
                    </div>

                </div>
                <div className="flex flex-col items-center justify-center gap-y-1 py-5">
                    <div>
                        <input className="border-b-2 border-primary " type="text" placeholder="Enter your mail address" /><i className="fa-regular fa-paper-plane text-[#f86d72]"></i>
                    </div>
                    <p className="text-[#919191] text-sm font-extralight font-serif">*Be informed about the latest books.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;

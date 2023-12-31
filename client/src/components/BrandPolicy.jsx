import BrandPolicy1 from '../assets/images/policy-1.png'
import BrandPolicy2 from '../assets/images/policy-2.png'
import BrandPolicy3 from '../assets/images/policy-3.png'
const BrandPolicy = () => {
    return (
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-x-5 py-16 px-3">
            <div className="flex items-center gap-x-5 border-r border-[#D0D0D0] justify-center">
                <img src={BrandPolicy1} alt="" />
                <div className='flex flex-col gap-y-2'>
                    <h1 className='font-bold text-xl font-ebGaramond'>Free Shipping</h1>
                    <p className='font-light text-footerText font-raleway'>Select between a wide range of textbooks and media.</p>
                </div>
            </div>
            <div className="flex items-center gap-x-5 border-r border-[#D0D0D0] justify-center">
                <img src={BrandPolicy2} alt="" />
                <div className='flex flex-col gap-y-2'>
                    <h1 className='font-bold text-xl font-ebGaramond'>Fast Delivery</h1>
                    <p className='font-light text-footerText font-raleway'>Enjoy free shipping and our fast delivery service.</p>
                </div>
            </div>
            <div className="flex items-center gap-x-5 justify-center">
                <img src={BrandPolicy3} alt="" />
                <div className='flex flex-col gap-y-2'>
                    <h1 className='font-bold text-xl font-ebGaramond'>Discounted Free</h1>
                    <p className='font-light text-footerText font-raleway'>Get a nice discount on our top-rated product every Sunday.</p>
                </div>
            </div>
        </div>
    )
}

export default BrandPolicy;

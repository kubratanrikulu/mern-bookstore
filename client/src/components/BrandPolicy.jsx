import BrandPolicy1 from '../assets/images/policy-1.png'
import BrandPolicy2 from '../assets/images/policy-2.png'
import BrandPolicy3 from '../assets/images/policy-3.png'
const BrandPolicy = () => {
    return (
        <div className="grid grid-cols-3 gap-x-5 brand-policy py-16">
            <div className="flex items-center gap-x-5 border-r border-[#D0D0D0] justify-center">
                <img src={BrandPolicy1} alt="" />
                <div className='flex flex-col gap-y-2'>
                    <h1 className='font-bold text-xl'>Free Shipping</h1>
                    <p className='font-light text-[#666]'>Select bettwen awide range of texbook and media.</p>
                </div>
            </div>
            <div className="flex items-center gap-x-5 border-r border-[#D0D0D0] justify-center">
                <img src={BrandPolicy2} alt="" />
                <div className='flex flex-col gap-y-2'>
                    <h1 className='font-bold text-xl'>Fast Delivery</h1>
                    <p className='font-light text-[#666]'>Enjoy free shipping and our fast delivery service.</p>
                </div>
            </div>
            <div className="flex items-center gap-x-5 justify-center">
                <img src={BrandPolicy3} alt="" />
                <div className='flex flex-col gap-y-2'>
                    <h1 className='font-bold text-xl'>
                        Discounted Free</h1>
                    <p className='font-light text-[#666]'>Get nice discount on our top rated product every sunday.</p>
                </div>
            </div>
        </div>
    )
}

export default BrandPolicy
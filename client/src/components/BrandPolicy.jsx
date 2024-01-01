
const BrandPolicy = () => {
    const Policies = [
        {
            id: 1,
            title: "Free Shipping",
            description: "Select between a wide range of textbooks and media.",
            img: "/policy-1.png",
            alt: "Free Shipping"
        },
        {
            id: 2,
            title: "Fast Delivery",
            description: "Enjoy free shipping and our fast delivery service.",
            img: "/policy-2.png",
            alt: "Fast Delivery"
        },
        {
            id: 1,
            title: "Discounted Free",
            description: "Get a nice discount on our top-rated product every Sunday.",
            img: "/policy-3.png",
            alt: "Discounted Free"
        }
    ]
    return (
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-x-5 py-16 px-3">
            {Policies.map((item) => (
                <div key={item.id} className="flex items-center gap-x-5 border-r border-[#D0D0D0] justify-center">
                    <img src={item.img} alt="" />
                    <div className='flex flex-col gap-y-2'>
                        <h1 className='font-bold text-xl font-ebGaramond'>{item.title}</h1>
                        <p className='font-light text-footerText font-raleway'>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BrandPolicy;

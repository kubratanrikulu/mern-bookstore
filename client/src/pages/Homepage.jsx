import HomeageSlider from '../components/Carousel'
import BrandPolicy from '../components/BrandPolicy'
import PopularBook from '../components/PopularBook'

const Homepage = () => {
    return (
        <>
            <HomeageSlider />
            <PopularBook />
            <img className='w-full' src={'/banner.jpeg'} alt="" />
            <BrandPolicy />
        </>

    )
}
Homepage.displayName = "Homepage"
export default Homepage
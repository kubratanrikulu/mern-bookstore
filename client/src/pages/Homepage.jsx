import bookSlider from '../assets/images/bookslider.jpeg'
import BrandPolicy from '../components/BrandPolicy'
import PopularBook from '../components/PopularBook'

const Homepage = () => {
    return (
        <>
            <div className=''>
                <img src={bookSlider} alt="" className=' book-slider' />
                <BrandPolicy />
                <PopularBook />
            </div>
        </>

    )
}

export default Homepage
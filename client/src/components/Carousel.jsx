
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            <div>
                <img src={"./slider1.webp"} alt="" />
            </div>
            <div>
                <img src={"./slider2.webp"} alt="" />
            </div>
            <div>
                <img src={"./slider3.webp"} alt="" />
            </div>
        </Slider>
    );
};

export default Carousel;

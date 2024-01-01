import { useEffect } from 'react';
import StarRatings from 'react-star-ratings';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getBooks } from "../redux/slice/bookSlice"
import { addToCart } from '../redux/slice/cardSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookCard = () => {
    const dispatch = useDispatch();
    const { data: books, filter } = useSelector((state) => state.books);

    const showSuccessPopup = () => {
        toast('Product successfully added to the cart!', {
            position: toast.POSITION.TOP_RIGHT,
            progressBarColor: '#f86d72',
            style: {
                color: '#f86d72',
            },
        });
    };
    const filteredBooks = books.filter((item) => {
        const lowerCaseFilter = filter.toLowerCase();
        return (
            item.author.toLowerCase().includes(lowerCaseFilter) ||
            item.book.toLowerCase().includes(lowerCaseFilter)
        );
    });
    const handleAddToCart = (id) => {
        const selectedBook = books.find((book) => book._id === id);
        dispatch(addToCart({ book: selectedBook }));
        showSuccessPopup()
    };

    useEffect(() => {
        dispatch(getBooks());
    }, [dispatch]);
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 container mx-auto">
                {filteredBooks.map((book) => (
                    <NavLink to={`/book/${book._id}`} key={book._id} className="py-5 justify-center h-full ">
                        <div className="flex justify-center h-3/5">
                            <img src={book.posterPath} alt="" className="h-full w-3/5" />
                        </div>
                        <div className="h-2/5 flex flex-col justify-center items-center text-center gap-y-1">
                            <StarRatings
                                rating={book.score}
                                starRatedColor="orange"
                                numberOfStars={5}
                                starDimension="20px"
                                starSpacing="2px"
                            />
                            <p className="text-pColor font-light text-md font-raleway">{book.author}</p>
                            <h3 className="text-h1Color">{book.book}</h3>
                            <p className="text-primary font-raleway">{book.price}$</p>

                            <button type="button" className=" bg-primary px-5 py-2 text-white flex items-center gap-x-2 w-max justify-center" onClick={(e) => {
                                e.preventDefault();
                                handleAddToCart(book._id);
                            }}>
                                <i className="fa-solid fa-basket-shopping"></i>Add to Chart
                            </button>
                        </div>
                    </NavLink>
                ))}
            </div>
            <ToastContainer />
        </>
    )
}

export default BookCard;

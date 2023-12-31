import { useEffect } from 'react';
import StarRatings from 'react-star-ratings';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getBooks } from "../redux/slice/bookSlice"
import { addToCart } from '../redux/slice/cardSlice';

const BookCard = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { data: books, filter } = useSelector((state) => state.books);
    useEffect(() => {
        dispatch(getBooks());
    }, [dispatch]);
    const filteredBooks = books.filter((item) => {
        const lowerCaseFilter = filter.toLowerCase();
        return (
            item.author.toLowerCase().includes(lowerCaseFilter) ||
            item.book.toLowerCase().includes(lowerCaseFilter)
        );
    });
    const handleAddToCart = () => {
        const selectedBook = books.find((book) => book._id === id);
        dispatch(addToCart(selectedBook));
        console.log(selectedBook)
    };
    return (
        <>
            <div className="book-card grid grid-cols-4 gap-x-8 gap-y-10 container mx-auto ">
                {filteredBooks.map((book) => (
                    <NavLink to={`/book/${book._id}`} key={book._id} className="py-5 books-center justify-center h-full ">
                        <div className="flex justify-center h-3/5">
                            <img src={book.posterPath} alt="" className="h-full w-3/5" />
                        </div>
                        <div className="h-2/5 flex flex-col justify-center books-center text-center gap-y-1">
                            <div>
                                <StarRatings
                                    rating={book.score}
                                    starRatedColor="orange"
                                    numberOfStars={5}
                                    starDimension="20px"
                                    starSpacing="2px"
                                />
                            </div>
                            <p className="text-[#909090] font-light text-md">{book.author}</p>
                            <h1 className="text-[#2b2b2b]">{book.book}</h1>
                            <p className="text-[#f86d72]">{book.price}</p>

                            <button type="button" className=" bg-[#f86d72] px-5 py-2 text-white flex items-center gap-x-2 shadow-md" onClick={(e) => {
                                e.preventDefault();
                                handleAddToCart();
                            }}>
                                <i className="fa-solid fa-basket-shopping"></i>Add to Chart
                            </button>
                        </div>
                    </NavLink>
                ))}
            </div>
        </>
    )
}

export default BookCard
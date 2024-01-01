import { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RelatedBook from "../components/RelatedBooks";
import { getBooks } from "../redux/slice/bookSlice";
import { addToCart } from "../redux/slice/cardSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const books = useSelector((state) => state.books.data);

    const [count, setCount] = useState(1);

    const book = books.find((book) => book._id === id);

    const showSuccessPopup = () => {
        toast("Product successfully added to the cart!", {
            position: toast.POSITION.TOP_RIGHT,
            progressBarColor: "#f86d72",
            style: {
                color: "#f86d72",
            },
        });
    };

    const handleAddToCart = () => {
        if (count > 0) {
            const selectedBook = books.find((book) => book._id === id);
            dispatch(addToCart({ book: selectedBook, count }));
            showSuccessPopup();
        }
    };

    const decreaseCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const increaseCount = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        return () => {
            setCount(1);
        };
    }, [id]);

    useEffect(() => {
        dispatch(getBooks());
    }, [dispatch]);

    if (!book) {
        return <div>Book is not found</div>;
    }

    return (
        <>
            <div className="container mx-auto grid lg:grid-cols-2 py-10">
                <div className="flex justify-center">
                    {" "}
                    <img
                        src={book.posterPath}
                        alt="book_poster"
                        className="lg:h-max h-2/3"
                    />
                </div>
                <div className="flex flex-col gap-y-6 px-4">
                    <h1 className="font-serif text-2xl text-footerText font-thin">
                        {book.book}
                    </h1>
                    <div>
                        <StarRatings
                            rating={book.score}
                            starRatedColor="orange"
                            numberOfStars={5}
                            starDimension="20px"
                            starSpacing="2px"
                        />
                    </div>
                    <h1 className="text-primary font-serif text-2xl">{book.price}$</h1>
                    <p className="text-footerText font-raleway">{book.summary}</p>
                    <div className="flex gap-x-5  gap-y-5 border-b border-[#ebe9eb] py-5">
                        <div className="flex">
                            <button
                                className="border border-[#8f8f8f40] py-2 px-3"
                                onClick={decreaseCount}
                            >
                                -
                            </button>
                            <span className="border-y border-[#8f8f8f40] py-2 px-3">
                                {count}
                            </span>
                            <button
                                className="border border-[#8f8f8f40] py-2 px-3"
                                onClick={increaseCount}
                            >
                                +
                            </button>
                        </div>
                        <div>
                            <button
                                type="button"
                                className="bg-primary px-5 py-2 text-white flex items-center gap-x-2"
                                onClick={handleAddToCart}
                            >
                                <i className="fa-solid fa-basket-shopping"></i>Add to Chart
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <p className=" font-raleway">
                            <b className="text-lg">Author:</b>{" "}
                            <span className="text-footerText font-light">{book.author}</span>
                        </p>
                        <p className="font-raleway">
                            <b className="text-lg">Categories:</b>{" "}
                            <span className="text-footerText font-light">
                                {book.category}
                            </span>
                        </p>
                        <p className="font-raleway">
                            <b className="text-lg">Page count:</b>{" "}
                            <span className="text-footerText font-light">
                                {book.pageCount}
                            </span>
                        </p>
                        <p className="font-raleway">
                            <b className="text-lg">Printg House:</b>{" "}
                            <span className="text-footerText font-light">
                                {book.printingHouse}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <RelatedBook />
            <ToastContainer />
        </>
    );
};

export default BookDetails;
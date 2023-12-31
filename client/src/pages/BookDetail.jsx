import { useEffect, useState } from "react";
import StarRatings from 'react-star-ratings';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RelatedBook from "../components/RelatedBooks";
import { getBooks } from "../redux/slice/bookSlice";
import { addToCart } from "../redux/slice/cardSlice";
const BookDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const books = useSelector((state) => state.books.data);
    const [count, setCount] = useState(0);

    useEffect(() => {
        dispatch(getBooks());
    }, [dispatch]);


    const book = books.find((book) => book._id === id);

    const handleAddToCart = () => {
        const selectedBook = books.find((book) => book._id === id);
        dispatch(addToCart(selectedBook));
        console.log(selectedBook);
    };

    const decreaseCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const increaseCount = () => {
        setCount(count + 1);
    };
    if (!book) {
        return <div>Kitap bulunamadı.</div>;
    }
    return (
        <>
            <div className="container mx-auto grid grid-cols-2 py-10">
                <div className="flex justify-center" > <img src={book.posterPath} alt="" /></div>
                <div className="flex flex-col gap-y-6">
                    <h1 className="font-serif text-2xl text-[#2b2b2b] font-thin ">{book.book}</h1>
                    <div>
                        <StarRatings
                            rating={book.score}
                            starRatedColor="orange"
                            numberOfStars={5}
                            starDimension="20px"
                            starSpacing="2px"
                        />
                    </div>
                    <h1 className="text-[#f86d72] font-serif text-2xl">{book.price}</h1>
                    <p className="text-[#666] font-raleway">{book.summary}</p>
                    <div className="flex gap-x-5  gap-y-5 border-b border-[#ebe9eb] py-5">
                        <div className="flex">
                            <button
                                className="border border-[#8f8f8f40] py-2 px-3"
                                onClick={decreaseCount}
                            >
                                -
                            </button>
                            <span className="border-y border-[#8f8f8f40] py-2 px-3">{count}</span>
                            <button
                                className="border border-[#8f8f8f40] py-2 px-3"
                                onClick={increaseCount}
                            >
                                +
                            </button>
                        </div>
                        <div>
                            <button type="button" className="bg-[#f86d72] px-5 py-2 text-white flex items-center gap-x-2" onClick={handleAddToCart}>
                                <i className="fa-solid fa-basket-shopping"></i>Add to Chart
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <p className=" font-raleway">
                            <b className="text-lg">Author:</b> <span className="text-[#666] font-light">{book.author}</span>
                        </p>
                        <p className="font-raleway">
                            <b className="text-lg">Categories:</b> <span className="text-[#666] font-light">{book.category}</span>
                        </p>
                        <p className="font-raleway">
                            <b className="text-lg">Page count:</b> <span className="text-[#666] font-light">{book.pageCount}</span>
                        </p>
                        <p className="font-raleway">
                            <b className="text-lg">Printg House:</b> <span className="text-[#666] font-light">{book.printingHouse}</span>
                        </p>
                    </div>
                </div>

            </div>
            <RelatedBook />
        </>
    );
};

export default BookDetails;

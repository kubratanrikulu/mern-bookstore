import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getBooks } from "../redux/slice/bookSlice";

const RelatedBook = () => {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.books.data);

    const { id } = useParams();


    const selectedBook = books.find((book) => book._id === id);
    const highRatedBooks = books.filter((book) => book.score >= 4 && book._id !== selectedBook._id).slice(0, 6);

    useEffect(() => {
        dispatch(getBooks());
    }, [dispatch]);

    if (!selectedBook) {
        return <div>Book is not found.</div>;
    }
    return (
        <>
            <div className="container mx-auto  py-10">
                <h1 className="font-ebGaramond text-primary font-thin italic text-3xl p-8">Everyone's Talking About...</h1>
                <div className="grid lg:grid-cols-6 gap-y-4">
                    {highRatedBooks.map((highRatedBook) => (
                        <NavLink to={`/book/${highRatedBook._id}`} key={highRatedBook._id}>
                            <div key={highRatedBook._id} className="flex flex-col gap-y-1 items-center h-full">
                                <img className="h-4/5 w-3/5 object-cover" src={highRatedBook.posterPath} alt="" />
                                <h3 className="font-serif text-[#2b2b2b] text-sm">{highRatedBook.book}</h3>
                                <p className="text-primary font-serif text-lg">{highRatedBook.price}$</p>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
        </>
    );
};

export default RelatedBook;

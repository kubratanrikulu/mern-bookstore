import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getBooks } from "../redux/slice/bookSlice";

const RelatedBook = () => {
    const { id } = useParams();
    console.log("Book ID:", id);
    const dispatch = useDispatch();
    const books = useSelector((state) => state.books.data);
    console.log("Bookss:", books);
    useEffect(() => {
        dispatch(getBooks());
    }, [dispatch]);

    const bookId = id;
    const selectedBook = books.find((book) => book._id === bookId);
    console.log("Selected Book:", selectedBook);

    if (!selectedBook) {
        return <div>Kitap bulunamadı.</div>;
    }
    const highRatedBooks = books.filter((book) => book.score >= 4 && book._id !== selectedBook._id).slice(0, 6);

    return (
        <>
            <div className="container mx-auto  py-10">
                <h1 className="font-ebGaramond text-primary font-thin italic text-3xl p-8">Everyone's Talking About...</h1>
                <div className="grid lg:grid-cols-6 gap-y-4">
                    {highRatedBooks.map((highRatedBook) => (
                        <NavLink to={`/book/${highRatedBook._id}`} key={highRatedBook._id}>
                            <div key={highRatedBook._id} className="flex flex-col gap-y-1 items-center h-full">
                                <img className="lg:h-3/5" src={highRatedBook.posterPath} alt="" />
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

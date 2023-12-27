import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getBooks } from "../redux/slice/bookSlice"


const BookCard = () => {
    const dispatch = useDispatch()
    const books = useSelector((state) => state.books.data)
    const status = useSelector((state) => state.books.status)
    useEffect(() => {
        if (status === 'idle') {
            dispatch(getBooks())
        }
    }, [dispatch, status])
    return (
        <>
            <div className="book-card grid grid-cols-4 gap-x-8 gap-y-10 container mx-auto ">
                {books.map(item => (
                    <NavLink to={`/book/${item._id}`} key={item._id} className="py-5 items-center justify-center h-full bg-white shadow-xl">
                        <div className="flex justify-center h-3/5">
                            <img src={item.posterPath} alt="" className="h-full w-4/5 shadow-lg" />
                        </div>
                        <div className="h-2/5 flex flex-col justify-center items-center text-center gap-y-1">
                            <p>{item.score}</p>
                            <p className="text-[#909090] font-light text-md">{item.author}</p>
                            <h1 className="text-[#2b2b2b]">{item.book}</h1>
                            <p className="text-[#f86d72]">{item.price}</p>

                            <button className="border border-[#dcdcdc] px-4 py-1 rounded-lg text-[#a7a7a7] flex items-center gap-x-2" onClick={(e) => {
                                e.stopPropagation()
                                alert("ben burger söyledim ihtiyar")
                            }}><i className="fa-solid fa-basket-shopping"></i>Add to Chart</button>
                        </div>
                    </NavLink>
                ))}
            </div>
        </>
    )
}

export default BookCard
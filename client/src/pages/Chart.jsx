import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeCartItem } from "../redux/slice/cardSlice";
import { setTotalCount } from "../redux/slice/cardSlice";
const Chart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    const [totalPrice, setTotalPrice] = useState(0);
    const [books, setBooks] = useState([]);

    const handleRemoveItem = (itemId) => {
        dispatch(removeCartItem(itemId));
    };

    const calculateTotalPrice = useCallback(() => {
        let total = 0;
        let _totalCount = 0;
        if (books && Object.values(books).length > 0) {
            const _books = Object.values(books);
            const count = Object.values(books).map((a) => {
                _totalCount += a.length;
                return {
                    id: a[0]._id,
                    count: a.length,
                };
            });
            const idAndPrice = _books
                .map((a) => a[0])
                .map((b) => {
                    return { id: b._id, price: b.price };
                });

            idAndPrice.forEach((item) => {
                total += item.price * count.find((a) => a.id === item.id).count;
            });
        }
        dispatch(setTotalCount(_totalCount));
        setTotalPrice(total);
    }, [books, dispatch]);

    const findBook = (id) => {
        const _books = Object.values(books);
        for (let i = 0; i < _books.length; i++) {
            for (let j = 0; j < _books[i].length; j++) {
                if (_books[i][j]._id === id) {
                    return _books[i][j];
                }
            }
        }
    };

    const decreaseBookCount = (id) => {
        const book = findBook(id);
        const _books = Object.values(books);
        if (book) {
            for (let i = 0; i < _books.length; i++) {
                if (_books[i] && _books[i][0] && _books[i][0]._id === id) {
                    if (Object.values(_books[i]).length <= 1) {
                        handleRemoveItem(id);
                        return;
                    }

                    _books[i].splice(0, 1);
                }
            }
        }
        setBooks(_books);
    };

    const increaseBookCount = (id) => {
        const book = findBook(id);
        const _books = Object.values(books);
        if (book) {
            for (let i = 0; i < _books.length; i++) {
                if (_books[i][0].category === book.category) {
                    _books[i].push(book);
                }
            }
        }
        setBooks(_books);
    };

    useEffect(() => {
        if (books && Object.values(books).length > 0) {
            calculateTotalPrice();
        }
    }, [cartItems, books, calculateTotalPrice, totalPrice]);

    useEffect(() => {
        function groupBy(arr, key) {
            return arr.reduce(function (rv, x) {
                (rv[x[key]] = rv[x[key]] || []).push(x);
                return rv;
            }, {});
        }

        setBooks(groupBy(cartItems, "book"));
    }, [cartItems]);

    return (
        <>
            <div className="flex flex-col sm:flex-row container mx-auto">
                <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                        <div className="block w-full overflow-x-auto">
                            <table className="items-center bg-transparent w-full border-collapse bg-primary font-serif p-6 overflow-x-auto">
                                <thead className="bg-[#f5f5f5]">
                                    <tr>
                                        <th></th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            PRODUCT
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            PRICE
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            COUNT
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            SUBTOTAL
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.values(books).map((item, index, arr) => {
                                        return (
                                            <tr key={item[0]._id}>
                                                <td>
                                                    {" "}
                                                    <button
                                                        onClick={() => handleRemoveItem(item[0]._id)}
                                                        className="px-5"
                                                    >
                                                        <i className="fa-regular fa-trash-can"></i>
                                                    </button>
                                                </td>
                                                <td className="flex items-center gap-x-3 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <img
                                                        src={item[0].posterPath}
                                                        alt=""
                                                        className="h-16 w-12"
                                                    />
                                                    {item[0].book}
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    {item[0].price}$
                                                </td>
                                                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex">
                                                        <button
                                                            className="border border-[#8f8f8f40] py-2 px-3"
                                                            onClick={() => decreaseBookCount(item[0]._id)}
                                                        >
                                                            -
                                                        </button>
                                                        <span className="border border-[#8f8f8f40] py-2 px-3">
                                                            {arr[index].length}
                                                        </span>
                                                        <button
                                                            className="border border-[#8f8f8f40] py-2 px-3"
                                                            onClick={() => increaseBookCount(item[0]._id)}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4 text-primary">
                                                    {arr[index].length * item[0].price}$
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="w-full xl:w-4/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                        <div className="block w-full overflow-x-auto">
                            <table className="items-center bg-transparent w-full border-collapse bg-primary">
                                <thead className="bg-[#f5f5f5]">
                                    <tr>
                                        <th className="px-6 bg-blueGray-50 w-full text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            CARD TOTALS
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th className="flex justify-between border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                            <span>Subtotal :</span>
                                            <span> {totalPrice}$</span>
                                        </th>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <th className="flex justify-between border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                            <span>Cargo :</span>
                                            <span> 12$</span>
                                        </th>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <th className="flex justify-between border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                            <span> Total :</span>
                                            <span> {totalPrice + 12}$</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <button
                        type="button"
                        className=" bg-primary px-5 py-2 text-white flex items-center gap-x-2 shadow-md"
                    >
                        <Link to="/checkout">PROCEED TO CHECKOUT</Link>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Chart;

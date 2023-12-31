import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCartItem } from "../redux/slice/cardSlice";
import { Link } from 'react-router-dom';
const CardPopup = ({ setPopupVisible }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    const [books, setBooks] = useState([])

    const handleRemoveItem = (itemId) => {
        dispatch(removeCartItem(itemId));
    };
    const handleClosePopup = () => {
        setPopupVisible(false)
    }
    useEffect(() => {
        function groupBy(arr, key) {
            return arr.reduce(function (rv, x) {
                (rv[x[key]] = rv[x[key]] || []).push(x);
                return rv;
            }, {});
        }

        setBooks(groupBy(cartItems, 'book'))
    }, [cartItems]);
    return (
        <div className="p-6 bg-white shadow-xl z-10">
            <tbody className="bg-white z-50 p-10">
                {Object.values(books).map((item, index, arr) => {
                    return (
                        <tr key={item[0]._id}>
                            <td>  <button onClick={() => handleRemoveItem(item[0]._id)}>
                                <i className="fa-regular fa-trash-can"></i>
                            </button></td>
                            <td className="flex items-center gap-x-3 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <img src={item[0].posterPath} alt="" className='h-16 w-12' />
                                {item[0].book}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                {item[0].price}$
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4 text-[#f86d72]">
                                {arr[index].length * item[0].price}$
                            </td>
                        </tr>
                    )
                })}
            </tbody>
            <div className="flex gap-x-3">
                <Link to='/chart' className="text-footerText"><button type="button" onClick={handleClosePopup} className="bg-[#f86d72] px-5 py-2 text-white flex items-center gap-x-2">
                    <i className="fa-solid fa-basket-shopping"></i>View Card
                </button></Link>
                <Link to='/checkout' className="text-footerText"> <button type="button" onClick={handleClosePopup} className="bg-white  px-5 py-2 text-pColor border border-pColor flex items-center gap-x-2">
                    <i className="fa-solid fa-basket-shopping"></i>Checkout
                </button></Link>

            </div>
        </div >
    )
}

export default CardPopup
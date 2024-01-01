import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Contact from "../pages/Contact";
import BookDetail from "../pages/BookDetail";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Chart from "../pages/Chart";
import CheckOut from "../pages/CheckoutForm";
const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
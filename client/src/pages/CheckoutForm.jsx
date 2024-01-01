import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CheckoutForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('First name is required'),
            lastName: Yup.string().required('Last name is required'),
            email: Yup.string().email('Enter a valid email address').required('Email is required'),
            phone: Yup.number("Phone must be number.").required('Phone number is required'),
            address: Yup.string().required('Address is required'),
        }),
        onSubmit: (values, { resetForm }) => {
            showSuccessPopup();
            resetForm();
        },
    });

    const showSuccessPopup = () => {
        toast("The product has been purchased successfully and will be shipped as soon as possible!", {
            position: toast.POSITION.TOP_RIGHT,
            progressBarColor: "#f86d72",
            style: {
                color: "#f86d72",
            },
        });
    };

    return (
        <>
            <div className='flex container mx-auto justify-center w-full'>
                <form onSubmit={formik.handleSubmit} className=" flex flex-col items-center p-5 rounded-xl w-full gap-y-5 font-serif">
                    <h1 className='text-2xl font-semibold font-raleway'>Billing Details</h1>
                    <div className="w-full lg:w-1/2 flex flex-col font-raleway">
                        <label htmlFor="firstName">Name:</label>
                        <input
                            className='border-b  px-2 py-1 border-[#D3D3D3] bg-transparent w-full'
                            type="text"
                            id="firstName"
                            name="firstName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                        />
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <div>{formik.errors.firstName}</div>
                        ) : null}
                    </div>

                    <div className="w-full lg:w-1/2 flex flex-col">
                        <label htmlFor="lastName">Surname:</label>
                        <input
                            className='border-b  px-2 py-1 border-[#D3D3D3] bg-transparent  w-full'
                            type="text"
                            id="lastName"
                            name="lastName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName}
                        />
                        {formik.touched.lastName && formik.errors.lastName ? (
                            <div>{formik.errors.lastName}</div>
                        ) : null}
                    </div>

                    <div className="w-full lg:w-1/2 flex flex-col">
                        <label htmlFor="email">E-mail:</label>
                        <input
                            className='border-b px-2 py-1 border-[#D3D3D3] bg-transparent  w-full'
                            type="email"
                            id="email"
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div>{formik.errors.email}</div>
                        ) : null}
                    </div>

                    <div className="w-full lg:w-1/2 flex flex-col">
                        <label htmlFor="phone">Phone:</label>
                        <input
                            className='border-b px-2 py-1 border-[#D3D3D3] bg-transparent  w-full'
                            type="text"
                            id="phone"
                            name="phone"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phone}
                        />
                        {formik.touched.phone && formik.errors.phone ? (
                            <div>{formik.errors.phone}</div>
                        ) : null}
                    </div>

                    <div className="w-full lg:w-1/2 flex flex-col">
                        <label htmlFor="address">Address:</label>
                        <textarea
                            className='border-b px-2 py-1 border-[#D3D3D3] bg-transparent  w-full'
                            id="address"
                            name="address"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.address}
                        />
                        {formik.touched.address && formik.errors.address ? (
                            <div>{formik.errors.address}</div>
                        ) : null}
                    </div>

                    <button className=" bg-[#f86d72] px-5 py-2 text-white flex items-center gap-x-2 w-max" type="submit">Buy</button>
                </form>
            </div>
            <ToastContainer />
        </>
    );
};

export default CheckoutForm;

import { motion } from "framer-motion";

const OrderViewModal = ({viewModal, setViewModal, orderdata}) => {
    return (
        <>
            {
                viewModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 bg-opacity-40">
                        <motion.div
                            className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl relative"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Close Button */}
                            <button
                                className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
                                onClick={() => setViewModal(false)}

                            >
                                X
                            </button> 

                            {/* Modal Content */}
                            <h2 className="text-lg font-semibold mb-4">Order Payment Details</h2>
                            <p><strong>Order ID:</strong> {orderdata?.id}</p>
                            <p><strong>Name:</strong> {orderdata?.name}</p>
                            <p><strong>Amount:</strong> {orderdata?.amount}</p>
                            {/* Add more fields if needed */}

                            <button
                                className="mt-6 w-full bg-[#F27405] text-white py-2 rounded-lg hover:bg-orange-600"
                                onClick={() => setViewModal(false)}

                            >
                                Close
                            </button>
                        </motion.div>
                    </div>
                )
            }
        </>
    );
};

export default OrderViewModal;
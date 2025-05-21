"use client";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";

const OrderViewModal = ({ viewModal, setViewModal, orderdata }) => {
  return (
    <>
      {viewModal && (
        <div className="fixed h-[100vh] inset-0 flex justify-center items-center bg-black/50 bg-opacity-50 z-50  backdrop-blur-xs">
          <motion.div
            className="bg-white rounded-sm min-w-lg p-4 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition cursor-pointer"
              onClick={() => setViewModal(false)}
            >
              <FiX className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              🧾 Order Payment Details
            </h2>

            {/* Divider */}
            <hr className="mb-4 border-t border-dashed border-gray-300" />

            {/* Info Display */}
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex justify-between">
                <span className="font-medium text-gray-500">Order ID:</span>
                <span>{orderdata?.id || "N/A"}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-500">Customer:</span>
                <span>{orderdata?.name || "N/A"}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-500">Product Name:</span>
                <span>{orderdata?.productName || "N/A"}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-500">Amount:</span>
                <span className="text-[#F27405] font-semibold">
                  {orderdata?.amount || "0.00"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-500">Status:</span>
                <span
                  className={`font-semibold ${
                    orderdata?.status === "Paid"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {orderdata?.status || "Pending"}
                </span>
              </div>
            </div>

            {/* Close Button */}
            <button
              className="mt-6 w-full bg-[#F27405] text-white py-2 rounded-xs font-medium hover:bg-button-hover transition-all duration-300 cursor-pointer"
              onClick={() => setViewModal(false)}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default OrderViewModal;

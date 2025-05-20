"use client";
import PageContainer from "@/components/container/PageContainer";
import Pagination from "@/components/pagination/Pagination";
import OrderTable from "@/components/table/orders-table/OrderTable";
import { orders } from "@/data/data";
import { useState } from "react";
import { motion } from "framer-motion";


export default function Orders() {
  const pageSize = 10;
  const [page, setPage] = useState(1);
  const [isPaymentModal, setIsPaymentModal] = useState(false)
  const [orderdata, setOrderData] = useState()
  const [selectedUser, setSelectedUser] = useState(null)

  const pageCount = Math.ceil(orders.length / pageSize);
  const paged = orders.slice((page - 1) * pageSize, page * pageSize);


  const handleClick = (order) => {
    setOrderData(order)
    setIsPaymentModal(true)
  }

  return (
    <PageContainer>

      {/* header + search */}
      <motion.div
        className="mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-xl text-start font-medium">All Seller list</h1>
      </motion.div>

      {/* table */}
      <motion.div
        className="overflow-auto h-[74vh] scrl-hide rounded-md border border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <OrderTable paged={paged} handleClick={handleClick} />
      </motion.div>

      {/* pagination */}
      <motion.div
        className="flex justify-evenly items-center text-sm mt-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
      >
        <span className="text-[#F27405] font-medium">
          Showing {(page - 1) * pageSize + 1}-{Math.min(page * pageSize, orders.length)} of {orders.length}
        </span>

        <div className="flex items-center gap-2">
          <Pagination page={page} setPage={setPage} pageCount={pageCount} />
        </div>
      </motion.div>

      {
        isPaymentModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <motion.div
              className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
                onClick={() => setIsPaymentModal(false)}

              >
                X
              </button>

              {/* Modal Content */}
              <h2 className="text-lg font-semibold mb-4">Order Payment Details</h2>
              <p><strong>Order ID:</strong> {orderdata?.id}</p>
              <p><strong>Name:</strong> {orderdata?.name}</p>
              <p><strong>Amount:</strong> ${orderdata?.amount}</p>
              {/* Add more fields if needed */}

              <button
                className="mt-6 w-full bg-[#F27405] text-white py-2 rounded-lg hover:bg-orange-600"
                onClick={() => setIsPaymentModal(false)}

              >
                Close
              </button>
            </motion.div>
          </div>
        )
      }
    </PageContainer>
  );
}

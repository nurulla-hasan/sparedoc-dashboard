"use client";
import PageContainer from "@/components/container/PageContainer";
import Pagination from "@/components/pagination/Pagination";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import PaymentTable from "@/components/table/payments-table/PaymentsTable";
import { paymentDetails } from "@/data/data";
import PaymentModal from "@/components/modal/payment-modal/PaymentModal";


export default function PaymentDetails() {
  const pageSize = 10;
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [data, setData] = useState(paymentDetails);
  const [isPaymentModal, setIsPaymentModal] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)

  /* block / unblock toggle */
  const handlePayment = (id) => {


  };

  const handleModal = (user) => {
    setSelectedUser(user)
    setIsPaymentModal(true)
  }

  const handleReject = () => {
    const updated = data.map((user) =>
      user.id === selectedUser.id ? { ...user, paymentStatus: "failed" } : user
    );
    const updatedUser = updated.find((user) => user.id === selectedUser.id);

    toast.error(`${updatedUser.name.split(" ")[0]} has been marked as Failed`);

    setData(updated);
    setIsPaymentModal(false);
  };

  const handleAccept = () => {
    const updated = data.map((user) =>
      user.id === selectedUser.id ? { ...user, paymentStatus: "paid" } : user
    );
    const updatedUser = updated.find((user) => user.id === selectedUser.id);

    toast.success(`${updatedUser.name.split(" ")[0]} has been marked as Paid`);
    setData(updated);
    setIsPaymentModal(false);
  };



  const filtered = data.filter((user) =>
    user.name.toLowerCase().includes(query.toLowerCase())
    ||
    user.email.toLowerCase().includes(query.toLowerCase()));

  const pageCount = Math.ceil(filtered.length / pageSize);
  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <PageContainer>

      {/* header + search */}
      <motion.div
        className="flex justify-between mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-xl font-medium">Payment</h1>
        <div className="relative w-72">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#ffbc89]" size={18} />
          <input
            placeholder="Search Name or Email"
            value={query}
            onChange={(e) => {
              setPage(1);
              setQuery(e.target.value);
            }}
            className="w-full pl-10 pr-4 py-1 rounded-md border border-[#ffdec4] focus:outline-none placeholder:text-sm"
          />
        </div>
      </motion.div>

      {/* table */}
      <motion.div
        className="overflow-auto h-[74vh] scrl-hide rounded-md border border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <PaymentTable paged={paged} handleModal={handleModal} />
      </motion.div>

      {/* pagination */}
      <motion.div
        className="flex justify-evenly items-center text-sm mt-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
      >
        <span className="text-[#F27405] font-medium">
          Showing {(page - 1) * pageSize + 1}-{Math.min(page * pageSize, filtered.length)} of {filtered.length}
        </span>

        <div className="flex items-center gap-2">
          <Pagination page={page} setPage={setPage} pageCount={pageCount} />
        </div>
      </motion.div>

      {/* Modal */}
      <PaymentModal {...{ setIsPaymentModal, isPaymentModal, selectedUser, handleReject, handleAccept }} />

    </PageContainer>
  );
}

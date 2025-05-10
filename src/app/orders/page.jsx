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

  const pageCount = Math.ceil(orders.length / pageSize);
  const paged = orders.slice((page - 1) * pageSize, page * pageSize);

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
        <OrderTable paged={paged} />
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
    </PageContainer>
  );
}

"use client";
import PageContainer from "@/components/container/PageContainer";
import Pagination from "@/components/pagination/Pagination";
import { users } from "@/data/data";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import UsersTable from "@/components/table/users-table/UsersTable";


export default function OrderDetails() {
  const pageSize = 10;
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [data, setData] = useState(users);

  /* block / unblock toggle */
  const handleBlock = (id) => {
  
    const updated = data.map((user) =>
      user.id === id ? { ...user, blocked: !user.blocked } : user
    );
    
    const updatedUser = updated.find((user) => user.id === id);
    
    if(updatedUser.blocked){
      toast.success(`${updatedUser.name.slice(0, 8)}... has been Blocked`)
    }else{
      toast.success(`${updatedUser.name.slice(0, 8)}... has been Unblocked`)
    }
    setData(updated);
  };
  

  /* filter + paginate */
  const filtered = data.filter((u) =>
    u.name.toLowerCase().includes(query.toLowerCase())
  );
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
        <h1 className="text-xl font-medium">All User list</h1>
        <div className="relative w-72">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#ffbc89]" size={18} />
          <input
            placeholder="Search here..."
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
        <UsersTable paged={paged} handleBlock={handleBlock} />
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
    </PageContainer>
  );
}

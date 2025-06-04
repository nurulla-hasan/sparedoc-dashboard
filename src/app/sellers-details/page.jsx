"use client";
import PageContainer from "@/components/container/PageContainer";
import Pagination from "@/components/pagination/Pagination";
import { sellersDetails } from "@/data/data";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";
import SellersTable from "@/components/table/sellers-table/SellersTable";
import SellerModal from "@/components/modal/seller-modal/SellerModal";
import toast from 'react-hot-toast';

export default function SellersDetails() {
    const pageSize = 10;
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState("");
    const [data, setData] = useState(sellersDetails);
    const [isSellerModal, setisSellerModal] = useState(false);
    const [selectedSeller, setSelectedSeller] = useState(null); // setIelectedSeller কে setSelectedSeller
    const [loading, setLoading] = useState(false);

    /* Handle Status Change (Approved, Suspended, Reject) */
    const handleStatusChange = async (sellerId, newStatus) => {
        setLoading(true); 
        try {
            //  const response = await axios.put(`/api/sellers/${sellerId}/status`, { status: newStatus });
            const updatedData = data.map((seller) =>
                seller.id === sellerId ? { ...seller, status: newStatus } : seller
            );
            setData(updatedData);
            const sellerToUpdate = data.find(seller => seller.id === sellerId);
            toast.success(`${sellerToUpdate?.name} has been ${newStatus.charAt(0).toUpperCase() + newStatus.slice(1)}.`);

            setisSellerModal(false);
            setSelectedSeller(null); 

        } catch (error) {
            console.error("Failed to update seller status:", error);
            toast.error("Failed to update seller status.");
        } finally {
            setLoading(false);
        }
    };

    const openStatusModal = (seller) => {
        setSelectedSeller(seller); 
        setisSellerModal(true);
    };

    /* filter + paginate */
    const filtered = data.filter((seller) => {
        const searchText = query.toLowerCase();
        return (
            seller?.name.toLowerCase().includes(searchText) ||
            seller?.location.toLowerCase().includes(searchText)
        );
    });
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
                <h1 className="text-xl font-medium">All Seller List</h1>
                <div className="relative w-72">
                    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#ffbc89]" size={18} />
                    <input
                        placeholder="Search Name or Location"
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
                <SellersTable paged={paged} openStatusModal={openStatusModal} />
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
            <SellerModal
                isSellerModal={isSellerModal}
                setisSellerModal={setisSellerModal}
                selectedSeller={selectedSeller}
                onStatusChange={handleStatusChange}
                loading={loading}
            />
        </PageContainer>
    );
}
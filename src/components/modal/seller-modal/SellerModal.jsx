'use client';
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { useState, useEffect } from "react";
import { ImSpinner9 } from "react-icons/im";
import toast from "react-hot-toast";

const SellerModal = ({
  isSellerModal,
  setisSellerModal,
  selectedSeller,
  onStatusChange,
  loading,
}) => {
  const [selectedStatus, setSelectedStatus] = useState('');

  useEffect(() => {
    if (isSellerModal && selectedSeller) {
      setSelectedStatus(selectedSeller.status || '');
    } else {
      setSelectedStatus('');
    }
  }, [isSellerModal, selectedSeller]);

  const handleSubmit = () => {
    if (!selectedSeller) return;
    if (!selectedStatus) {
      toast.error('Please select a status.');
      return;
    }
    onStatusChange(selectedSeller.id, selectedStatus);
  };

  return (
    <AnimatePresence>
      {isSellerModal && selectedSeller && (
        <motion.div
          className="fixed h-[100vh] inset-0 flex justify-center items-center bg-black/50 bg-opacity-50 z-50 backdrop-blur-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          <motion.div
            className="bg-white rounded-sm min-w-lg p-4 relative"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.1 }}
          >
            <button
              onClick={() => setisSellerModal(false)}
              className="w-8 h-8 bg-amber-300 rounded-full absolute top-6 right-6 flex justify-center items-center cursor-pointer"
            >
              <RxCross2 color="#ff0000" />
            </button>

            <div className="bg-[#de8c45] rounded-sm h-52 flex gap-3 justify-center items-center flex-col mb-4">
              <Image src={selectedSeller.avatar} width={80} height={80} alt="avatar" className="rounded-full" />
              <div className="flex flex-col justify-center items-center text-white">
                <h1 className="font-medium text-2xl">{selectedSeller.name}</h1>
              </div>
            </div>

            <div className="mb-10 px-6">
              <div className="space-y-4 *:space-y-1">
                <div>
                  <h3 className="text-md font-medium">Full Name</h3>
                  <p className="text-sm">{selectedSeller.name}</p>
                </div>
                <div>
                  <h3 className="text-md font-medium">Email</h3>
                  <p className="text-sm">{selectedSeller.email}</p>
                </div>
                <div>
                  <h3 className="text-md font-medium">Current Status</h3>
                  <p className="text-sm font-semibold capitalize">{selectedSeller.status || 'N/A'}</p>
                </div>
              </div>

              {/* Dropdown */}
              <div className="mt-6 flex items-center justify-between">
                <label htmlFor="status-select" className="block text-md font-medium mb-2">
                  Change Status To:
                </label>
                <select
                  id="status-select"
                  name="status"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="shadow appearance-none border rounded-xs py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select New Status</option>
                  <option value="approved">Approved</option>
                  <option value="suspended">Suspended</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
            </div>

            {/* Save Changes  */}
            <div className="flex justify-end gap-3 px-6 pb-4">
              <button
                onClick={() => setisSellerModal(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-xs focus:outline-none focus:shadow-outline cursor-pointer"
                disabled={loading}
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-button hover:bg-button-hover text-white font-bold py-2 px-4 rounded-xs focus:outline-none focus:shadow-outline flex items-center justify-center min-w-[120px] cursor-pointer"
                disabled={loading}
              >
                {loading ? <ImSpinner9 size={20} className="animate-spin" /> : 'Save Changes'}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SellerModal;
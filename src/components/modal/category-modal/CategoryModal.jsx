import React from 'react';
import { FaRegImage } from 'react-icons/fa';
import { RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

const CategoryModal = ({
    setIsModalOpen,
    isModalOpen,
    setCategoryName,
    editMode,
    categoryName,
    handleIconUpload,
    handleSubmit
}) => {
    return (
        <AnimatePresence>
            {isModalOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}
                >

                    <motion.div
                        className="bg-white text-[#333333] p-8 rounded-lg w-[500px] shadow-lg relative"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                        transition={{ duration: 0.1 }}
                    >
                        <RxCross2
                            onClick={() => setIsModalOpen(false)}
                            className="cursor-pointer absolute top-4 right-4"
                            color="#aeaeae"
                            size={22}
                        />
                        <h2 className="text-lg font-medium flex items-center justify-center gap-2 mb-6">
                            {editMode ? "Edit Category" : "Add New Category"}
                        </h2>

                        <div className="mb-4">
                            <label className="block text-sm font-normal mb-2">
                                Category name
                            </label>
                            <input
                                type="text"
                                value={categoryName}
                                onChange={(e) => setCategoryName(e.target.value)}
                                className="w-full border border-[#FEEFE6] px-3 py-2 rounded outline-none"
                                placeholder="Enter category name"
                            />
                        </div>
                        <div className="mb-4 relative">
                            <label className="block text-sm font-normal mb-2">
                                Category icon
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleIconUpload}
                                className="w-full border border-[#FEEFE6] px-3 py-2 rounded outline-none cursor-pointer text-[15px] text-[#3333339b]"
                                id="icon-upload"
                            />
                            <FaRegImage
                                className="absolute top-10 right-3"
                                size={20}
                                color="#F27405"
                            />
                        </div>

                        <button
                            onClick={handleSubmit}
                            className="bg-[#F27405] text-white w-full py-2 rounded font-medium cursor-pointer"
                        >
                            {editMode ? "Update" : "Add Category"}
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CategoryModal;

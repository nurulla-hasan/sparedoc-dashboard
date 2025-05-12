import { motion, AnimatePresence } from "framer-motion";
import { RxCross2 } from 'react-icons/rx';
import { useRef } from "react";
import Image from "next/image";

const EditMember = ({ editingMember, setForm, setEditingMember, handleSave, form, handleImageChange }) => {
    const fileInputRef = useRef(null);
    return (
        <AnimatePresence>
            {editingMember && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}
                    className="fixed inset-0 bg-black/50 backdrop-blur-xs flex justify-center items-center z-50"
                >
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                        transition={{ duration: 0.1 }}
                        className="bg-white p-6 rounded-sm w-full max-w-xl relative"
                    >
                        <RxCross2
                            onClick={() => setEditingMember(false)}
                            className="cursor-pointer absolute top-4 right-4"
                            color="#aeaeae"
                            size={22}
                        />
                        <h2 className="text-xl text-center font-semibold mb-8">Edit Member</h2>

                        {/* Image Preview + Upload */}
                        <div className="flex flex-col items-center mb-5">
                            {form.image ? (
                                <Image
                                    src={form.image}
                                    width={500}
                                    height={500}
                                    alt="Member Preview"
                                    className="w-32 h-40 object-cover rounded mb-2"
                                />
                            ) : (
                                <div className="w-32 h-40 bg-gray-200 rounded mb-2 flex items-center justify-center text-gray-400 text-sm">
                                    No Image
                                </div>
                            )}
                            <button
                                onClick={() => fileInputRef.current.click()}
                                className="text-sm text-button hover:text-button-hover cursor-pointer"
                            >
                                Change Image
                            </button>
                            <input
                                type="file"
                                accept="image/*"
                                ref={fileInputRef}
                                onChange={handleImageChange}
                                className="hidden"
                            />
                        </div>

                        {/* Form Fields */}
                        <div className="flex flex-col gap-3">
                            {["name", "position", "twitter", "instagram", "linkedin"].map((field, idx) => (
                                <div key={idx}>
                                    <label className="text-sm -mb-2 font-medium text-gray-600 capitalize">{field}</label>
                                    <input
                                        className="border p-2 rounded outline-none border-button/20 text-sm text-gray-600 mb-1 w-full"
                                        placeholder={`${field.charAt(0).toUpperCase() + field.slice(1)} ${field === "name" || field === "position" ? "" : "URL"}`}
                                        value={form[field]}
                                        onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Save Button */}
                        <div className="flex justify-end gap-3 mt-5">
                            <button
                                className="bg-button w-full hover:bg-button-hover text-white px-4 py-2 text-sm rounded cursor-pointer"
                                onClick={handleSave}
                            >
                                Save
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default EditMember;

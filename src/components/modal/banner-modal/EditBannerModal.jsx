import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import { RxCross2 } from 'react-icons/rx';

const EditBannerModal = ({ isEditing, setIsEditing, editIndex, handleChange, setFormData, handleSave, formData }) => {
    return (
        <>
            <AnimatePresence>
                {isEditing && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1 }}
                        className='fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50'>
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            transition={{ duration: 0.1 }}
                            className='bg-white p-6 rounded-sm w-2/8 space-y-4 relative'>
                            <RxCross2
                                onClick={() => setIsEditing(false)}
                                className="cursor-pointer absolute top-4 right-4"
                                color="#aeaeae"
                                size={22}
                            />
                            <h2 className='text-lg font-medium flex items-center justify-center gap-2 mb-6'>Edit Banner</h2>
                            <input
                                type='text'
                                name='title'
                                value={formData.title}
                                onChange={handleChange}
                                placeholder='Title'
                                className='w-full border border-[#fbdac5] px-3 py-2 rounded outline-none cursor-pointer text-[15px] text-[#3333339b]'
                            />
                            <input
                                type='text'
                                name='voucher'
                                value={formData.voucher}
                                onChange={handleChange}
                                placeholder='Voucher Text'
                                className='w-full border border-[#fbdac5] px-3 py-2 rounded outline-none cursor-pointer text-[15px] text-[#3333339b]'
                            />
                            <input
                                type='file'
                                accept='image/*'
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    if (file) {
                                        const imageUrl = URL.createObjectURL(file);
                                        setFormData((prev) => ({ ...prev, image: imageUrl }));
                                    }
                                }}
                                className='w-full border border-[#fbdac5] px-3 py-2 rounded outline-none cursor-pointer text-[15px] text-[#3333339b]'
                            />
                            {formData.image && (
                                <Image
                                    src={formData.image}
                                    alt="Preview"
                                    width={200}
                                    height={100}
                                    className='rounded w-[100px] h-[50px]'
                                />
                            )}

                            <button
                                onClick={handleSave}
                                className='bg-[#F27405] text-white w-full py-2 rounded font-medium cursor-pointer'
                            >
                                Save
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence >

        </>
    );
};

export default EditBannerModal;
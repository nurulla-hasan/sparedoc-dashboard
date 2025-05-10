
import { motion, AnimatePresence } from "framer-motion";
import { RxCross2 } from 'react-icons/rx';

const EditMember = ({ editingMember, setForm, setEditingMember, handleSave, form }) => {
    return (
        <>
            <AnimatePresence>
                {editingMember && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-xs flex justify-center items-center z-50">
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            transition={{ duration: 0.1 }}
                            className="bg-white p-6 rounded-sm w-full max-w-xl relative">
                            <RxCross2
                                onClick={() => setEditingMember(false)}
                                className="cursor-pointer absolute top-4 right-4"
                                color="#aeaeae"
                                size={22}
                            />
                            <h2 className="text-xl text-center font-semibold mb-8">Edit Member</h2>
                            <div className="flex flex-col gap-3">
                                <input
                                    className="border p-2 rounded outline-none border-button/20 text-sm text-gray-600"
                                    placeholder="Name"
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                />
                                <input
                                    className="border p-2 rounded outline-none border-button/20 text-sm text-gray-600"
                                    placeholder="Position"
                                    value={form.position}
                                    onChange={(e) => setForm({ ...form, position: e.target.value })}
                                />
                                <input
                                    className="border p-2 rounded outline-none border-button/20 text-sm text-gray-600"
                                    placeholder="Twitter URL"
                                    value={form.twitter}
                                    onChange={(e) => setForm({ ...form, twitter: e.target.value })}
                                />
                                <input
                                    className="border p-2 rounded outline-none border-button/20 text-sm text-gray-600"
                                    placeholder="Instagram URL"
                                    value={form.instagram}
                                    onChange={(e) => setForm({ ...form, instagram: e.target.value })}
                                />
                                <input
                                    className="border p-2 rounded outline-none border-button/20 text-sm text-gray-600"
                                    placeholder="LinkedIn URL"
                                    value={form.linkedin}
                                    onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
                                />
                            </div>
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
        </>
    );
};

export default EditMember;
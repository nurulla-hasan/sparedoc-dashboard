import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const PaymentModal = ({ isPaymentModal, selectedUser, handleReject, handleAccept }) => {
    return (
        <AnimatePresence> 
            {isPaymentModal && selectedUser && (
                <motion.div
                    className="fixed h-[100vh] inset-0 flex justify-center items-center bg-black/50 bg-opacity-50 z-50  backdrop-blur-xs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }} 
                    transition={{ duration: 0.1 }}
                >
                    <motion.div
                        className="bg-white rounded-sm min-w-lg p-4"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                        transition={{ duration: 0.1 }}
                    >
                        <div className="bg-[#de8c45] rounded-sm h-52 flex gap-3 justify-center items-center flex-col mb-4">
                            <Image src={selectedUser?.avatar} width={80} height={80} alt="avatar" className="rounded-full" />
                            <div className="flex flex-col justify-center items-center text-white">
                                <h1 className="font-medium text-2xl">{selectedUser.name}</h1>
                            </div>
                        </div>
                        <div className="mb-10 px-6">
                            <div className="space-y-4 *:space-y-1">
                                <div>
                                    <h3 className="text-md font-medium">Name On Card</h3>
                                    <p className="text-sm">{selectedUser.name}</p>
                                </div>
                                <div>
                                    <h3 className="text-md font-medium">Email</h3>
                                    <p className="text-sm">{selectedUser.email}</p>
                                </div>
                                <div>
                                    <h3 className="text-md font-medium">Amount</h3>
                                    <p className="text-sm">{selectedUser.amount}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between gap-8 px-6">
                            <button
                                onClick={handleReject}
                                className="border text-black py-[7px] w-full rounded-sm cursor-pointer"
                            >
                                Decline
                            </button>
                            <button
                                onClick={handleAccept}
                                className="bg-[#F27405] text-white py-2 w-full rounded-sm cursor-pointer"
                            >
                                Accept
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PaymentModal;

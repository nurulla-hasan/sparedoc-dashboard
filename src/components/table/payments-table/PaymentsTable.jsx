import { FaCircle } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const PaymentTable = ({ paged, handleModal }) => {
    return (
        <>
            <table className="min-w-full text-sm ">
                <thead className="bg-[#FEF1E6] text-[#734D2C] sticky top-0">
                    <tr className="*:font-medium *:text-[16px]">
                        <th className="px-4 py-3 text-left">S.no </th>
                        <th className="px-4 py-3 text-left">Seller</th>
                        <th className="px-4 py-3 text-left">Email</th>
                        <th className="px-4 py-3 text-left">Amount</th>
                        <th className="px-4 py-3 text-left">Status</th>
                        <th className="px-4 py-3 text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {paged.map((user) => (
                        <tr
                            key={user.id}
                            className={`hover:bg-[#FEF1E6] transition-all duration-200 *:text-[15px] *:text-[#636363]`}>
                            <td className="px-4 py-3">{user.id}</td>
                            <td className="px-4 py-3 flex items-center gap-2">
                                <img src={user.avatar} alt="" className="w-9 h-9 rounded-full" />
                                {user.name}
                            </td>
                            <td className="px-4 py-3">{user.email}</td>
                            <td className="px-4 py-3">{user.amount}</td>
                            <td className="px-4 py-3">
                                {
                                    user.paymentStatus === "paid" ?
                                        <span className="flex items-center gap-2 font-medium text-[#00B047]">
                                            <FaCircle size={15} /> Paid
                                        </span>
                                        : user.paymentStatus === "pending" ?
                                            <span className="flex items-center gap-2 font-medium text-[#ffaf69]">
                                                <FaCircle size={15} /> Pending
                                            </span>
                                            :
                                            <span className="flex items-center gap-2 font-medium text-[#f20505]">
                                                <FaCircle size={15} /> Failed
                                            </span>

                                }
                            </td>
                            <td className="px-4 py-3 flex justify-center">
                                <button
                                    onClick={() => handleModal(user)}
                                    disabled={user.paymentStatus !== "pending"}
                                    className={`flex items-center gap-1 justify-center rounded-sm cursor-pointer transition-all duration-300  disabled:cursor-not-allowed ${user.paymentStatus === "paid" ? 'bg-green-100 border-green-500 border py-1 px-2'
                                        : user.paymentStatus === "pending" ?
                                            'bg-[#f0f0f0] border border-gray-400 py-1 px-2' : "bg-red-100 border border-red-400 py-1 px-2"}`}
                                >
                                    <span>
                                        {
                                            user.paymentStatus === "pending"
                                                ?
                                                <MdOutlineArrowOutward size={24} />
                                                : user.paymentStatus === "paid" ?
                                                    <IoCheckmarkDoneOutline color="#00B047" size={24} />
                                                    : <RxCross2 size={24} className="text-red-500"/>
                                        }
                                    </span>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default PaymentTable;
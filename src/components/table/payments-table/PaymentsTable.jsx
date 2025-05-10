import { FaCircle } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

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
                                    user.paymentStatus ?
                                        <span className="flex items-center gap-2 font-medium text-[#00B047]">
                                            <FaCircle size={15} /> Paid
                                        </span>
                                        :
                                        <span className="flex items-center gap-2 font-medium text-[#F27405]">
                                            <FaCircle size={15} /> Pending
                                        </span>
                                }
                            </td>
                            <td className="px-4 py-3 flex justify-center">
                                <button
                                    onClick={() => handleModal(user)}
                                    disabled={user.paymentStatus}
                                    className={`flex items-center gap-1 justify-center rounded-sm cursor-pointer transition-all duration-300  disabled:cursor-not-allowed ${user.paymentStatus ? 'bg-green-100 border-green-500 border py-1 px-2':'bg-[#f0f0f0] border border-gray-400 py-1 px-2'}`}
                                >
                                    <span>
                                        {
                                            user.paymentStatus
                                                ?
                                                <IoCheckmarkDoneOutline
                                                    color="#00B047"
                                                    size={24} />
                                                :
                                                <MdOutlineArrowOutward size={24} />
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
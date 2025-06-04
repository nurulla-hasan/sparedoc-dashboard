import { MdBlockFlipped, MdOutlineArrowOutward } from "react-icons/md";
// import { RxCross2 } from "react-icons/rx";
import { FaCircle } from "react-icons/fa6";
// import { IoCheckmarkDoneOutline } from "react-icons/io5";
const SellersTable = ({ paged, openStatusModal }) => {
    return (
        <>
            <table className="min-w-full text-sm ">
                <thead className="bg-[#FEF1E6] text-[#734D2C] sticky top-0">
                    <tr className="*:font-medium *:text-[16px]">
                        <th className="px-4 py-3 text-left">S.no </th>
                        <th className="px-4 py-3 text-left">Seller Name</th>
                        <th className="px-4 py-3 text-left">Contact</th>
                        <th className="px-4 py-3 text-left">Email</th>
                        <th className="px-4 py-3 text-left">Location</th>
                        <th className="px-4 py-3 text-left">Status</th>
                        <th className="px-4 py-3 text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {paged.map((seller, index) => (
                        <tr
                            key={seller.id}
                            className={`hover:bg-[#FEF1E6] transition-all duration-200 *:text-[15px] *:text-[#636363]`}>
                            <td className="px-4 py-3">{index + 1}</td>
                            <td className="px-4 py-3 flex items-center gap-2">
                                <img src={seller.avatar} alt="" className="w-9 h-9 rounded-full" />
                                {seller.name}
                            </td>
                            <td className="px-4 py-3">{seller.phone}</td>
                            <td className="px-4 py-3">{seller.email}</td>
                            <td className="px-4 py-3">{seller.location}</td>
                            <td className="px-4 py-3">
                                {
                                    seller.status === "approved" ?
                                        <span className="flex items-center gap-2 font-medium text-[#00B047]">
                                            <FaCircle size={15} /> Approved
                                        </span>
                                        : seller.status === "pending" ?
                                            <span className="flex items-center gap-2 font-medium text-[#ffaf69]">
                                                <FaCircle size={15} /> Pending
                                            </span>
                                            : seller.status === "suspended" ?
                                                <span className="flex items-center gap-2 font-medium text-[#f20505]">
                                                    <FaCircle size={15} /> Suspended
                                                </span>
                                                :
                                                <span className="flex items-center gap-2 font-medium text-[#f20505]">
                                                    <FaCircle size={15} /> Rejected
                                                </span>
                                }
                            </td>
                            <td className="px-4 py-3 flex items-center justify-center gap-2">
                                <button
                                    onClick={() => openStatusModal(seller)}
                                    className={`flex items-center gap-1 justify-center rounded-sm cursor-pointer transition-all duration-300 disabled:cursor-not-allowed py-1 px-2
                                       bg-[#f0f0f0] border border-gray-400`}
                                >
                                    <span>
                                        {
                                            // seller.status === "pending" ?
                                            <MdOutlineArrowOutward size={24} />
                                            // : seller.status === "approved" ?
                                            // <IoCheckmarkDoneOutline color="#00B047" size={24} />
                                            // : seller.status === "rejected" ?
                                            // <RxCross2 size={24} className="text-red-500" />
                                            // :
                                            // <MdBlockFlipped size={24} className="text-red-500" />
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

export default SellersTable;
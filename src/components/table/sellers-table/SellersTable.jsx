import { MdBlockFlipped } from "react-icons/md";
import { LuUserCheck } from "react-icons/lu";

const SellersTable = ({ paged, handleBlock, handleAccept }) => {
    return (
        <>
            <table className="min-w-full text-sm ">
                <thead className="bg-[#FEF1E6] text-[#734D2C] sticky top-0">
                    <tr className="*:font-medium *:text-[16px]">
                        <th className="px-4 py-3 text-left">S.no </th>
                        <th className="px-4 py-3 text-left">User Name</th>
                        <th className="px-4 py-3 text-left">Contact</th>
                        <th className="px-4 py-3 text-left">Email</th>
                        <th className="px-4 py-3 text-left">Location</th>
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
                            <td className="px-4 py-3">{user.phone}</td>
                            <td className="px-4 py-3">{user.email}</td>
                            <td className="px-4 py-3">{user.location}</td>
                            <td className="px-4 py-3 flex items-center justify-center gap-2">
                                {
                                    !user.accepted && (
                                        <button
                                            onClick={() => handleBlock(user.id)}
                                            className={`px-2 py-1 flex items-center gap-1 justify-center rounded-sm cursor-pointer transition-all duration-300 ${user.blocked
                                                    ? "bg-red-100 text-red-500 hover:bg-red-200 border border-red-300"
                                                    : "bg-[#fff0e4] text-[#F27405] hover:bg-[#FFE6D6] border border-[#FBB07F]"
                                                }`}
                                        >
                                            <MdBlockFlipped size={20} />
                                            {user.blocked && (
                                                <span className="text-sm font-medium">Blocked</span>
                                            )}
                                        </button>

                                    )
                                }
                                {!user.blocked && (
                                    <button
                                        onClick={() => handleAccept(user.id)}
                                        className={`px-2 py-1 flex items-center gap-1 justify-center rounded-sm cursor-pointer transition-all duration-300 ${user.accepted
                                            ? "bg-[#e0f7e9] text-[#00B047] hover:bg-[#c5edd4] border border-[#00b0464b]"
                                            : "bg-[#FDF6E6] text-[#A55B00] hover:bg-[#f3ead3] border border-[#f2740533]"} `}
                                    >
                                        <LuUserCheck size={20} />
                                    </button>
                                )}

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default SellersTable;
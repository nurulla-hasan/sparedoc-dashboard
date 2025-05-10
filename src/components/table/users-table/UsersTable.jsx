import { MdBlockFlipped } from "react-icons/md";

const UsersTable = ({ paged, handleBlock }) => {
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
                            <td className="px-4 py-3 flex justify-center">
                                <button
                                    onClick={() => handleBlock(user.id)}
                                    className={`w-[97px] py-1 flex items-center gap-1 justify-center rounded-sm cursor-pointer transition-all duration-300 ${user.blocked
                                            ? "bg-[#F27405] text-white hover:bg-[#d96300] border border-[#F27405]"
                                            : "bg-[#FFF5ED] text-[#F27405] hover:bg-[#FFE6D6] border border-[#FBB07F]"
                                        }`}
                                >
                                    <MdBlockFlipped size={18} />
                                    <span className="text-sm font-medium">
                                        {user.blocked ? "Unblock" : "Block"}
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

export default UsersTable;
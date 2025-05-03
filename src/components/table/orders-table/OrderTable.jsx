import { SlEye } from "react-icons/sl";

const OrderTable = ({ paged }) => {
    return (
        <>
            <table className="min-w-full text-sm ">
                <thead className="bg-[#FEF1E6] text-[#734D2C] sticky top-0">
                    <tr className="*:font-medium *:text-[16px]">
                        <th className="px-4 py-3 text-left">S.no </th>
                        <th className="px-4 py-3 text-left">User name</th>
                        <th className="px-4 py-3 text-left">Contact</th>
                        <th className="px-4 py-3 text-left">Product Name</th>
                        <th className="px-4 py-3 text-left">Amount</th>
                        <th className="px-4 py-3 text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {paged.map((user) => (
                        <tr
                            key={user.id}
                            className={`odd:bg-white *:text-[15px] *:text-[#636363]`}>
                            <td className="px-4 py-3">{user.id}</td>
                            <td className="px-4 py-3 flex items-center gap-2">
                                <img src={user.avatar} alt="" className="w-9 h-9 rounded-full" />
                                {user.name}
                            </td>
                            <td className="px-4 py-3">{user.phone}</td>
                            <td className="px-4 py-3">{user.productName}</td>
                            <td className="px-4 py-3 !text-[#00B047] font-medium">{user.amount}</td>
                            <td className="px-4 py-3 flex justify-center items-center">
                                <button
                                    className="cursor-pointer flex justify-center items-center bg-[#FFF5ED] hover:bg-[#FFE6D6] border border-[#FBB07F] hover:border-[#F9A66C]  rounded-sm transition-colors duration-200 px-2 py-1"
                                >
                                    <SlEye size={20} color="#F27405" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default OrderTable;
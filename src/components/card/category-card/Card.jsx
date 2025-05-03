import Image from "next/image";

const Card = ({ handleDelete, handleEdit, cat, idx }) => {
    return (
        <>
            <div className="bg-[#F6F6F6] p-4 rounded flex flex-col justify-center items-center h-fit">
                <div className="flex gap-2 mb-2">
                    <div className="bg-white px-8 py-4 pb-1 rounded-md">
                        <Image
                            src={cat?.icon}
                            alt={cat.name}
                            width={200}
                            height={200}
                            className="w-16 h-16 mx-auto mb-2 grayscale"
                        />
                    </div>
                    <div className="bg-white px-8 py-4 pb-1 rounded-md">
                        <Image
                            src={cat?.icon}
                            alt={cat.name}
                            width={200}
                            height={200}
                            className="w-16 h-16 mx-auto mb-2"
                        />
                    </div>
                </div>
                <h3 className="font-semibold text-lg">{cat.name}</h3>
                <div className="flex justify-center gap-2 mt-2 w-full">
                    <button
                        onClick={() => handleDelete(idx)}
                        className="border border-[#DF5800] bg-[#FEEFE6] w-full text-sm px-3 py-[3px] rounded text-[#DF5800] cursor-pointer"
                    >
                        Delete
                    </button>
                    <button
                        onClick={() => handleEdit(idx)}
                        className="bg-[#DF5800] text-white w-full text-sm px-5 py-1 rounded cursor-pointer"
                    >
                        Edit
                    </button>
                </div>
            </div>
        </>
    );
};

export default Card;



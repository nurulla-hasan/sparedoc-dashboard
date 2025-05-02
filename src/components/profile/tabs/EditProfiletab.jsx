

const EditProfiletab = ({activeTab, handleSubmit, onSubmitProfile, register}) => {
    return (
        <>
            {activeTab === 'profile' && (
                <form onSubmit={handleSubmit(onSubmitProfile)} className="space-y-4">
                    <h3 className='text-xl font-medium text-center'>
                        Edit Your Profile
                    </h3>

                    <div>
                        <label className="block mb-1 font-medium">User Name</label>
                        <input
                            type="text"
                            {...register('name')}
                            className="w-full border border-[#E0E0E0] rounded-md p-2 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            disabled 
                            {...register('email')}
                            className="w-full border border-[#E0E0E0] rounded-md p-2 outline-none disabled:text-gray-400"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Contact No</label>
                        <input
                            type="text"
                            {...register('contact')}
                            className="w-full border border-[#E0E0E0] rounded-md p-2 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Address</label>
                        <input
                            type="text"
                            {...register('address')}
                            className="w-full border border-[#E0E0E0] rounded-md p-2 outline-none"
                        />
                    </div>

                    <div className='w-full text-center'>
                        <button type="submit" className="mt-4 px-8 bg-[#DF5800] hover:bg-[#bf4a00] text-white py-2 rounded-md cursor-pointer">
                            Save Changes
                        </button>
                    </div>
                </form>
            )}
        </>
    );
};

export default EditProfiletab;
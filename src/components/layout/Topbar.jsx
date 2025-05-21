import { notifications } from '@/data/data';
import Image from 'next/image';
import Link from 'next/link';
import React, { use } from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { useSelector } from 'react-redux';

const Topbar = ({ isHideLayout }) => {

    const user = useSelector(state => state.auth.user)

    return (
        <>
            <div className={`${isHideLayout ? "hidden" : ""} bg-[#FDFDFD] backdrop-blur-2xl z-10 sticky top-0 flex justify-end items-center gap-4 h-24 pr-12`}>
                <div className="flex items-center gap-10">
                    <Link href="/notification">
                        <div className="relative">
                            <div className="flex items-center justify-center absolute right-1 top-1 bg-[#00B047] p-1 rounded-full w-4 h-4">
                                <span className="text-white text-[10px] font-medium">{notifications.length}</span>
                            </div>
                            <button className="w-10 h-10 rounded-full bg-[#F2F2F2] shadow-md flex items-center justify-center cursor-pointer">

                                <IoMdNotificationsOutline color='#333333' size={25} />

                            </button>
                        </div>
                    </Link>
                    <div className="flex items-center gap-2">
                        <Link href="/profile">
                            <Image
                                src="/images/avatar.png"
                                width={50}
                                height={50}
                                alt="User"
                                className="rounded-full cursor-pointer"
                            />
                        </Link>
                        <span className="text-md font-medium text-[#333333]">{user?.name || "Golap Hasan"} </span>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Topbar;
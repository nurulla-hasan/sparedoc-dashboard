"use client";
import PageContainer from '@/components/container/PageContainer';
import { user } from '@/data/data';
import { FiCamera } from "react-icons/fi";
import Image from 'next/image';
import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import EditProfiletab from '@/components/profile/tabs/EditProfiletab';
import EditPassTab from '@/components/profile/tabs/EditPassTab';
import { motion, AnimatePresence } from "framer-motion";

const Page = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const [previewImage, setPreviewImage] = useState("/images/avatar.png");
    const fileInputRef = useRef(null);

    const { register, handleSubmit } = useForm({
        defaultValues: {
            name: user?.name || '',
            email: user?.email || '',
            contact: user?.contact || '',
            address: user?.address || '',
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
        }
    });

    const onSubmitProfile = (data) => {
        console.log('Profile Updated:', data);
    };

    const onSubmitPassword = (data) => {
        console.log('Password Changed:', data);
    };

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setPreviewImage(imageURL);
        }
    };

    return (
        <PageContainer>
            <div className='bg-[#FDFDFD] p-5 h-[calc(100vh-136px)] overflow-y-scroll scrl-hide'>
                <motion.h1
                    className='text-xl font-medium sticky top-0'
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    Admin Profile
                </motion.h1>

                <div className="flex flex-col items-center justify-start min-h-[80vh]">
                    {/* Avatar Section */}
                    <motion.div
                        className='flex flex-col justify-center items-center gap-3  bg-[#F9F9F9] w-2/3 py-5 rounded-md'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className='relative'>
                            <Image
                                src={previewImage}
                                width={100}
                                height={100}
                                alt="Profile Picture"
                                className='rounded-full object-cover w-24 h-24'
                            />

                            <div
                                onClick={() => fileInputRef.current?.click()}
                                className='absolute flex justify-center items-center p-1.5 w-8 h-8 border-2 border-white bg-[#DF5800] rounded-full top-16 -right-2 cursor-pointer'
                            >
                                <FiCamera size={22} color='#fff' />
                            </div>
                        </div>
                        <h1 className='text-2xl font-medium'>{user?.name}</h1>
                        <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            ref={fileInputRef}
                            onChange={handleImageChange}
                        />
                    </motion.div>

                    {/* Tabs */}
                    <div className="flex gap-6 py-6 w-full justify-center items-center">
                        <button
                            onClick={() => setActiveTab('profile')}
                            className={`pb-1 border-b-2 cursor-pointer ${activeTab === 'profile'
                                ? 'border-[#DF5800] text-[#DF5800] font-semibold'
                                : 'border-transparent text-gray-600'
                                }`}
                        >
                            Edit Profile
                        </button>
                        <button
                            onClick={() => setActiveTab('password')}
                            className={`pb-1 border-b-2 cursor-pointer ${activeTab === 'password'
                                ? 'border-[#DF5800] text-[#DF5800] font-semibold'
                                : 'border-transparent text-gray-600'
                                }`}
                        >
                            Change Password
                        </button>
                    </div>

                    {/* Forms */}
                    <div className='bg-[#F9F9F9] w-2/3 flex justify-center items-center rounded-md py-5'>
                        <div className="w-md rounded-lg">
                            <AnimatePresence mode="wait">
                                {activeTab === 'profile' && (
                                    <motion.div
                                        key="profile-tab"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <EditProfiletab {...{ activeTab, handleSubmit, onSubmitProfile, register }} />
                                    </motion.div>
                                )}

                                {activeTab === 'password' && (
                                    <motion.div
                                        key="password-tab"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <EditPassTab {...{ activeTab, handleSubmit, onSubmitPassword, register }} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
};

export default Page;

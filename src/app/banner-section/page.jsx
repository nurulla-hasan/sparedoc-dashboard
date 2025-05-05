'use client'
import PageContainer from '@/components/container/PageContainer';
import { heroData as initialHeroData } from '@/data/data';
import Image from 'next/image';
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from 'react';
import EditBannerModal from '@/components/modal/banner-modal/EditBannerModal';

const BannerPage = () => {
    const [banners, setBanners] = useState(initialHeroData);
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        voucher: '',
        image: '',
    });

    const handleEdit = (index) => {
        setEditIndex(index);
        setFormData(banners[index]);
        setIsEditing(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        if (!formData.title || !formData.voucher || !formData.image) {
            alert("All fields are required!");
            return;
        }

        if (editIndex !== null) {
            const updated = [...banners];
            updated[editIndex] = formData;
            setBanners(updated);
        } else {
            setBanners([...banners, formData]);
        }

        setIsEditing(false);
        setEditIndex(null);
        setFormData({ title: '', voucher: '', image: '' });
    };

    return (
        <PageContainer>
            <div className='p-4 bg-white min-h-[85vh]'>
                <h2 className="text-xl font-medium text-gray-800">Home & Account Hero Banner</h2>

                <div className='h-auto'>
                    <div className='mt-16 flex justify-center gap-5 flex-wrap'>
                        {
                            banners.map((hero, idx) => (
                                <div key={idx} className='flex flex-col gap-4 justify-center w-fit'>
                                    <h1 className='text-2xl font-semibold text-center'>{hero.title}</h1>
                                    <div className='relative flex flex-col items-center w-fit space-y-4'>
                                        <div className='relative'>
                                            <div className='absolute top-20 left-6 space-y-5 z-10'>
                                                <h1 className='text-2xl font-semibold text-white'>{hero.voucher}</h1>
                                                <button className='flex items-center gap-1 cursor-pointer text-white'>
                                                    <span>Shop Now</span>
                                                    <FaArrowRightLong />
                                                </button>
                                            </div>
                                            <Image
                                                src={hero.image}
                                                width={500}
                                                height={500}
                                                alt='banner-image'
                                                className='rounded-xl w-[500px] h-[250px]'
                                            />
                                            <div className='absolute inset-0 bg-gradient-to-r from-[#b24700]/60 to-transparent rounded-xl'></div>
                                        </div>

                                        <p className='text-lg font-medium text-center'>Spare Parts</p>
                                        <button
                                            className='bg-[#DF5800] py-2 w-52 text-white rounded cursor-pointer'
                                            onClick={() => handleEdit(idx)}
                                        >
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* Modal */}
                <EditBannerModal {...{ isEditing, setIsEditing, editIndex, handleChange, setFormData, handleSave, formData }} />
            </div>
        </PageContainer>
    );
};

export default BannerPage;

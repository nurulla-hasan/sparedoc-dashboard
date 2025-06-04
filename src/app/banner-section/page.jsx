'use client'
import PageContainer from '@/components/container/PageContainer';
import { heroData as initialHeroData } from '@/data/data';
import Image from 'next/image';
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from 'react';
import EditBannerModal from '@/components/modal/banner-modal/EditBannerModal';

// Dnd-kit 
import {
    DndContext,
    closestCenter,
    useSensor,
    useSensors,
    PointerSensor
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    useSortable,
    verticalListSortingStrategy
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { FaToggleOn, FaToggleOff } from 'react-icons/fa';


// SortableBanner
const SortableBanner = ({ id, banner, index, onEdit, onToggle }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners} className='flex flex-col gap-4 justify-center w-fit'>
            <h1 className='text-2xl font-semibold text-center'>{banner.title}</h1>
            <div className='relative flex flex-col items-center w-fit space-y-4'>
                <div className='relative'>
                    <div className='absolute top-20 left-6 space-y-5 z-10'>
                        <h1 className='text-2xl font-semibold text-white'>{banner.voucher}</h1>
                        <button className='flex items-center gap-1 cursor-pointer text-white'>
                            <span>Shop Now</span>
                            <FaArrowRightLong />
                        </button>
                    </div>
                    <Image
                        src={banner.image}
                        width={500}
                        height={500}
                        alt='banner-image'
                        className='rounded-xl w-[500px] h-[250px]'
                    />
                    <div className='absolute inset-0 bg-gradient-to-r from-[#b24700]/60 to-transparent rounded-xl'></div>
                </div>

                <div className='flex items-center gap-2'>
                    <p className='text-lg font-medium text-center'>Spare Parts</p>
                    {/* Toggle */}
                    <button
                        className='cursor-pointer'
                        onClick={(e) => {
                            e.stopPropagation();
                            if (e.nativeEvent) e.nativeEvent.stopImmediatePropagation();
                            onToggle(index);
                        }}
                    >
                        {banner.enabled ? (
                            <FaToggleOn size={28} className='text-green-500' />
                        ) : (
                            <FaToggleOff size={28} className='text-gray-400' />
                        )}
                    </button>
                </div>

                <div className='flex gap-2'>
                    <button
                        className='bg-button py-2 px-8 text-white rounded-xs cursor-pointer'
                        onClick={(e) => {
                            e.stopPropagation();
                            if (e.nativeEvent) e.nativeEvent.stopImmediatePropagation();
                            onEdit(index);
                        }}
                    >
                        Edit
                    </button>
                </div>
            </div>
        </div>
    );
};

const BannerPage = () => {
    const [banners, setBanners] = useState(initialHeroData.map(b => ({ ...b, enabled: b.enabled !== undefined ? b.enabled : true })));
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        voucher: '',
        image: '',
    });
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                delay: 100,
                tolerance: 5,
            },
        })
    );

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
            updated[editIndex] = { ...formData, enabled: banners[editIndex].enabled };
            setBanners(updated);
        } else {
            setBanners([...banners, { ...formData, enabled: true }]);
        }

        setIsEditing(false);
        setEditIndex(null);
        setFormData({ title: '', voucher: '', image: '' });
    };

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active.id !== over?.id) {
            const oldIndex = banners.findIndex(b => b.title === active.id);
            const newIndex = banners.findIndex(b => b.title === over?.id);
            setBanners((items) => arrayMove(items, oldIndex, newIndex));
        }
    };

    // Enable/Disable
    const handleToggle = (index) => {
        const updated = [...banners];
        updated[index].enabled = !updated[index].enabled;
        setBanners(updated);
    };

    return (
        <PageContainer>
            <div className='p-4 bg-white min-h-[85vh]'>
                <h2 className="text-xl font-medium text-gray-800">Home & Account Hero Banner</h2>

                <div className='h-auto'>
                    <div className='mt-16 flex justify-center gap-5 flex-wrap'>
                        {/* Dnd-kit Context এবং SortableContext */}
                        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                            <SortableContext items={banners.map(b => b.title)} strategy={verticalListSortingStrategy}>
                                {
                                    banners.map((banner, idx) => (
                                        <SortableBanner
                                            key={banner.title}
                                            id={banner.title}
                                            banner={banner}
                                            index={idx}
                                            onEdit={handleEdit}
                                            onToggle={handleToggle}
                                        />
                                    ))
                                }
                            </SortableContext>
                        </DndContext>
                    </div>
                </div>

                {/* Modal */}
                <EditBannerModal {...{ isEditing, setIsEditing, editIndex, handleChange, setFormData, handleSave, formData }} />
            </div>
        </PageContainer>
    );
};

export default BannerPage;
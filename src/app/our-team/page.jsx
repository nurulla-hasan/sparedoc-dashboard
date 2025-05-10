'use client'

import Image from "next/image";
import { LuTwitter } from "react-icons/lu";
import { IoLogoInstagram } from "react-icons/io5";
import { RiLinkedinLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import Link from "next/link";
import { teamMembers } from "@/data/data";
import { useState } from "react";
import EditMember from "@/components/modal/member-edit-modal/EditMember";

const OurTeam = () => {
    const [members, setMembers] = useState(teamMembers);
    const [editingMember, setEditingMember] = useState(null);

    const [form, setForm] = useState({
        name: '',
        position: '',
        twitter: '',
        instagram: '',
        linkedin: '',
    });

    const handleEdit = (member) => {
        setEditingMember(member);
        setForm({
            name: member.name,
            position: member.position,
            twitter: member.twitter,
            instagram: member.instagram,
            linkedin: member.linkedin,
        });
    };

    const handleSave = () => {
        const updated = members.map((membar) =>
            membar.id === editingMember.id ? { ...membar, ...form } : membar
        );
        setMembers(updated);
        setEditingMember(null);
    };

    return (
        <div className="text-[#333333] p-5">
            <div className="bg-white p-5 h-[85vh] flex flex-col justify-between">
                <div className="flex flex-col justify-between gap-6">
                    <div>
                        <h2 className="text-xl font-medium text-gray-800 mb-6">Our Team Member</h2>
                    </div>

                    <div className="flex gap-8 flex-wrap">
                        {members.map((member) => (
                            <div key={member.id} className="space-y-4 relative">
                                <div className="bg-[#fcceb023] rounded-sm h-fit w-fit flex justify-center px-10 pt-5">
                                    <Image
                                        src={member?.image || '/images/placeholder.png'}
                                        width={200}
                                        height={800}
                                        alt="Team Member"
                                        className=""
                                    />
                                </div>
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-medium">{member.name}</h1>
                                    <p className="text-sm">{member.position}</p>
                                    <div className="flex items-center gap-3">
                                        <Link href={member?.twitter}><LuTwitter size={20} /></Link>
                                        <Link href={member?.instagram}><IoLogoInstagram size={20} /></Link>
                                        <Link href={member?.linkedin}><RiLinkedinLine size={20} /></Link>
                                    </div>
                                </div>
                                <span
                                    className="absolute top-2 right-2 text-button/70 cursor-pointer"
                                    onClick={() => handleEdit(member)}
                                >
                                    <FaRegEdit size={20} />
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Edit Modal */}
            <EditMember {...{editingMember, setForm, setEditingMember, handleSave, form}}/>
        </div>
    );
};

export default OurTeam;

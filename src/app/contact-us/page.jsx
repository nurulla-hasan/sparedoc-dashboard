"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { LiaPhoneSolid } from "react-icons/lia";
import { LuFacebook } from "react-icons/lu";
import { PiTiktokLogoLight } from "react-icons/pi";
import { TfiTwitter } from "react-icons/tfi";

const Terms = () => {
  const [contactInfo, setContactInfo] = useState({
    phone: "+0123456789",
    email: "hatem@gmail.com",
    facebook: "www.facebook.com/hatem040",
    twitter: "www.twitter.com/hatem040",
    instagram: "www.instagram.com/hatem040",
    linkedin: "www.linkedin.com/in/hatem040",
    tiktok: "www.tiktok.com/in/hatem040",
  });

  const contactFields = [
    { name: "phone", icon: <LiaPhoneSolid size={25} /> },
    { name: "email", icon: <AiOutlineMail size={25} /> },
    { name: "facebook", icon: <LuFacebook size={25} /> },
    { name: "twitter", icon: <TfiTwitter size={25} /> },
    { name: "instagram", icon: <FaInstagram size={25} /> },
    { name: "linkedin", icon: <FiLinkedin size={25} /> },
    { name: "tiktok", icon: <PiTiktokLogoLight size={25} /> },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("Saved Contact Info:", contactInfo);
    toast.success('Contacts save successfully');
  };

  return (
    <div className="space-y-4 text-[#333333] m-5">
      <div className="flex flex-col justify-between gap-6 h-[85vh]">
        <div>
          <h2 className="text-xl font-medium text-gray-800 mb-6">Contact US</h2>

          <div className="space-y-4">
            {contactFields.map(({ name, icon }) => (
              <div key={name} className="flex items-center border border-[#FCCEB0] rounded-xl overflow-hidden w-2/8">
                <div className="bg-[#FCCEB0] p-2 text-white">
                  <div className="bg-[#DF5800] rounded-full p-2">
                    {icon}
                  </div>
                </div>
                <input
                  type="text"
                  name={name}
                  value={contactInfo[name]}
                  onChange={handleChange}
                  className="w-full p-3 outline-none"
                /> 
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center sticky bottom-0 bg-[#f8f8f8] py-2">
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-[#DF5800] text-white rounded-md hover:bg-[#b84900] transition cursor-pointer"
          >
            Save & Change
          </button>
        </div>
      </div>
    </div>
  );
};

export default Terms;

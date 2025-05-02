import Link from 'next/link';
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { LuSettings } from 'react-icons/lu';
import { VscSignOut } from "react-icons/vsc";
import { useDispatch } from 'react-redux';
import { logout } from '@/redux/features/authSlice';
import { useRouter } from 'next/navigation';

const Sidebar = ({ isHideLayout, menuItems, setSettingsOpen, settingsOpen, settingMenu, pathname, }) => {

    const router = useRouter()
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        router.push('/auth/login')
    }

    return (
        <>
            <aside className={`${isHideLayout ? "hidden" : ""} w-62 flex flex-col justify-between pb-10 bg-[#FDFDFD]`}>
                <div>
                    {/* Logo */}
                    <Link href="/">
                        <div className="flex items-center justify-center pt-5 p-7">
                            <img src="/images/logo.svg" alt="Logo" />
                        </div>
                    </Link>

                    {/* Navigation */}
                    <nav className="flex flex-col gap-2 pl-5 font-medium">
                        {menuItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={`pl-4 py-3 rounded-l-full transition-all duration-300 ${isActive
                                        ? "bg-[#F27405] text-white"
                                        : "text-[#5C5C5C] hover:bg-[#F27405] hover:text-white"
                                        }`}
                                >
                                    <span className='flex items-center gap-2 text-sm'>
                                        {item.icon}
                                        {item.label}
                                    </span>
                                </Link>
                            );
                        })}

                        {/* Settings dropdown */}
                        <div>
                            <button
                                onClick={() => setSettingsOpen(!settingsOpen)}
                                className={`w-full cursor-pointer text-left pl-4 px-2 py-3 rounded-l-full text-[#333333] flex justify-between items-center transition-all duration-300 ${settingsOpen ? "bg-[#F27405] text-white" : ""}`}
                            >
                                <p className='flex items-center gap-2 text-sm'>
                                    <LuSettings size={20} />
                                    <span>Settings</span>
                                </p>
                                <span>{settingsOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
                            </button>

                            <AnimatePresence initial={false}>
                                {settingsOpen && (
                                    <motion.div
                                        className="flex flex-col gap-1 pl-5 mt-1 font-medium"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        {settingMenu.map((item) => {
                                            const isActive = pathname === item.href;
                                            return (
                                                <Link
                                                    key={item.label}
                                                    href={item.href}
                                                    className={`pl-4 py-1.5 text-lg text-center rounded-l-full transition-colors duration-200 ${isActive
                                                        ? "bg-[#FCCEB0] text-[#5C5C5C]"
                                                        : "text-[#5C5C5C] hover:bg-[#FCCEB0] hover:text-[#333333]"
                                                        }`}
                                                >
                                                    <span className='text-sm'>{item.label}</span>
                                                </Link>
                                            );
                                        })}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </nav>
                </div>

                <button
                    onClick={handleLogout}
                    className="text-[#F27405] bg-[#FEFEFE] text-sm py-3 flex gap-2 pl-6 mx-2 items-center cursor-pointer">
                    <VscSignOut size={25} />
                    <span className='font-medium text-md'>Log out</span>
                </button>
            </aside>
        </>
    );
};

export default Sidebar;
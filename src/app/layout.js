"use client";
import './globals.css';
import { useState } from "react";
import { usePathname } from "next/navigation";
import { LuBookUser, LuLayoutDashboard } from "react-icons/lu";
import { AiOutlineUser } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { TfiBlackboard } from "react-icons/tfi";
import { MdOutlineCategory } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import Topbar from '@/components/layout/Topbar';
import PrivateRoute from '@/components/privet-route/PrivetRoute';
import Sidebar from '@/components/layout/Sidebar';

const menuItems = [
  { label: "Dashboard", href: "/", icon: <LuLayoutDashboard size={20} /> },
  { label: "Orders", href: "/orders", icon: <BsCartCheck size={20} /> },
  { label: "User Details", href: "/user-details", icon: <AiOutlineUser size={20} /> },
  { label: "Sellers Details", href: "/sellers-details", icon: <LuBookUser size={20} /> },
  { label: "Category", href: "/categories", icon: <MdOutlineCategory size={20} /> },
  { label: "Payment", href: "/payments", icon: <GiTakeMyMoney size={20} /> },
  { label: "Banner Section", href: "/banner-section", icon: <TfiBlackboard size={20} /> },
];
const settingMenu = [
  { label: "Profile", href: "/profile" },
  { label: "Contact-US", href: "/contact-us" },
  { label: "About Us", href: "/about" },
];

export default function RootLayout({ children }) {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const pathname = usePathname();
  const hideRoutes = ["/auth", "/auth/login", "/auth/forgot-password", "/auth/verify-email", "/auth/reset-password"];
  const isHideLayout = hideRoutes.includes(pathname);
  return (

    <html lang="en">
      <body>
        <Provider store={store}>
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
          <div className="h-screen flex container mx-auto max-w-full bg-[#FDFDFD]">
            {/* Sidebar */}
            <Sidebar {...{isHideLayout, menuItems, setSettingsOpen, settingsOpen, settingMenu, pathname }}/>

            {/* Main content */}
            <main className="flex-1 overflow-auto scrl-hide bg-[#FDFDFD]">
              {/* Top bar */}
              <Topbar isHideLayout={isHideLayout} />

              {/* Page content */}
              <PrivateRoute>
                <div className={`font-poppins ${hideRoutes ? "" : "h-[calc(100vh-96px)]"} overflow-y-auto bg-[#F9F9F9] `}>
                  {children}
                </div>
              </PrivateRoute>
            </main>
          </div>
        </Provider>
      </body>
    </html>

  );
}

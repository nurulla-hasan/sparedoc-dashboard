"use client"
import { Toaster } from "react-hot-toast";
export default function RootLayout({ children }) {
    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="bg-[#FDFDFD]">
                {children}
            </div>
        </>
    );
}
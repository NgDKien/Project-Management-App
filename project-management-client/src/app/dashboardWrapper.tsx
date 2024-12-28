"use client";

import React, { useEffect } from "react";
// import Navbar from "@/components/Navbar";
import Navbar from "@/app/(components)/Navbar";
import Sidebar from "@/app/(components)/Sidebar";
// import Navbar from "@/app/(components)/Sidebar";
// import Sidebar from "@/components/Sidebar";
// import AuthProvider from "./authProvider";
// import StoreProvider, { useAppSelector } from "./redux";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {

    return (
        <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
            <Sidebar />
            <main
                // className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg ${
                //   isSidebarCollapsed ? "" : "md:pl-64"
                // }`}
                className="flex w-full flex-col bg-gray-50 dark:bg-dark-bg md:pl-64"
            >
                <Navbar />
                {children}
            </main>
        </div>
    );
};

// const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
//     return (
//         <StoreProvider>
//             <AuthProvider>
//                 <DashboardLayout>{children}</DashboardLayout>
//             </AuthProvider>
//         </StoreProvider>
//     );
// };

export default DashboardWrapper;
import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarLeft, SidebarRight } from "../../components";

export default function Public() {
    return (
        <div className="w-full flex bg-[#f9dbdb]">
            <div className="w-[200px] flex-none border border-blue-300">
                <SidebarLeft />
            </div>
            <div className="flex-auto border border-red-500">
                <Outlet />
            </div>
            <div className="w-[300px] flex-none border border-green-500">
                <SidebarRight />
            </div>
        </div>
    );
}

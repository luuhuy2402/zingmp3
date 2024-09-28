import React from "react";
import { Outlet } from "react-router-dom";
import { Player, SidebarLeft, SidebarRight } from "../../components";

export default function Public() {
    return (
        <div className="w-full min-h-screen flex flex-col bg-main-300">
            <div className="w-full h-full flex flex-auto">
                <div className="w-[200px] flex-none border border-blue-300">
                    <SidebarLeft />
                </div>
                <div className="flex-auto border border-red-500">
                    <Outlet />
                </div>
                <div className="w-[280px] hidden 1430:flex  flex-none  animate-slide-left">
                    <SidebarRight />
                </div>
            </div>
            <div className="flex-none h-[90px]">
                <Player />
            </div>
        </div>
    );
}

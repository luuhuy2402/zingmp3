import React from "react";
import logo from "../assets/logo.svg";
import { sidebarMenu } from "../ultis/menu";
import { NavLink } from "react-router-dom";

const notActiveStyle = 'py-2 px-[25px] font-medium flex gap-[12px] items-center text-[#5d5962] text-[14px]'
const activeStyle = 'py-2 px-[25px] font-medium flex gap-[12px] items-center text-[#b72479] text-[14px]'

export default function SidebarLeft() {
    return (
        <div className="flex flex-col h-full bg-[#fbe6e6]">
            <div className="w-full h-[70px] py-[15px] px-[25px] flex justify-start items-center">
                <img src={logo} alt="Zing mp3" className="w-[120px] h-10" />
            </div>
            <div className="flex flex-col">
                {sidebarMenu.map((item) => (
                    <NavLink
                        to={item.path}
                        key={item.path}
                        end={item.end}
                        className={({isActive}) => isActive ? activeStyle: notActiveStyle}
                    >
                        {item.icons}
                        <span>{item.text}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

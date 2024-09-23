import React from "react";
import icons from "../ultis/icons";
import { Search } from "./";

const { GoArrowLeft, GoArrowRight } = icons;
const Header = () => {
    return (
        <div className="flex justify-between w-full">
            <div className="flex gap-6  w-full items-center">
                <div className="flex gap-6 text-[#c8b1b3] ">
                    <span>
                        <GoArrowLeft size={24} />
                    </span>
                    <span>
                        <GoArrowRight size={24} />
                    </span>
                </div>
                <div className="w-1/2">
                    <Search />
                </div>
            </div>
            <div>Login</div>
        </div>
    );
};

export default Header;

import React from "react";
import icons from "../ultis/icons";

const { IoSearchOutline } = icons;
function Search() {
    return (
        <div className="w-full flex items-center relative">
            <span className="text-[#7a7979] absolute px-2  ">
                <IoSearchOutline size={24}/>
            </span>
            <input
                type="text"
                className=" outline-none bg-[#ecd0d0] px-4 pl-10 py-2 rounded-[20px] h-10 w-full text-[#3f3d3d] placeholder:text-[#7a7979] "
                placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
            />
        </div>
    );
}

export default Search;

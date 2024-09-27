import React from "react";
import { useSelector } from "react-redux";

export default function Player() {
    const { curSongId } = useSelector((state) => state.music);
    console.log(curSongId);
    return (
        <div className="bg-main-400 px-5 h-full flex ">
            <div className="w-[30%] flex-auto border border-green-100">
                Detail Song
            </div>
            <div className="w-[40%] flex-auto border border-green-100">
                Main Player
            </div>
            <div className="w-[30%] flex-auto border border-green-100">
                Volumne
            </div>
        </div>
    );
}

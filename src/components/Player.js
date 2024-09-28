import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as apis from "../apis";
import icons from "../ultis/icons";

const {
    IoMdHeart,
    IoMdHeartEmpty,
    RxDotsHorizontal,
    PiRepeatLight,
    MdSkipNext,
    MdSkipPrevious,
    MdOutlinePause,
    MdPlayArrow,
    PiShuffleLight,
} = icons;

export default function Player() {
    const audioEl = new Audio();
    const { curSongId, isPlaying } = useSelector((state) => state.music);
    const [songInfo, setSongInfo] = useState(null);
    const [source, setSource] = useState(null);

    useEffect(() => {
        const fetchDetailSong = async () => {
            const [res1, res2] = await Promise.all([
                apis.getDetailSong(curSongId),
                apis.getSong(curSongId),
            ]);

            if (res1.data.err === 0) {
                setSongInfo(res1.data.data);
            }

            if (res2.data.err === 0) {
                setSource(res2.data.data["128"]);
            }
        };
        fetchDetailSong();
    }, [curSongId]);

    // useEffect(() => {
    //     audioEl.play();
    // }, [curSongId]);

    const handleTogglePlayMusic = () => {
        // setIsPlaying((prev) => !prev);
    };
    return (
        <div className="bg-main-400 px-5 h-full flex ">
            <div className="w-[30%] flex-auto flex items-center gap-3 ">
                <img
                    src={songInfo?.thumbnail}
                    alt="thumbnail"
                    className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex flex-col">
                    <span className="font-semibold text-[#403c46] text-sm">
                        {songInfo?.title}
                    </span>
                    <span className="text-xs text-[#877c7c]">
                        {songInfo?.artistsNames}
                    </span>
                </div>
                <div className="flex gap-4 pl-7">
                    <span>
                        <IoMdHeartEmpty size={16} />
                    </span>
                    <span>
                        <RxDotsHorizontal size={16} />
                    </span>
                </div>
            </div>
            <div className="w-[40%] flex-auto flex flex-col items-center justify-center gap-2  py-2">
                <div className="flex gap-8 items-center justify-center">
                    <span
                        title="Bật phát ngẫu nhiên "
                        className="cursor-pointer"
                    >
                        <PiShuffleLight size={22} />
                    </span>
                    <span className="cursor-pointer">
                        <MdSkipPrevious size={28} />
                    </span>
                    <span
                        className=" p-1 border border-[#5a5058] rounded-full hover:text-main-600 hover:border-main-600 cursor-pointer"
                        onClick={handleTogglePlayMusic}
                    >
                        {isPlaying ? (
                            <MdOutlinePause size={28} />
                        ) : (
                            <MdPlayArrow size={28} />
                        )}
                    </span>
                    <span className="cursor-pointer">
                        <MdSkipNext size={28} />
                    </span>
                    <span
                        title="Bật phát lại tất cả"
                        className="cursor-pointer"
                    >
                        <PiRepeatLight size={22} />
                    </span>
                </div>
                <div className="">progress bar</div>
            </div>
            <div className="w-[30%] flex-auto border border-green-100">
                Volumne
            </div>
        </div>
    );
}

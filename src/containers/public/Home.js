import React from "react";
import { Header,Slider } from "../../components";

export default function Home() {
    return (
        <div className="overflow-y-auto  w-full">
            <div className="h-[70px]  px-[50px] flex items-center">
                <Header />
                
            </div>
            <Slider/>
        </div>
    );
}

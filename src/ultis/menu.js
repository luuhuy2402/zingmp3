import icons from "./icons"

const {MdOutlineLibraryMusic,MdOutlineDynamicFeed,VscPieChart,TbChartArcs} = icons

export const sidebarMenu = [
    {
        path:'mymusic',
        text:'Thư Viện',
        icons: <MdOutlineLibraryMusic size={24}/>
    },
    {
        path:'',
        text:'Khám Phá',
        end:true,
        icons: <TbChartArcs size={24}/>
    },
    {
        path:'zing-chart',
        text:'#zingchart',
        icons: <VscPieChart size={24}/>
    },
    {
        path:'follow',
        text:'Theo Dõi',
        icons: <MdOutlineDynamicFeed size={24}/>
    },
]
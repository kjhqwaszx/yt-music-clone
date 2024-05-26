import {ReactNode} from "react";
import {FiBarChart, FiMusic, FiSmile} from "react-icons/fi";

export default function Category(){
    return (
        <div className="flex flex-col gap-4 w-full lg:flex-row">
            <CategoryMenu label="최신음악" icon={<FiMusic color="#AAAAAA"/>}></CategoryMenu>
            <CategoryMenu label="차트" icon={<FiBarChart color="#AAAAAA"/>}></CategoryMenu>
            <CategoryMenu label="분위기 및 장르" icon={<FiSmile color="#AAAAAA"/>}></CategoryMenu>
        </div>
    )
}

type CMProp ={
    icon: ReactNode
    label: string
}
const CategoryMenu = ({icon, label}: CMProp) =>{
    return(
      <div className="w-full h-[56px] py-4 px-[24px] flex flex-row gap-4 items-center bg-neutral-700 text-[20px] cursor-pointer rounded-sm hover:bg-neutral-800 transition">
          {icon}
          {label}
      </div>
    )
}
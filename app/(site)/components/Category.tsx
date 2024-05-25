'use client'

import useUIState from "@/components/store/useUIState";
import {homeCategoryList} from "@/lib/dummyData";
import {Category} from "@/model/category"
import {cn} from "@/lib/utils";

export default function Category(){

  const {homeCategory, setHomeCategory, setHeaderImageSrc} = useUIState()

  const onCLickCategory = (item: Category) =>{
    if(homeCategory === item.label){
      console.log('$$$1: ', item.label)
      // 동일한 카테고리 선택 시, 해제
      setHeaderImageSrc("")
      setHomeCategory("")
    }else{
      console.log('$$$2: ', item.label)
      setHeaderImageSrc(item.src)
      setHomeCategory(item.label)

    }
  }
  return (
    <ul className="max--w-full overflow-x-auto flex flex-row gap-4 scr">
      {
        homeCategoryList.map((item)=>{
          return (
            <li key={item.label} className={cn("h-[38px] min-w-fit px-3 flex justify-center items-center border border-transparent rounded-lg bg-[rgba(144,144,144,0.2)] hover:bg-[rgba(144,144,144,0.45)] cursor-pointer", item.label === homeCategory && "bg-white text-black hover: bg-white")}
                onClick={() => onCLickCategory(item)}
            >
              {item.label}
            </li>
          )
        })
      }
    </ul>
  )


}
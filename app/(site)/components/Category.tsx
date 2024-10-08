'use client'

import {homeCategoryList} from '@/lib/dummyData';
import {cn} from '@/lib/utils';
import useUIState from '@/hooks/useUIState';

export default function Category(){
  const { homeCategory, setHomeCategory, setHeaderImageSrc } = useUIState()

  const onClickCategory = (item: any) => {
    if(homeCategory === item){
      setHeaderImageSrc("")
      setHomeCategory("")
    }else{
      setHeaderImageSrc(item?.src)
      setHomeCategory(item?.label)
    }
  }

  return (
    <ul className='max-w-full overflow-x-auto flex flex-row gap-4'>
      {
        homeCategoryList.map((item)=>{
          return (
            <li key={item.label} onClick={() => onClickCategory(item)}
                className={cn('h-[38px] min-w-fit px-3 flex justify-center items-center border border-transparent rounded-lg bg-[rgba(144,144,144,0.2)] hover:bg-[rgba(144,144,144,0.45)] cursor-pointer', item.label === homeCategory && 'bg-white text-black hover:bg-white' )}>
              {item.label}
            </li>
          )
        })
      }
    </ul>
  )


}
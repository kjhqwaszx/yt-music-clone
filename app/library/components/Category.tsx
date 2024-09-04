'use client'

import {libraryCategoryList} from '@/lib/dummyData';
import {cn} from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel, DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {useState} from 'react';
import {AiFillCaretDown} from 'react-icons/ai';
import {LibrarySortOption} from '@/app/library/constant/constLibrary';
import {FiCheck} from 'react-icons/fi';
import useUIState from '@/hooks/useUIState';

export default function Category(){

  const { libraryCategory, setLibraryCategory, setHeaderImageSrc } = useUIState()

  const [selectedOption, setSelectedOption] = useState('최근 활동')

  const onClickCategory = (item: any) => {
    if(libraryCategory === item){
      setHeaderImageSrc("")
      setLibraryCategory("")
    }else{
      setHeaderImageSrc(item?.src)
      setLibraryCategory(item?.label)
    }
  }

  return (
    <div className='flex flex-row justify-between items-center gap-4 flex-wrap'>
      <ul className='max-w-full overflow-x-auto flex flex-row gap-4'>
        {
          libraryCategoryList.map((item) => {
            return (
              <li key={item.label} onClick={() => onClickCategory(item)}
                  className={cn('h-[38px] min-w-fit px-3 flex justify-center items-center border border-transparent rounded-lg bg-[rgba(144,144,144,0.2)] hover:bg-[rgba(144,144,144,0.45)] cursor-pointer', item.label === libraryCategory && 'bg-white text-black hover:bg-white')}>
                {item.label}
              </li>
            )
          })
        }
      </ul>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className='w-[162px] h-[42px] flex flex-row justify-between items-center p-4 bg-neutral-700 border border-neutral-600 rounded-3xl text-[14px] '>
              <div>최근활동</div>
              <AiFillCaretDown/>
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-[220px] bg-neutral-800" align='end' >
            <DropdownMenuLabel className='p-2'>정렬기준</DropdownMenuLabel>

            <DropdownMenuSeparator className='bg-neutral-700' />

            {
              LibrarySortOption?.map((option, index)=> {
                return (
                  <DropdownMenuCheckboxItem
                    onCheckedChange={()=> setSelectedOption(option)}
                    className='p-2'
                    key={index}
                  >
                    <span className='min-w-[40px]'>
                      {selectedOption === option && <FiCheck size={20} />}
                    </span>
                    {option}
                  </DropdownMenuCheckboxItem>
                  )
              })
            }
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
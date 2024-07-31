import {ReactNode} from 'react';

type Props={
  icon: ReactNode;
  label: string;
}
export default function CategoryMenu({icon, label}: Props){
  return (
    <div className='w-full h-[56px] py-4 px-[24px] flex flex-row gap-4 items-center bg-neutral-700 text-[20px] cursor-pointer rounded-sm hover:bg-neutral-800 transition'>
      {icon}
      {label}
    </div>
  )
}
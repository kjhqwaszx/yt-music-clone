import {ReactNode} from 'react';
import {cn} from '@/lib/utils';

type Props={
  icon?: ReactNode
  label?: string
  className?: any
  onClick?: () => void
}

export default function WhiteButton({onClick, icon, label, className, ...props}: Props){
  return (
    <div onClick={onClick} className={cn('bg-white text-black rounded-2xl flex flex-row justify-center items-center min-w-[80px] h-[36px] p-4 gap-2 cursor-pointer hover:bg-neutral-700', className)} {...props} >
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  )
}
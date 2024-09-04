'use client'

import {cn} from '@/lib/utils';
import {ReactNode} from 'react';

type Props={
  icon?: ReactNode
  label?: string
  className?: any
}

export default function DarkButton({icon, label, className, ...props}: Props) {
  return (
    <div
      className={cn('bg-black text-white rounded-2xl flex flex-row justify-center items-center min-w-[80px] h-[36px] p-4 gap-2 cursor-pointer hover:bg-neutral-700 border border-neutral-700', className)} {...props} >
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  )
}
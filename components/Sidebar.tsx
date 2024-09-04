'use client'
import React, {ReactNode} from "react";
import Logo from "@/components/element/Logo";
import Navigator from '@/components/element/Navigator';
import usePlayerState from '@/hooks/usePlayerState';
import {cn} from '@/lib/utils';

type Props = {
  children: ReactNode
}
export default function Sidebar({children}:Props){
  const {isVisiblePlayer} = usePlayerState();
  return(
    <div className={cn("flex flex-row h-full", isVisiblePlayer && "h-[calc(100vh-72px)]")}>
      {/* Sidebar */}
      {/* 모바일 환경에서는 Side Bar hidden, Pc 환경에서는 On */}
      <nav className="hidden lg:block w-[240px] border-r-[1px] border-neutral-600">
        <div className="p-[24px]">
          {/*<Logo/>*/}
        </div>
        <div>
          <Navigator/>
        </div>
      </nav>
      {/*Page Contents*/}
      <div className="w-full lg:w-[calc(100%-240px)]">
        {children}
      </div>
    </div>

  )
}

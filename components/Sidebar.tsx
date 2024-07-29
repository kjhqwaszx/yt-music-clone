import React, {ReactNode} from "react";
import Logo from "@/components/element/Logo";
import Navigator from '@/components/element/Navigator';

type Props = {
  children: ReactNode
}
export default function Sidebar({children}:Props){
  return(
    <div className="flex flex-row h-full">
      {/* 모바일 환경에서는 Side Bar hidden, Pc 환경에서는 On */}
      <nav className="w-[240px] border-r-[1px] border-neutral-600">
        <div className="p-[24px]">
          <Logo/>
        </div>
        <div>
          <Navigator/>
        </div>
      </nav>
      <div className="w-full lg:w-[calc(100%-240px)]">
        {children}
      </div>
    </div>

  )
}

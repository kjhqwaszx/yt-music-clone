import React, {ReactNode} from "react";
import Navigator from "@/components/element/Navigator";
import Logo from "@/components/element/Logo";

type Props = {
  children: ReactNode
}
export default function Sidebar({children}:Props){
  return(
    <div className="flex flex-row h-full">
      <nav className="w-[240px] border-r-[1px] border-neutral-600">
        <div className="p-[24px]">
          <Logo/>
        </div>
        <Navigator/>
      </nav>
      <div className="flex-1">
        {children}
      </div>

    </div>

  )
}


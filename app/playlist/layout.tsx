import {ReactNode} from "react";
import Header from "@/components/Header";

type Prop={
  children: ReactNode
}
export default function layout({children}: Prop){
  return(
    <div className="w-full h-full">
      <Header>
        {children}
      </Header>
    </div>
  )
}
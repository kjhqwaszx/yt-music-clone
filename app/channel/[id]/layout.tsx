import {ReactNode} from "react";

type Prop={
  children: ReactNode
}
export default function layout({children}: Prop){
  return(
    <div className="w-full h-full">
      {children}
    </div>
  )
}
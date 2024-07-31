import {ReactNode} from "react";

type Prop={
  children: ReactNode
}
export default function layout({children}: Prop){
  return(
    <>
      {children}
    </>
  )
}
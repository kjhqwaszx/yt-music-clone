import {ReactNode} from "react";

type Prop={
  children: ReactNode
}
export default function PagePadding({children}: Prop) {
  // pc 에서는 px-100px
  return(
    <div className="mx-auto px-[10px] py-2 lg:px-[100px]">
      {children}
    </div>
  )

}
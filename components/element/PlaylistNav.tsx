'use client'
import {Playlist} from "@/model/playlist";
import {IoMdPlayCircle} from "react-icons/io";

type Prop={
  playlist: Playlist
}
export default function PlaylistNav({playlist}: Prop){
  const onClickPlay = () =>{
    // todo play music
  }

  return(
    <li className="mx-3 px-4 h-[56px] flex flex-row justify-between items-center hover:bg-neutral-700 rounded-lg group">
      <div>
        <div className="text-[14px]">{playlist.playlistName}</div>
        <div className="text-[12px] text-neutral-500">{playlist.owner}</div>
      </div>


      <div>
        <div onClick={onClickPlay} className="hidden group-hover:block cursor-pointer">
          <IoMdPlayCircle size={30}/>
        </div>
      </div>
    </li>
  )

}
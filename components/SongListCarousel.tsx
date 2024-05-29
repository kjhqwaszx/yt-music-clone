import {ReactNode} from "react";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {TopSong} from "@/model/song";
import {chunkArray} from "@/lib/utils";
import SongCard from "@/components/SongCard";

type Prop ={
  title: string;
  subTitle?: string;
  Thumbnail?: ReactNode;
  songListTop10: TopSong[]

}

export default function SongListCarousel({title, subTitle, Thumbnail, songListTop10}: Prop){

  // [1,2,3 ... 10] -> [[1,2,3,4],[5,6...],[9,10]] 형태로 전환,, 한 컬럼에 4개씩 노출되기 때문.
  const chunkedTop10SongList = chunkArray(songListTop10, 4) as TopSong[][]

    return (
      <div className="w-full">
        <Carousel>
          <div className="flex flex-row justify-between items-end my-2">
            <article className="flex flex-row gap-3">
              {Thumbnail}
              <div className="flex flex-col justify-center">
                <div>
                  {subTitle&& <div className="text-neutral-500"> {subTitle} </div>}
                </div>
                <div className="text-[34px] font-bold leading-[34px]">
                  {title}
                </div>
              </div>

            </article>
            <div className="relative left-[-45px]">
              <div className="absolute bottom-[20px]">
                <CarouselPrevious className="right-2"/>
                <CarouselNext className="left-2"/>
              </div>
            </div>
          </div>
          <CarouselContent className="mt-4">
            {
              chunkedTop10SongList.map((songList, index)=>{
                  return(
                    <CarouselItem key={index} className="lg:basis-1/2">
                      <SongColumn songList={songList}/>
                    </CarouselItem>
                  )
              })
            }
          </CarouselContent>

        </Carousel>
      </div>
    )
}

const SongColumn = ({songList = []}: {songList: TopSong[]}) => {
  return(
    <div className="flex flex-col gap-4">
      {
        songList.map((song, index) => {
          return <SongCard song={song} key={index}/>
        })
      }
    </div>
  )
}
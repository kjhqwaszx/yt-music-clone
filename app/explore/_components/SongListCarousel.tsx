import {ReactNode} from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import SongListCard from '@/app/explore/_components/SongColumn'
import {TopSong} from '@/model/song';
import {chunkArray} from '@/lib/utils';



type SongListCarouselProps = {
  title: string;
  subTitle?: string;
  thumbnail?: ReactNode;
  songListTop10: TopSong[]

}
export default function SongListCarouselProps({title, subTitle, thumbnail, songListTop10}: SongListCarouselProps) {
  const chunkedTop10SongList = chunkArray(songListTop10,4) as TopSong[][]

  return(
    <div className='w-full'>
      <Carousel
        opts={{
          align: "start",
        }}
      >
        <div className='flex flex-row justify-between items-end'>
          <article className='flex flex-row gap-3 justify-between items-center'>
            {thumbnail}
            <div className='flex flex-col justify-center'>
              <div>
                {subTitle && <div className='text-neutral-500'>{subTitle}</div>}
              </div>
              <div className='text-[34px] font-bold leading-[34px]'>{title}</div>
            </div>
          </article>

          <div className='relative'>
            <div className='absolute left-[-45px] bottom-[20px]'>
              <CarouselPrevious className='right-2'/>
              <CarouselNext className='left-2'/>
            </div>

          </div>
        </div>

        <CarouselContent className='mt-5'>
          {
            chunkedTop10SongList?.map((topSong, index)=>{
              return(
                <CarouselItem key={index} className=" sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 " >
                  <SongListCard topSong={topSong}/>
                </CarouselItem>
              )
            })
          }
        </CarouselContent>
      </Carousel>
    </div>
  )
}
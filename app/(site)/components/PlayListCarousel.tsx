import {ReactNode} from 'react';
import {Playlist} from '@/model/playlist';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import PlayListCard from '@/app/(site)/components/PlayListCard';



type PhotoListCarouselProps = {
  title: string;
  subTitle?: string;
  thumbnail?: ReactNode;
  playlistArray?: Playlist[]

}
export default function PlayListCarousel({title, subTitle, thumbnail, playlistArray}: PhotoListCarouselProps) {
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
            playlistArray?.map((playlist, index)=>{
              return(
                <CarouselItem key={index} className=" sm:basis-1/2 md:basis-1/4 lg:basis-1/5" >
                  <PlayListCard playlist={playlist}/>
                </CarouselItem>
              )
            })
          }
        </CarouselContent>

      </Carousel>
    </div>
  )
}
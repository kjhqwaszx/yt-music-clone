import {ReactNode} from 'react';
import {chunkArray} from '@/lib/utils';
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from '@/components/ui/carousel';
import GenreListCard from '@/app/explore/_components/GenreColumn';

type GenreListCarouselProps = {
  title: string;
  subTitle?: string;
  thumbnail?: ReactNode;
  genreList: string[]

}

export default function GenreListCarousel({title, subTitle, thumbnail, genreList}: GenreListCarouselProps){
  const chunkedGenreList = chunkArray(genreList,4) as string[][]
  return (
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
            chunkedGenreList?.map((genre, index) => {
              return (
                <CarouselItem key={index} className="basis-1/3 lg:basis-1/4 ">
                  <GenreListCard genreList={genre}/>
                </CarouselItem>
              )
            })
          }
        </CarouselContent>
      </Carousel>
    </div>
  )
}
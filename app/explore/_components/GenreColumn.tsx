
import GenreCard from '@/app/explore/_components/GenreCard';

export default function GenreListCard({ genreList }: {genreList: string[]}) {

  return (
    <div className='flex flex-col gap-4 '>
      {
        genreList?.map((genre, idx) => {
          return(
            <GenreCard genre={genre} key={idx} />
          )
        })
      }
    </div>
  )
}
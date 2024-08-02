
import {TopSong} from '@/model/song';
import SongCard from '@/app/explore/_components/SongCard';

export default function SongListCard({ topSong }: {topSong: TopSong[]}) {

  return (
    <div className='flex flex-col gap-4 '>
      {
        topSong?.map((song, idx) => {
          return(
            <SongCard song={song} key={idx} />
          )
        })
      }
    </div>
  )
}
import PagePadding from '@/components/PagePadding';
import Category from '@/app/explore/_components/Category';
import PlayListCarousel from '@/app/(site)/components/PlayListCarousel';
import SongListCarousel from '@/app/explore/_components/SongListCarousel';
import {dymmyGenreList, getAllPlaylist, getSongListTop10} from '@/lib/dummyData';
import GenreListCarousel from '@/app/explore/_components/GenreListCarousel';

export default async function page() {
  const [playlistArray, songListTop10] = await Promise.all([getAllPlaylist(), getSongListTop10()])

  return (
    <PagePadding>
      <div className='mt-4'/>
      <Category/>

      <div className='mt-20'/>
      <PlayListCarousel playlistArray={playlistArray} title='새 앨범 및 싱글'/>

      <div className='mt-20'/>
      <SongListCarousel songListTop10={songListTop10} title='실시간 인기곡'/>

      <div className='mt-20'/>
      <GenreListCarousel genreList={dymmyGenreList} title='분위기 및 장르'/>

      <div className='mt-40'/>
    </PagePadding>
  )

}

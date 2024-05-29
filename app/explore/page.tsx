import PagePadding from "@/components/PagePadding";
import Category from "@/app/explore/_components/Category";
import {dymmyGenreList, getAllPlaylist, getSongListTop10} from "@/lib/dummyData";
import PlayListCarousel from "@/components/PlayListCarousel";
import SongListCarousel from "@/components/SongListCarousel";
import GenreListCarousel from "@/components/GenreListCarousel";

export default async function page() {

  const playlistArray = await getAllPlaylist()
  const songListTop10 = await getSongListTop10()

  return (
    <PagePadding>
      <div className="mt-4">
        <Category/>
      </div>

      <div className="mt-20"/>

      <PlayListCarousel
        playlistArray={playlistArray}
        title="새 앨범 및 싱글"
      />
      <div className="mt-20"/>

      <SongListCarousel title="인기곡" songListTop10={songListTop10}/>
      <div className="mt-20"/>

      <GenreListCarousel genreList={dymmyGenreList} title="분위기 및 장르"/>
      <div className="mt-20"/>
      <div className="mt-20"/>
    </PagePadding>
  )

}

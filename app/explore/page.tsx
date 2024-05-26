import PagePadding from "@/components/PagePadding";
import Category from "@/app/explore/_components/Category";
import {getAllPlaylist} from "@/lib/dummyData";
import PlayListCarousel from "@/components/PlayListCarousel";

export default async function page() {

  const playlistArray = await getAllPlaylist()

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
    </PagePadding>
  )

}

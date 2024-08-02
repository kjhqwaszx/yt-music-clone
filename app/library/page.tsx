import PagePadding from '@/components/PagePadding';
import Category from '@/app/library/components/Category';
import LibraryListCard from '@/app/library/components/LibraryListCard';
import {getRandomElementFromArray} from '@/lib/utils';
import {dummyPlaylistArray} from '@/lib/dummyData';

export default function page() {

  return(
    <PagePadding>
      {/* 카테고리 */}
      <div className='mt-9'>
        <Category/>
      </div>

      <div className='mt-12'>
        <section className='grid grid-cols-3 gap-6 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
          <LibraryListCard playlist={getRandomElementFromArray(dummyPlaylistArray)}/>
          <LibraryListCard playlist={getRandomElementFromArray(dummyPlaylistArray)}/>
          <LibraryListCard playlist={getRandomElementFromArray(dummyPlaylistArray)}/>
          <LibraryListCard playlist={getRandomElementFromArray(dummyPlaylistArray)}/>
          <LibraryListCard playlist={getRandomElementFromArray(dummyPlaylistArray)}/>
          <LibraryListCard playlist={getRandomElementFromArray(dummyPlaylistArray)}/>
          <LibraryListCard playlist={getRandomElementFromArray(dummyPlaylistArray)}/>
          <LibraryListCard playlist={getRandomElementFromArray(dummyPlaylistArray)}/>
          <LibraryListCard playlist={getRandomElementFromArray(dummyPlaylistArray)}/>
        </section>
      </div>

      <div className='mt-20' />
    </PagePadding>
)

}

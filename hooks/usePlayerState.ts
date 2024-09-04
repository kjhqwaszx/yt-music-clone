import {create} from 'zustand';
import {Song} from '@/model/song';
import {dummyAllSongList} from '@/lib/dummyData';

interface PlayerState {
  isVisiblePlayer: boolean;
  setIsVisiblePlayer: (isVisible: boolean) => void;

  activeSong: Song | null;
  prevPlayerQueue: Song[];
  nextPlayerQueue: Song[];

  // 기능(재생, 다음곡, 이전곡)
  addSongList: (SongList: Song[]) => void;
  playNext: () => void
  playBack: () => void;

}

const usePlayerState = create<PlayerState>((set)=>({
  isVisiblePlayer: true,
  setIsVisiblePlayer: (isVisiblePlayer: boolean) => set({isVisiblePlayer}),

  activeSong: null,
  prevPlayerQueue: [],
  nextPlayerQueue: [],

  addSongList: (songList: Song[]) => set((prev) => {
    // 현재 재생중인 음악
    const prevSong = prev.activeSong
    const cloneSongList = [...songList]
    const currentSong = cloneSongList.splice(0,1)?.[0]

    return {
      activeSong: currentSong,
      // 현재 재생중인 노래가 있고 없는 경우 처리
      prevPlayerQueue: prevSong ? [prevSong, ...prev.prevPlayerQueue] : prev.prevPlayerQueue,
      nextPlayerQueue: [...cloneSongList],
      isVisiblePlayer: true
    }
  }),

  // 재생중인 음악이 있으면 해당곡을 prevPlayerQueue 에 넣고, activeSong 을 nextPlayerQueue[0] 으로 치환
  playNext: () => set((prev)=>{
    const currentSong = prev.activeSong
    const nextSrc = prev.nextPlayerQueue.splice(0,1)?.[0]

    return{
      activeSong: nextSrc,
      nextPlayerQueue: prev.nextPlayerQueue,
      prevPlayerQueue: [...(currentSong? [currentSong] : []),...prev.prevPlayerQueue]

    }
  }),

  playBack: () => set((prev)=>{
    const currentSong = prev.activeSong
    const prevSrc = prev.prevPlayerQueue.splice(0,1)?.[0]

    return{
      activeSong: prevSrc,
      nextPlayerQueue: [...(currentSong ? [currentSong] : [] ),...prev.nextPlayerQueue],
      prevPlayerQueue: prev.prevPlayerQueue
    }
  })

}))

export default usePlayerState
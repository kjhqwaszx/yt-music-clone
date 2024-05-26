export interface Song {
  name: string
  channelId: number
  channel: string
  src: string
  imageSrc: string
}

// 인기곡
export interface TopSong extends Song{
  prevRank: number;
  rank: number;
}
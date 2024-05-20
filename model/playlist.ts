import {Song} from "@/model/song";

export interface Playlist {
  id: number
  owner: string
  playlistName: string
  songList: Song[]
}
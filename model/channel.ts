import {Song} from "@/model/song";
import {Playlist} from "@/model/playlist";

export interface Channel{
  id: number;
  subscribers: number;
  name: string;
  songList: Song[];
  playlistArray: Playlist[];
}
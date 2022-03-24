import {ISongDetail} from "../../utils/types";

const initSongs: ISongDetail[] = [
  {
    name: '摇人',
    id: 1883633155,
    ar: [{id: 32913327, name: '某幻君'}, {id: 12623251, name: '老番茄'}],
    dt: 281142,
    single: 0,
    al: {picUrl: "https://p1.music.126.net/x24h8mWU1eV1l2cxAdb53A==/109951166481494589.jpg"}
  },
  {
    name: "Hotel California (Live on MTV, 1994)",
    id: 4049399,
    ar: [{id: 91725, name: 'Eagles'}],
    dt: 432000,
    single: 0,
    al: {picUrl: 'https://p1.music.126.net/T8HqjqmrpX62xKGkWlou_Q==/2544269907915415.jpg'},
  }
]

const songList: number[] = [
  1883633155,
  4049399
]

const modeList = {
  0: '随机',
  1: '单曲循环',
  2: '列表循环'
}

export {
  initSongs,
  songList,
  modeList
}

import {ISongDetail, playerStatusType} from "../../utils/types";
import {stdTime} from "../../utils";

import './index.css'
import {Dispatch, SetStateAction} from "react";

interface IProp {
  status: playerStatusType
  list: ISongDetail[],
  curSongIdx: number,
  setCurrentSong: Dispatch<SetStateAction<number>>,
  methods: {
    play: () => void,
    pause: () => void
  }
}

export const MusicList = (props: IProp) => {

  const {list, curSongIdx, setCurrentSong, methods, status} = props

  return (
    <div className={'list-wrapper'}>
      <div className={'title row'}>
        播放列表
      </div>

      <table>
        <tbody>
        {
          list.map((songInfo, index) => {
            return (
              <tr
                className={['song-item', index === curSongIdx ? 'selected' : ''].join(" ")}
                key={songInfo.id}
              >
                <td
                  className={'song-play'}
                >
                  {
                    index === curSongIdx && status === 'playing'
                      ?
                      <i
                        className={"fa fa-pause-circle-o hover-item"}
                        onClick={() => {
                          methods.pause()
                        }}
                      > </i>
                      :
                      <i
                        className={"fa fa-play-circle-o hover-item"}
                        onClick={() => {
                          setCurrentSong(index)

                          let t = setInterval(() => {
                            if (status === 'canplay') {
                              methods.play()
                              clearInterval(t)
                            }
                          }, 500)
                        }}
                      > </i>
                  }
                </td>
                <td className={'song-title ignore'}>
                    {songInfo.name}
                </td>


                <td className={'song-ars ignore'}>
                  {songInfo.ar.map(ar => ar.name).join("/")}
                </td>
                <td className={'song-dt'}>
                  {stdTime(songInfo.dt / 1000)}
                </td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </div>
  )
}

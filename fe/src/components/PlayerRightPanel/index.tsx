import {Dispatch, SetStateAction, useState} from "react";

import {MusicList} from "../MusicList";
import {modeList} from "../MusicPlayer/config";
import {ProcessBar} from "../ProcessBar";
import {ISongDetail, playerStatusType, repeatModeType} from "../../utils/types";

import './index.css'

interface IProp {
  status: playerStatusType,
  curSongIdx: number,
  setCurrentSong: Dispatch<SetStateAction<number>>,
  list: ISongDetail[]
  mode: repeatModeType,
  setMode: Dispatch<SetStateAction<repeatModeType>>,
  volume: number,
  setVolume: Dispatch<SetStateAction<number>>,
  methods: {
    play: () => void,
    pause: () => void
  }
}

export const PlayerRightPanel = (props: IProp) => {

  const {
          curSongIdx, setCurrentSong,
          mode, setMode,
          volume, setVolume,
          list, methods, status
        } = props,
        // 是否显示 音量面板
        [showVolume, setShowVolume] = useState(false),
        // 是否显示 播放模式提示
        [showRepeat, setShowRepeat] = useState(false),
        // 关闭循环模式的定时器
        [modePanelTimer, setModePanelTimer] = useState<NodeJS.Timeout | null>(null),
        // 是否显示 列表面板
        [showList, setShowList] = useState(false)

  const volumePanelHandler = () => {
    setShowVolume(!showVolume)
  }

  // 切换循环模式
  const switchMode = () => {
    setShowRepeat(true)
    setMode((mode + 1) % 3 as repeatModeType)

    if (modePanelTimer) {
      clearTimeout(modePanelTimer)
    }
    setModePanelTimer(setTimeout(() => {
      setShowRepeat(false)
    }, 1000))
  }

  const listShowHandler = () => {
    setShowList(!showList)
  }

  return (
    <div className={"right-control-panel"}>

      <div className={"volume-container"}>
        <div className={"icon-container"}>
          <i
            className={"fa fa-volume-up hover-item"}
            onClick={volumePanelHandler}
          ></i>
        </div>

        <div className={["volume-panel-container", "invisible",showVolume ? 'active' : ''].join(" ")}>
          <ProcessBar
            type={"vertical"}
            current={volume}
            setCurrent={setVolume}
            total={1.0}
          />
        </div>
      </div>

      <div className={"repeat-container"} >
        <div
          className={"icon-container"}
          onClick={switchMode}
        >
          {
            mode === 0
            ?
            <i className={"fa fa-random hover-item"}></i>
            :
            mode === 1
            ?
            <i className={"fa fa-refresh hover-item"}></i>
            :
            <i className={"fa fa-repeat hover-item"}></i>
          }
        </div>

        <div className={['repeat-panel', showRepeat ? 'active' : ''].join(" ")}>
            {modeList[mode]}
        </div>
      </div>

      <div
        className={"list-container"}
      >
        <div
          className={"icon-container"}
          onClick={listShowHandler}
        >
          <i className={"fa fa-th-list hover-item"}></i>
        </div>

        <div className={["list-panel", "invisible", showList ? "active" : ""].join(" ")}>
          <MusicList
            status={status}
            curSongIdx={curSongIdx}
            setCurrentSong={setCurrentSong}
            list={list}
            methods={methods}
          />
        </div>
      </div>
    </div>
  )
}

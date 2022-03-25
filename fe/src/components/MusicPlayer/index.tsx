import {useEffect, useRef, useState} from "react";

import {initSongs, songList} from './config'
import AudioService from '../../services/Audio'

import './index.css'
import 'font-awesome/css/font-awesome.min.css'
import {ISongDetail, playerStatusType} from "../../utils/types";
import {PlayerLeftPanel} from "../PlayerLeftPanel";
import {ProcessPanel} from "../ProcessPanel";
import {PlayerRightPanel} from "../PlayerRightPanel";

const audioService = new AudioService()

export const MusicPlayer = () => {

  const audio = useRef<HTMLAudioElement>(null),
        alCover = useRef<HTMLImageElement>(null),
        [curSongIdx, setCurSongIdx] = useState(0),
        [curSongPath, setCurSongPath] = useState(''),
        [songInfoList, setSongInfoList] = useState<ISongDetail[]>(initSongs),
        // 播放状态
        [playStatus, setPlayStatus] = useState<playerStatusType>('loading'),
        // 播放进度
        [currentTime, setCurrentTime] = useState(0),
        // 音量
        [currentVolume, setCurrentVolume] = useState(1),
        // 播放模式
        [mode, setMode] = useState<0 | 1 | 2>(0)

  // 向网易云 api 请求歌曲详情
  // useEffect(() => {
  //   audioService.getSongsInfo(songList).then(data => {
  //     console.log(data)
  //     setSongInfoList(data)
  //   })
  // }, [songList])

  // audio ended 事件
  useEffect(() => {
    audio.current!.volume = 1.0

    audio.current!.addEventListener('ended', function () {
      setPlayStatus('loading')
      nextSong()
    })

    return () => {
      audio.current!.removeEventListener('ended', function () {
        setPlayStatus('loading')
        nextSong()
      })
    }
  }, [])

  // 歌曲改变时，改变 audio 和 cover-img 的 src
  useEffect(() => {
    const id = songList[curSongIdx]

    alCover.current!.src = songInfoList[curSongIdx].al.picUrl
    setPlayStatus('loading')

    let url = `https://music.163.com/song/media/outer/url?id=${id}.mp3`
    setCurSongPath(url)

    // 绑定 canplay 回调
    audio.current!.addEventListener('canplay', function setCanplay() {
      setPlayStatus('canplay')

      audio.current!.removeEventListener('canplay', setCanplay)
    })
  }, [curSongIdx])

  // 随播放改变 前端进度
  useEffect(() => {
    let interval: NodeJS.Timer
    if (playStatus === "playing") {
      interval = setInterval(() => {
        setCurrentTime(audio.current!.currentTime)
      }, 1000)

      return () => {
        clearInterval(interval)
      }
    }

  }, [playStatus])

  // 绑定音量
  useEffect(() => {
    audio.current!.volume = currentVolume
  }, [currentVolume])

  const play = () => {
    if (audio.current && playStatus === 'canplay') {
      setPlayStatus('playing')

      audio.current.play()
    }
  }

  const pause = () => {
    if (audio.current) {
      setPlayStatus('pause')
      audio.current.pause()
    }
  }

  const playFrom = (newTime: number) => {
    audio.current!.currentTime = newTime
  }

  // 根据循环模式决定下一首歌
  const nextSong = () => {
    if (songList.length === 1) {
      play()
    }

    audio.current!.autoplay = true
    switch (mode) {
      case 0:
        let array = new Array(songList.length).fill(0).map((v, i) => i)
        array.splice(curSongIdx, 1)
        let newIdx = Math.floor(Math.random() * array.length)
        setCurSongIdx(newIdx)
        break
      case 1:
        play()
        break
      case 2:
        setCurSongIdx((curSongIdx + 1) % songList.length)
        break
      default:
        break
    }

  }

  return (
    <div
      className={"audio-container"}
    >
      <div className={"ctrl-panel"}>
        <PlayerLeftPanel
          play={play}
          pause={pause}
          status={playStatus}
        />
      </div>

      <div className={'album-cover-container'}>
        <img
          className={"album-cover"}
          ref={ alCover }
          alt={"album cover"}
        />
      </div>

      <div className={"process"}>
        <div className={"column"}>
          <span>
            { `${songInfoList[curSongIdx].name} - ${songInfoList[curSongIdx].ar.map(ar => ar.name).join(", ")}` }
          </span>
        </div>

        <div className={'column'}>
          <ProcessPanel
            current={ currentTime }
            setCurrent={ setCurrentTime }
            total={ songInfoList[curSongIdx].dt / 1000}
            update={ playFrom }
          />
        </div>
      </div>

      <div className={"ctrl-panel"}>
        <PlayerRightPanel
          status={playStatus}
          curSongIdx={curSongIdx}
          methods={{play, pause}}
          setCurrentSong={setCurSongIdx}
          list={songInfoList}
          mode={mode}
          setMode={setMode}
          volume={currentVolume}
          setVolume={setCurrentVolume}
        />
      </div>

      <audio
        // autoPlay={true}
        ref={audio}
        src={curSongPath}
        // crossOrigin={"anonymous"}
      />
    </div>
  )
}

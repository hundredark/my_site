import React, {Dispatch, SetStateAction, useEffect, useRef, useState} from "react";

import './index.css'
import {useMount} from "../../utils/hooks";
import {getElementPosition} from "../../utils/domOperation";

interface IProp {
  type: "vertical" | "horizontal",
  current: number,
  setCurrent: Dispatch<SetStateAction<number>>,
  total: number,
  update?: (data: number) => void
}

export const ProcessBar = (props: IProp) => {
  const {current, setCurrent, total, type, update} = props,
        [moving, setMoving] = useState(false),
        [offset, setOffset] = useState(0),
        [outWidth, setOutWidth] = useState(0),
        barRef = useRef<HTMLDivElement>(null),
        innerRef = useRef<HTMLDivElement>(null),
        dotRef = useRef<HTMLDivElement>(null)

  const outStyle = {
          horizontal: {
            width: "100%",
            height: "0.5rem"
          },
          vertical: {
            width: "0.5rem",
            height: "100%"
          }
        }

  let innerStyle = {
        horizontal: {
          top: 0,
          width: `${current / total * 100}%`,
          height: "0.5rem",
        },
        vertical: {
          bottom: 0,
          width: "0.5rem",
          height: `${current / total * 100}%`
        }
      },
      dotStyle = {
        horizontal: {
          top: '-2.5px',
          left: `${current/ total * outWidth - 5}px`
        },
        vertical: {
          left: '-2.5px',
          bottom: `${current/ total * outWidth - 5}px`
        }
      }

  const setOuterLength = () => {
    if (type === 'horizontal') {
      console.log(type, barRef.current!.offsetWidth)
      setOutWidth(barRef.current!.offsetWidth)
    } else {
      console.log(type, barRef.current!.offsetHeight)
      setOutWidth(barRef.current!.offsetHeight)
    }
  }

  useEffect(() => {
    setOuterLength()
  }, [])

  // resize 时改变外层尺度
  useEffect(() => {
    window.addEventListener('resize', setOuterLength)
    return () => {
      window.removeEventListener('resize', setOuterLength)
    }
  }, [])

  // mouseup 事件
  useMount(() => {
    const mouseUpHandler = () => {
      setMoving(false)
    }

    document.addEventListener('mouseup', mouseUpHandler, false)
    return () => {
      document.removeEventListener('mouseup', mouseUpHandler, false)
    }
  })

  // mousemove 事件
  useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => {
      e.preventDefault()

      let x: number
      if (moving) {
        // 离浏览器左侧窗口当前距离减去父元素距离浏览器左侧窗口距离就是
        // dot 移动的距离
        if (type === 'horizontal') {
          x = e.clientX - offset
        } else {
          x = outWidth - (e.clientY - offset)
        }

        // 0 < x < max
        if (x > outWidth) {
          x = outWidth
        }
        if (x < 0) {
          x = 0
        }

        let rate = x / outWidth
        setCurrent(total * rate)
      }
    }

    document.addEventListener('mousemove', mouseMoveHandler, false)
    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler, false)
    }
  }, [moving, outWidth])

  // 点击进度条
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      let x: number
      if (type === 'horizontal') {
        x = e.clientX - getElementPosition(barRef.current! as HTMLElement).left
        console.log(x, outWidth, total)
      } else {
        x = e.clientY - getElementPosition(barRef.current! as HTMLElement).top
        x = outWidth - x
      }

      let currentPoint = x / outWidth * total
      setCurrent(currentPoint)

      if (update) {
        update(currentPoint)
      }
    }

    barRef.current!.addEventListener('click', handleClick)
    return () => {
      barRef.current!.removeEventListener('click', handleClick)
    }
  }, [outWidth])

  const mouseDownHandler = (e: React.MouseEvent) => {
    e.preventDefault()

    // 浏览器窗口边缘到鼠标的距离 - dot 元素左上角到父元素左上角的距离
    // 父元素到浏览器窗口边缘的距离
    if (type === 'horizontal') {
      setOffset(e.clientX - dotRef.current!.offsetLeft)
    } else {
      let barTop = getElementPosition(barRef.current!).top
      setOffset(barTop)
    }

    setMoving(true)
  }

  return (
    <div
      className={"outer"}
      ref={barRef}
      style={outStyle[type]}
    >
      <div
        className={"inner"}
        ref={innerRef}
        style={innerStyle[type]}
      >
        <div
          className={"dot"}
          ref={dotRef}
          style={dotStyle[type]}
          onMouseDown={mouseDownHandler}
        ></div>
      </div>
    </div>
  )
}

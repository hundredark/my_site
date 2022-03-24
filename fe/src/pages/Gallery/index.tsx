import {SyntheticEvent, useEffect, useRef, useState} from "react";

import GalleryService from "../../services/Gallery";
import {IGallery, IGalleryList, IGalleryResult, timeoutType} from "../../utils/types";

import './index.css'
import {getViewportSize} from "../../utils/domOperation";

const galleryServices = new GalleryService()

interface IGalleryOptions {
  column: 0 | 2 | 4,
  itemWidth: number,
  heightArr: number[],
  leftArr: number[]
}

export const Gallery = () => {

  const container = useRef<HTMLDivElement>(null),
        initVW = getViewportSize().width * 0.7,
        gap = 20,
        batchLength = 8

  let t: timeoutType = null

  const [pageNum, setPageNum] = useState(0)
  const [pageSize, setPageSize] = useState(0)
  const [count, setCount] = useState(0)
  const [gallery, setGallery] = useState<IGalleryList>([])
  const [vw, setVw] = useState(initVW)
  const [options, setOptions] = useState<IGalleryOptions>({
    column: 0,
    itemWidth: 0,
    heightArr: [],
    leftArr: []
  })

  // 请求分页图片数据
  const getImgDatas = async (pageNum: number) => {
    console.log('get page ' + pageNum)

    let data = await galleryServices.getGalleryList(pageNum, batchLength)
    let { rows, count: totalSize } = data.data as IGalleryResult

    setGallery([...gallery, ...rows])
    if (count !== totalSize) {
      setPageSize(totalSize / batchLength - 1)
    }
  }

  // page 增加时请求新数据
  useEffect(() => {
    getImgDatas(pageNum)

  }, [pageNum])

  // 加入新数据时 动态改变 container 高度
  useEffect(() => {
    const maxHeight = Math.max(...options.heightArr)

    container.current!.style.height = `${maxHeight + 25}px`
  }, [options.heightArr])

  const computeContainerWidth = () => {
    let width = getViewportSize().width * 0.7
    setVw(width)
  }

  // 响应式
  useEffect(() => {
    window.addEventListener('resize', computeContainerWidth, false)

    return window.removeEventListener('resize', computeContainerWidth, false)
  }, [])

  // 计算瀑布流布局
  useEffect(() => {
    const column = vw > 414 ? 4 : 2
    setOptions({
      ...options,
      column,
      itemWidth: (vw - gap * (column - 1)) / column,
    })
  }, [vw])

  // 获取 heightArr 最小值
  const getMinIdx = (arr: number[]) => {
    return [].indexOf.call(arr, Math.min(...arr) as never);
  }

  // 图片载入后设置样式
  const setStyle = (e: SyntheticEvent<HTMLImageElement>) => {
    let oImg = e.currentTarget,
        oDiv = oImg.parentElement,
        {itemWidth, column, heightArr, leftArr} = options,
        height = oImg.height * itemWidth / oImg.width,
        width = itemWidth,
        top = 0,
        left

    setCount(count + 1)
    if (count < column) {
      left = count * (itemWidth + gap)

      setOptions({
        ...options,
        heightArr: [...heightArr, height],
        leftArr: [...leftArr, left]
      })
    } else {
      let minIdx = getMinIdx(heightArr)
      top = heightArr[minIdx] + gap
      left = leftArr[minIdx]

      let newHeightArr = heightArr.slice()
      newHeightArr[minIdx] += height + gap
      setOptions({
        ...options,
        heightArr: newHeightArr
      })
    }

    oDiv!.style.cssText = `
      height: ${height}px;
      width: ${width}px;
      top: ${top}px;
      left: ${left}px;
      visibility: visible;
    `
  }

  const loadNextBatch = () => {
    console.log(pageNum, pageSize)

    if (pageNum < pageSize && !t) {
      setPageNum(pageNum + 1)

      t = setTimeout(() => {
        t = null
      }, 300)
    }
  }

  return (
    <div className={"gallery-container"} >
      <div
        className={"waterfall"}
        ref={container}
      >
        {
          gallery.map((oImg, index) => {
            return (
              <div
                className={ "wf-item" }
                key={index}
              >
                <img
                  alt={""}
                  className={"wf-img"}
                  src={oImg.url}
                  onLoad={setStyle}
                />
                {/*<div className={".title-box"}>{ oImg.id }</div>*/}
              </div>
            )
          })
        }
      </div>

      {
        pageNum >= pageSize
          ? null
          : <div
              className={" btn-container "}
            >
              <button
                className={"btn hover-item"}
                onClick={ loadNextBatch }
              >---加载更多---</button>
            </div>
      }
    </div>
  )
}

import {Dispatch, SetStateAction, useEffect, useState} from "react";

import {stdTime} from "../../utils";
import {ProcessBar} from "../ProcessBar";

import './index.css'

interface IProp {
  current: number,
  setCurrent: Dispatch<SetStateAction<number>>,
  total: number,
  update: (data: number) => void
}

export const ProcessPanel = (props: IProp) => {
  const {current, total} = props

  return (
    <div className={"bar-container"}>
      <div className={"left"}>
        <ProcessBar
          type={"horizontal"}
          {...props}
        />
      </div>

      <div className={'right'}>
        <span>{ stdTime(current * 1000) }</span>
        /
        <span>{ stdTime(total) }</span>
      </div>

    </div>
  )
}

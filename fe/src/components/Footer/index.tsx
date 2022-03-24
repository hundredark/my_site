import {MusicPlayer} from "../MusicPlayer";

import {Dispatch, SetStateAction, useEffect} from "react";

import './index.css'
import {useLocation} from "react-router-dom";

interface IProp {
  isHome: boolean,
  setHome: Dispatch<SetStateAction<boolean>>
}

export const Footer = (props: IProp) => {
  const { isHome, setHome } = props

  let location = useLocation()

  useEffect(() => {
    if (location.pathname === '/') {
      setHome(true)
    } else {
      setHome(false)
    }
  }, [location.pathname, setHome])

  return (
    <div className={["Footer", isHome ? 'home': 'nav'].join(" ")} >
      <MusicPlayer />
    </div>
  )
}

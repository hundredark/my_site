import {Dispatch, SetStateAction, useEffect} from "react";
import {Link, useLocation} from 'react-router-dom'

import {NAV} from './headerNav'

import './index.css'

import {
  GithubOutlined,
} from '@ant-design/icons'

interface IProp {
  isHome: boolean,
  setHome: Dispatch<SetStateAction<boolean>>
}

export const Header = (props: IProp) => {

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
    <div className={ ['header-container', isHome ? 'home' : 'nav'].join(" ") }>
      <header className={ 'header' }>
        <h1 className="logo">
          <Link className={ ["title", "hover-item", isHome ? 'disabled-link' : ''].join(" ") } to={'/'}>
            火车车的小站
          </Link>
        </h1>

        <div className={"social"}>
          <div className={"icon-container"}>
            <a href={"https://github.com/hundredark"}>
              <GithubOutlined
                className={'social-icon hover-item'}
              />
            </a>
          </div>
        </div>

        <nav className="header-nav">
          <ul className="nav-list">
            {
              NAV.map((navItem, index) => {
                return (
                  <li className="nav-item" key={index}>
                    <Link
                      className={'nav-lk hover-item'}
                      to={ navItem.to }
                    >{ navItem.title }</Link>
                  </li>
                )
              })
            }
          </ul>
        </nav>

      </header>
    </div>
  )
}

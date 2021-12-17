import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header className={'header-wrapper'}>
            <Link className={'header-link'} to={'/'}>首页</Link>
            <Link className={'header-link'} to={'/blogs'}>博客</Link>
            <Link className={'header-link'} to={'/about'}>关于</Link>
        </header>
    )
}
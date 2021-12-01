import { Link } from 'react-router-dom'
import {routes} from "../routes";
export const Header = () => {
    return (
        <header className={'header-wrapper'}>
            {
                routes.map((route, index) => {
                    return <Link key={index} className={'header-link'} to={route.path}>{route.text}</Link>
                })
            }
        </header>
    )
}
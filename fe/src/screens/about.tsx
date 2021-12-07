import {Header} from "components/header";
import catImg from 'assets/cat.jpg'

export const About = () => {
    return (
        <div className={'page-wrapper'}>
            <Header />
            <div className={'content-wrapper'}>
                <img src={catImg} alt={'cat image'}/>
                <h4>个人介绍</h4>
                <p>我是火车，有一只叫“车车”的猫</p>
                <h4>社交帐号</h4>
                <p>github: <a href={'https://github.com/hundredark'}>github.com/hundredark</a></p>
            </div>
        </div>
    )
}
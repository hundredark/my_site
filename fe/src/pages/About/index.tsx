import {useMount} from "../../utils/hooks";

import './index.css'

export const About = () => {

  useMount(() => {
    console.log('to about')
  })

  const aboutMe = `const aboutMe = function () {
  return {
    nickname: '火车车',
    title: '算法工程师 | 前端工程师',
    age: 28,
    sex: 'male',
    college: '扬州大学',
    'e-mail': 'hundredark@gmail.com',
    GitHub: 'github.com/hundredark'
  }
}`
  const aboutSite = `const aboutSite = function () {
  return {
    site: '火车车的小站',
    fe: 'react + typescript',
    be: 'koa2'
  }
}`

  return (
    <div className={'about-container'}>
      <div className={'about'}>
        <div className={'title'}>
          <h2>About Me</h2>
        </div>
        <pre className={'about-me-code'}>
          { aboutMe }
        </pre>

        <div className={'title'}>
          <h2>About Site</h2>
        </div>
        <pre className={'about-me-code'}>
          { aboutSite}
        </pre>
      </div>
    </div>
  )
}

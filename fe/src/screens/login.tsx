import React, {FormEvent} from 'react';
import api from "../api/user";

export const Login = () => {
    const login = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        let o = {
            username: (e.currentTarget.elements[0] as HTMLInputElement).value,
            password: (e.currentTarget.elements[1] as HTMLInputElement).value,
        }
        let out = document.querySelector('.warning')

        api.login(o).then(r => {
            console.log(r)
            if (r.error === 1) {
                // 登陆失败
                if (out !== null) {
                    out.innerHTML = '登陆失败'
                }
            } else {
                // 登陆成功，跳转
            }
        })
    }

    return (
        <div>
            <div className={'warning'}>{''}</div>
            <form onSubmit={login}>
                <div>
                    <label htmlFor={'username'}>用户名</label>
                    <input type={'text'} id='username'/>
                </div>
                <div>
                    <label htmlFor={'password'}>密码</label>
                    <input type={'password'} id={'password'}/>
                </div>
                <button>登录</button>
            </form>
        </div>
    )
}
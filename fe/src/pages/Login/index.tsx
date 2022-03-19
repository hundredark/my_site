import React, {Dispatch, FormEvent, SetStateAction} from 'react';
import LoginService from "../../services/Login";
import {useMount} from "../../utils/hooks";

const loginService = new LoginService();

// TODO
export const Login = () => {

    const login = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        let o = {
            username: (e.currentTarget.elements[0] as HTMLInputElement).value,
            password: (e.currentTarget.elements[1] as HTMLInputElement).value,
        }
        let out = document.querySelector('.warning')

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

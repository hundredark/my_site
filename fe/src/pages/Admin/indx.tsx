import {useNavigate} from "react-router-dom";

import LoginService from '../../services/Login'
import {useMount} from "../../utils/hooks";
import {IResult} from "../../utils/types";

const loginService = new LoginService()

// TODO
export const Admin = () => {

    const navigator = useNavigate()

    const loginCheck = async () => {
        const result: IResult = await loginService.loginCheck() as IResult
        const errorCode = result.error_code

        if (errorCode === 10006) {
            navigator('/login')
            return;
        }
    }

    useMount(() => {
        loginCheck()
    })

    return (
        <div className={"admin-container"}>
            后台管理界面
        </div>
    )
}

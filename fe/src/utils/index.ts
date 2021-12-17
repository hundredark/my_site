import {useEffect} from "react";

export const baseUrl = process.env.REACT_APP_BASE_URL

export const useMount = (callback: () => void) => {
    useEffect(() => {
        callback()
    }, [])
}

export const formatTime = (timeStamp: number) => {
    let format = 'Y/M/D h:m:s'
    let formatArr = ['Y','M','D','h','m','s'];
    let returnArr = [];

    let date = new Date(timeStamp * 1000);
    returnArr.push(date.getFullYear());
    returnArr.push(formatNumber(date.getMonth() + 1));
    returnArr.push(formatNumber(date.getDate()));
    returnArr.push(formatNumber(date.getHours()));
    returnArr.push(formatNumber(date.getMinutes()));
    returnArr.push(formatNumber(date.getSeconds()));

    for (let i = 0; i < returnArr.length; i++) {
        format = format.replace(formatArr[i], returnArr[i].toString());
    }
    return format;
}

function formatNumber(n: number) {
    let str = n.toString()
    return str[1] ? n : '0' + n
}
export const formatTime = (timeStamp: number) => {
    let format = 'Y/M/D'
    let formatArr = ['Y','M','D'];
    let returnArr = [];

    let date = new Date(timeStamp);
    returnArr.push(date.getFullYear());
    returnArr.push(formatNumber(date.getMonth() + 1));
    returnArr.push(formatNumber(date.getDate()));

    for (let i = 0; i < returnArr.length; i++) {
        format = format.replace(formatArr[i], returnArr[i].toString());
    }
    return format;
}

function formatNumber(n: number) {
    let str = n.toString()
    return str[1] ? n : '0' + n
}

export const stdTime = (t: number) => {
    let totalSeconds = Math.floor(t / 1000)
    let s = totalSeconds % 60
    let m = (totalSeconds - s) / 60

    return `${m >= 10 ? m : '0' + m}:${s >= 10 ? s : '0' + s}`
}

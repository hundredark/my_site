export interface IBlog {
    id: number,
    title: string,
    createTime: number,
    tag: string
    content?: string,
}

export type IBlogList = IBlog[]

export interface IGallery {
    id: number,
    url: string,
    description: string
}

export type IGalleryList = IGallery[]

export interface IAxiosOptions {
    url: string,
    method?: string,
    data?: object,
    withCredentials?: boolean,
    headers?: object,
    success: (data: IResult) => void,
    error: (err: string) => void,
}

export interface IUserInfo {
    username: string,
    password: string
}

export interface IGalleryResult {
    count: number,
    rows: IGalleryList
}

export interface IResult {
    error_code: number,
    error_msg: string,
    data?: IBlog | IBlogList | IGalleryList | IGalleryResult
}

export type timeoutType = NodeJS.Timeout | null

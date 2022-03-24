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
    success: (data: IResult | ISongResult) => void,
    error: (err: string) => void,
    crossOrigin?: boolean
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

export interface IArtist {
    id: number,
    name: string
}

export interface ISongAlbum {
    picUrl: string
}

export interface ISongDetail {
    name: string,
    id: number,
    ar: IArtist[],
    dt: number,
    single: 0 | 1,
    al: ISongAlbum,
    curTime?: number
}

export interface ISongResult {
    code: number,
    privileges: {},
    songs: ISongDetail[]
}

export type playerStatusType = 'loading' | 'canplay' | 'pause' | 'playing'

export type repeatModeType = 0 | 1 | 2

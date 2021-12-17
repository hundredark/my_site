export interface blogType {
    id: number,
    title: string,
    content: string,
    createtime: number,
    tag: string
}

export interface blogBrief {
    blog: blogType
}
export interface requestAddProduct {
    name:string
    value:number
    imgs: Array<any>
    desc: string
    tag: string
    type: string
    time?: Date;
}
/// <reference types="vite/client" />
interface modelConstroctor{
new ( x:number, y:number):IModel
}
interface bulletModelConstroctor{
    new (tank:IModel):IModel
}
interface IModel{
    name:string
    render():void
    tank?:IModel
    image():HTMLImageElement
    destroy():void
    x:number
    y:number
}
interface ICanvas{
    model():modelConstroctor|bulletModelConstroctor
    num():number
    canvas:CanvasRenderingContext2D
    removeModel(model:IModel):void
    renderModels():void
}
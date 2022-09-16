
import config from '../config'
import { directionEnum } from '../enum/directionEnum'
abstract class modelAbstract{
  abstract name:string
  abstract image():HTMLImageElement
  abstract canvas: ICanvas
  protected direction:directionEnum=directionEnum.top
  protected width:number=config.models.width
  protected height:number=config.models.height
    constructor(public x:number,public y:number){
      this.getDirections()
  }
  protected getDirections(){
    this.direction= Object.keys(directionEnum)[Math.floor(Math.random()*4)] as directionEnum
}
 protected getRandomDirection(){
  return Object.keys(directionEnum)[Math.floor(Math.random()*4)] as directionEnum
 }
 protected draw() {
  this.canvas.canvas.drawImage(this.image(), this.x, this.y, config.models.width, config.models.height)
}
public destroy(){
  this.canvas.removeModel(this)
  this.canvas.renderModels()
}
  abstract render():void
}
export default modelAbstract
import modelAbstract from "./modelAbstract";
import { image } from "../image";
import bullet from "../canvas/bullet";
import config from "../config";
import { directionEnum } from "../enum/directionEnum";
import util from "../util";
import wall from "../canvas/wall";
import boss from "../canvas/boss";
import player from "../canvas/player";
import tank from "../canvas/tank";
export default  class model extends modelAbstract implements IModel{
     canvas: ICanvas=bullet;
    name: string='bullet';
    constructor(public tank:IModel){
        super(tank.x+config.models.width/2,tank.y+config.models.height/2)
    }
    image(): HTMLImageElement {
       return image.get("bullet")!
    }
    render(): void {
      let x=this.x
      let y=this.y
      switch(this.direction){
        case directionEnum.top:
         y-=2
          break
          case directionEnum.bottom:
            y+=2
            break
            case directionEnum.left:
              x-=2
              break
              case directionEnum.right:
                x+=2
                break
      }
      const isTouchModel=util.isModelTouch(x,y,2,2,[...wall.models,...boss.models,...tank.models,...player.models])
      if(util.isCanvasTouch(x,y,2,2)){
        this.destroy()
      }else if(isTouchModel&&this.tank.name!==isTouchModel.name){
        this.destroy()
        isTouchModel.destroy()
      }
      else{
        this.x=x
        this.y=y
        this.draw()
      }
      
    }
  
    // protected blast(model:IModel){
    //   Array(...Array(8).keys()).reduce((promise,index)=>{
    //     return new Promise(reslove=>{
    //     setTimeout(()=>{
    //       const image=new Image()
    //       image.src=`../static/images/blasts/blast${index}.gif`
    //       image.onload=()=>{
    //        this.canvas.canvas.drawImage(image,model.x,model.y,config.models.width,config.models.height)
    //        reslove(promise)
    //       }
    //     },200)
         
    //     })
         
    //   },Promise.resolve())
    // }
   protected draw(): void {
    this.canvas.canvas.drawImage(this.image(), this.x, this.y,2, 2)
   }
}
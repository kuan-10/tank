import modelAbstract from "./modelAbstract";
import { image } from "../image";
import player from "../canvas/player";
import _ from "lodash";
import { directionEnum } from "../enum/directionEnum";
import config from "../config";
import util from "../util"
import bullet from "../canvas/bullet";
export default  class model extends modelAbstract implements IModel{
    canvas: ICanvas=player;
    name: string="player";
   
    image(): HTMLImageElement {
        let direction=this.name+_.upperFirst(this.direction)
       return image.get(direction as any)!
    }
    render(): void {
        super.draw()
        document.addEventListener('keydown',this.directionChange.bind(this))
       document.addEventListener('keydown',this.move.bind(this))
       document.addEventListener('keydown',this.shoot.bind(this))
    
}
    directionChange(event:KeyboardEvent){
        let temp=this.direction
        switch(event.key){
         case 'ArrowUp':
             this.direction='top' as directionEnum
             break
             case 'ArrowDown':
             this.direction='bottom' as directionEnum
             break
             case 'ArrowLeft':
             this.direction='left' as directionEnum
             break
             case 'ArrowRight':
             this.direction='right' as directionEnum
             break
        }
if(temp!==this.direction){
 super.draw()
}
    }
    move(event:KeyboardEvent){
        let x=this.x
        let y=this.y
                switch(event.key){
                    case 'ArrowUp':
                        this.direction='top' as directionEnum
                        y-=5
                        break
                        case 'ArrowDown':
                        this.direction='bottom' as directionEnum
                        y+=5
                        break
                        case 'ArrowLeft':
                        this.direction='left' as directionEnum
                        x-=5
                        break
                        case 'ArrowRight':
                        this.direction='right' as directionEnum
                        x+=5
                        break
                   }
                   if(util.isCanvasTouch(x,y)||util.isModelTouch(x,y,config.models.width,config.models.height)){
                    return ;
                   }
                    this.x=x
                    this.y=y
                  this.canvas.canvas.clearRect(0,0,config.canvas.width,config.canvas.height)
                   super.draw()
            }
    shoot(event:KeyboardEvent){
        if(event.code==='Space'){
           bullet.addPlayerNewBullet()
        }
    }
}
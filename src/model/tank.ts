import modelAbstract from "./modelAbstract";
import { image } from "../image";
import { directionEnum } from "../enum/directionEnum";
import _ from 'lodash';
import config from '../config'
import water from "../canvas/water";
import wall from "../canvas/wall";
import steels from "../canvas/steels";
import tank from "../canvas/tank";
export default  class model extends modelAbstract implements IModel{
    canvas: ICanvas=tank;
    image(): HTMLImageElement {
       return this.getImage()
    }
    name:string='tank'
    
    getImage(){
        let getImage=this.name+_.upperFirst(this.direction)
        return image.get(getImage as keyof typeof config.images)!
    }
    
    protected move(){
        while(true){
        let x=this.x
        let y=this.y
        switch(this.direction){
            case directionEnum.top:
                y--

                break
                case directionEnum.bottom:
                y++
               
                break
                case directionEnum.left:
                x--
              
                break
                case directionEnum.right:
                x++
               
                break
        }
        if  (this.isCollapsed(x,y)===true||this.isCollapsedWallWaterSteel(x,y)===true){
            this.getDirections()
           
       }else{
            this.x=x
            this.y=y
            break
       }
    }
    }
    protected isCollapsedWallWaterSteel(x:number,y:number){
        const models=[...water.models,...wall.models,...steels.models]
       return models.some(c=>{
        const state=(x+this.width<=c.x||
                x-config.models.width>=c.x||
                y+this.height<c.y||
                y-config.models.height>c.y)
                return !state
        })
    }
    protected isCollapsed(x:number,y:number):boolean{
        if(x<0
            ||x+this.width>config.canvas.width
            ||y<0
            ||y+this.height>config.canvas.height){
                return true 
            }
          else
          return false
    }
    render(): void {
       this.move()
      if(_.random(10)==1){
        this.direction=directionEnum.bottom
      }
    }
   
}
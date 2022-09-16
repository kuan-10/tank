import config from "../config"
type positionType ={x:number,y:number}
class position{
    protected positionArray:positionType[]=[]
    public positionCollective(num:number){
        let positions=[] as {x:number,y:number}[]
         for(let i=0;i<num;i++){
           while(true){
           const position=this.position()
               const exists=this.positionArray.some(c=>c.x==position.x && c.y==position.y)
               if(!exists){
                   positions.push(position)
                   this.positionArray.push(position)
                   break
               }

           }
         }
         return positions
   }
    public position(){
        return{
            x:Math.floor(Math.random()*(config.canvas.width/config.models.width))*config.models.width,
            y:(Math.floor(Math.random()*(config.canvas.height/config.models.height-7))+2)*config.models.height
        }
    }
}
export default new position()
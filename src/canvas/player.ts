import model from '../model/player'
import config from "../config"
import canvasAbstract from "../canvasAbstract"
export default new (class player extends canvasAbstract {
  num(): number {
    return config.boss.num
  }
  model(): modelConstroctor {
    return model
  }
  render():void {
    this.createModels(config.boss.num,model)
    super.renderModels()
  }
  public createModels(num:number,model:modelConstroctor){
    for(let i=0;i<num;i++){
      [{x:config.canvas.width/2+3*config.models.width,y:config.canvas.height-config.models.height}].forEach(position=>{
        const instance= new model(position.x,position.y)
        this.models.push(instance)
         })
    }  
 }
})('player')
import model from '../model/tank'
import config from "../config"
import canvasAbstract from "../canvasAbstract"
import position from '../position/position'
export default new (class tank extends canvasAbstract {
  num(): number {
    return config.tank.num
  }
  model(): modelConstroctor {
    return model
  }

  render():void {
    this.createModels(config.tank.num,model)
    this.renderModels()
    setInterval(()=>this.renderModels(),config.timeout)
  }
  public renderModels(): void {
    this.canvas.clearRect(0,0,config.canvas.width,config.canvas.height)
    this.models.forEach(c=>{
      c.render()
      this.canvas.drawImage(c.image(),c.x,c.y,config.models.width,config.models.height)})
  }
  public createModels(num:number,model:modelConstroctor){
    for(let i=0;i<num;i++){
        const pos=position.position()
        const instance= new model(pos.x,0)
        this.models.push(instance)
    }
     
 }
 
})('tank')
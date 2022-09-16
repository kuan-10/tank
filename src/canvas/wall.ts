
import model from '../model/wall'
import config from "../config"
import canvasAbstract from "../canvasAbstract"
export default new (class wall extends canvasAbstract {
  num(): number {
    return config.wall.num
  }
  model(): modelConstroctor {
    return model
  }

  render():void {
    super.createModels(config.wall.num,model)
    super.renderModels()
    this.createBossWall()
}
  createBossWall(){
    const cw=config.canvas.width
    const ch=config.canvas.height
    const mw=config.models.width
    const mh=config.models.height
    const position=[{
      x:cw/2-3*mw,y:ch-mh},{
      x:cw/2-3*mw,y:ch-mh*2,},{
      x:cw/2-3*mw,y:ch-mh*3
    }, { x:cw/2,y:ch-3*mh},
    {x:cw/2-2*mw,y:ch-mh*3},
      { x:cw/2-mw,y:ch-mh*3},
     { x:cw/2+mw,y:ch-3*mh},
        { x:cw/2+mw,y:ch-2*mh},
        { x:cw/2+mw,y:ch-mh}]
    position.forEach(position=>{
      const instance= new model(position.x,position.y)
      this.models.push(instance)
    })
    
  }
})('wall')
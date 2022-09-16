import model from '../model/bullet'
import config from "../config"
import canvasAbstract from "../canvasAbstract"
import tank from './tank'
import bullet from '../model/bullet'
import player from './player'
export default new (class  extends canvasAbstract {
    num(): number {
        return config.bullet.num
      }
      model(): bulletModelConstroctor {
        return model as unknown as bulletModelConstroctor
      } 
  render():void {
    // super.createModels(config.steels.num,model)
    // super.renderModels()
    setInterval(()=>{
      this.createBullet()
      super.renderModels()
    },20)
    
   
  }
  

  createBullet(){
   console.log(1)
    tank.models.forEach(tank=>{
        const isExists=this.models.some(c=>c.tank==tank)
        if(!isExists){
            this.models.push(new bullet(tank) )
        }
    })
  }

  addPlayerNewBullet(){
    this.models.push(new bullet(player.models[0]))
  }
})('bullet')

import model from '../model/water'
import config from "../config"
import canvasAbstract from "../canvasAbstract"
export default new (class water extends canvasAbstract {
  num(): number {
    return config.water.num
  }
  model(): modelConstroctor {
    return model
  }
 
  render():void {
    super.createModels(config.water.num,model)
    super.renderModels()
  }
})('water')
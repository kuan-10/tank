import model from '../model/straw'
import config from "../config"
import canvasAbstract from "../canvasAbstract"
export default new (class straw extends canvasAbstract {
  num(): number {
    return config.straw.num
  }
  model(): modelConstroctor {
    return model
  }
  render():void {
    super.createModels(config.straw.num,model)
    super.renderModels()
  }
})('straw')
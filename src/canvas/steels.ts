import model from '../model/steels'
import config from "../config"
import canvasAbstract from "../canvasAbstract"
export default  new (class  extends canvasAbstract {
  num(): number {
    return config.steels.num
  }
  model(): modelConstroctor {
    return model
  }
  render():void {
    super.createModels(config.steels.num,model)
    super.renderModels()
  }
})('steels')
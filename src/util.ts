
import boss from './canvas/boss'
import steels from './canvas/steels'
import wall from './canvas/wall'
import config from './config'
export default {
    isCanvasTouch(x: number, y: number, width = config.models.width, height = config.models.height): boolean {

        return x < 0 || x + width > config.canvas.width || y < 0 || y + height > config.canvas.height
      },
  isModelTouch(
    x: number,
    y: number,
    width = config.models.width,
    height = config.models.height,
    models = [...wall.models,...boss.models,...steels.models]
  ): IModel|undefined{
   
    return models.find(c=>{
        const state=(x+width<=c.x||
                x-config.models.width>=c.x||
                y+height<c.y||
                y-config.models.height>c.y)
                return !state
        })
  },
}

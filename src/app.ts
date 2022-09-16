
 import { promises } from './image'
import straw from './canvas/straw'
import wall from './canvas/wall'
import water from './canvas/water'
import steels from './canvas/steels'
import tank from './canvas/tank'
import bullet from './canvas/bullet'
import boss from './canvas/boss'
import player from './canvas/player'

function render(){
  straw.render()
  wall.render()
  water.render()
  steels.render()
  tank.render()
  bullet.render()
  boss.render()
  player.render()
}
export default { async bootApp(){
 await Promise.all(promises)
 console.log(promises)
 render()
}
}

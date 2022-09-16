import wall from '../canvas/wall';
import {image} from '../image'
import modelAbstract from "./modelAbstract";
export default  class model extends modelAbstract implements IModel{
    canvas: ICanvas=wall;
    name: string="wall";
    image(): HTMLImageElement {
       return image.get("wall")!
    }
    render(): void {
        super.draw()
    }
   
}
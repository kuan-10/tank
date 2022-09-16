import modelAbstract from "./modelAbstract";
import { image } from "../image";
import boss from "../canvas/boss";

export default  class model extends modelAbstract implements IModel{
    canvas: ICanvas=boss;
    name: string="boss";
   
    image(): HTMLImageElement {
       return image.get("boss")!
    }
    render(): void {
        super.draw()
    }
   
}
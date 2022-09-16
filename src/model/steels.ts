import modelAbstract from "./modelAbstract";
import { image } from "../image";
import steels from "../canvas/steels";
export default  class model extends modelAbstract implements IModel{
     canvas: ICanvas=steels;
    name: string='steels';
    image(): HTMLImageElement {
       return image.get("steels")!
    }
    render(): void {
  super.draw()
    
    }
   
}
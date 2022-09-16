import config from "./config"
import position from "./position/position"
export default abstract class canvasAbstract{
    public models:IModel[]=[]
    abstract num():number
    abstract model():modelConstroctor|bulletModelConstroctor
    abstract render():void
    constructor(public name:string,protected app=document.querySelector('#app') as HTMLDivElement,
      public el=document.createElement('canvas') as  HTMLCanvasElement, public canvas=el.getContext('2d')!){
      this.createCanvas()
    }
   

  
    public createCanvas(){
        this.el.width=config.canvas.width
       this.el.height=config.canvas.height
       this.app.insertAdjacentElement('afterbegin',this.el)
    }
    public createModels(num:number,model:modelConstroctor){
       position.positionCollective(num).forEach(position=>{
      const instance= new model(position.x,position.y)
      this.models.push(instance)
       })
        
    }
    public renderModels(){
        this.canvas.clearRect(0,0,config.canvas.width,config.canvas.height)
        this.models.forEach(c=>c.render())
    }
    public removeModel(model:IModel){
         this.models=this.models.filter(m=>m!=model)
    }
    
    }
//this.canvas.drawImage(c.image(),c.x,c.y,config.models.width,config.models.height)
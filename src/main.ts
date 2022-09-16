import './style.scss'
import appAll from "./app";
import config from "./config";
const app=document.querySelector('#app') as HTMLDivElement
app.style.width=config.canvas.width+'px'
app.style.height=config.canvas.height+'px'
let isStart=false
app.addEventListener('click',()=>{
  if(!isStart){
  appAll.bootApp()
  isStart=true
  app.style.backgroundImage='none'
  }
})
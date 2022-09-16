// const el=document.querySelector<HTMLCanvasElement>('#canvas')!
// const ctx=el.getContext('2d')!
// gradient是渐变色，创造渐变色，使用createLinearGradient，addColorStop是在中间创造渐变的点，第一个参数是渐变的间隔，范围是0-1，第二个是颜色，fillSytyle是设置填充颜色的，fill是填满整个图形
// const gradient=ctx.createLinearGradient(0,0,300,300)
// gradient.addColorStop(0,'#657854')
// gradient.addColorStop(0.5,'#564324')
// gradient.addColorStop(1,'#ffffff')
// ctx.fillStyle=gradient
// ctx.fillRect(0,0,300,300)

// lineWidth时设置的线宽度，lineJoin是设置连接的圆角样式，strokeRect是绘制出矩形的
// ctx.strokeStyle='#563980'
// ctx.lineWidth=30
// ctx.lineJoin='round'
// ctx.strokeRect(50,50,200,200)

// 定义图片的缩放，这样图片可以根据画布的大小进行自动调整，原理是用画布的高除上元素的高，用画布的宽除上元素的宽，得到一个缩放比例，再利用画面的原始宽度乘上比例就得到最终的大小了
// const img=document.createElement('img')
// img.src='../public/vite.svg'
// img.onload=()=>{
//    el.width=img.naturalWidth*scale(img,el)
//    el.height=img.naturalHeight*scale(img,el)
//    ctx.drawImage(img,0,0,el.width,el.height)
// }

// function scale(img:HTMLImageElement,el:HTMLCanvasElement){
//    return Math.min(el.width/img.naturalWidth,el.height/img.naturalHeight)
// }

// 随机出现小点
// ctx.fillStyle='black'
// ctx.fillRect(0,0,300,300)
//     for(let i=0;i<1000;i++){
//         ctx.fillStyle='white'
//         ctx.fillRect(Math.random()*el.width,Math.random()*el.height,2,2)
//     }

// 随机出现圆形色块
// let color=['#ef5777','#575fcf','#34e7e4','#0be881']
// for(let i=0;i<100;i++){
//     ctx.beginPath()
//     let col=color[Math.round(Math.random()*color.length)] 
//     ctx.fillStyle=col
//     ctx.arc(Math.random()*el.width,Math.random()*el.height,10,0,2*Math.PI)
//     ctx.fill()
// }
// class BlackBoard{
//     constructor(
//        public  el=document.querySelector<HTMLCanvasElement>('#canvas')!,
//        private app=el.getContext('2d')!,
//      private width:number=el.width,
//      private height:number=el.height){
//      this.renderRec()
//      this.mouseDraw()
//     }
//     public pencilColor='#fff'
//      private renderRec() {
//       this.app.fillStyle='#000'        
//      this.app.fillRect(0,0,this.width,this.height)
//     }
//     private mouseDraw(){
//       const callback=this.drawLine.bind(this)
//       this.el.addEventListener('mousedown',()=>{
//        this.app.beginPath()
//        this.app.strokeStyle=this.pencilColor
//        this.el.addEventListener('mousemove',callback)
//        document.addEventListener('mouseup',()=>{
//         this.el.removeEventListener('mousemove',callback)//时间移除是用removeEventListener，里面的参数跟addeventListener一致，但要保证remove里面那个参数跟add的绑定函数一致，这里的this.drawLine.bind(this)返回的是一个新的函数，所以需要用一个callback函数来接受一下

//        })
//     })}
//     private drawLine(event:MouseEvent){
//       this.app.lineTo(event.offsetX,event.offsetY)
//       this.app.stroke()
//     }
//     private refresh(){
//       this.app.fillStyle='black'
//       this.app.fillRect(0,0,this.width,this.height)
//     }
//     private setPencilColor(){
//       const colors=['#575fcf','#ef5777','#d2dae2']
//       const container=document.createElement('div')
//       colors.forEach(color=>{
//         const div:HTMLDivElement=document.createElement('div')
//         div.style.cssText=` width: 30px;height: 30px;background-color:${color}`
//         container.insertAdjacentElement('afterbegin',div)
//       })
     
     
//     }
//     private clear(){
//       const btn:HTMLDivElement=document.createElement('div')!
//       this.el.insertAdjacentElement('afterend',btn)
//       btn.innerText=`清屏`
//       btn.style='border:1px solid white;width:80px;height:30px;background-color:white;margin-left:10px;text-align:center;align-items:center;padding-top:10px;'
//       btn.addEventListener('click',()=>{
//         this.refresh()
//       })
//     } 
// }
// const instance=new BlackBoard()
// instance.setPencilColor()
// instance.clear()


function draw(){
const background_canvas = document.getElementById("backgroundForWebsite");
const ctx = background_canvas.getContext("2d");
ctx.canvas.width = 6676;
ctx.canvas.height = 3748;
    for(let i=0;i<=30;i++){
        drawCloud(100+Math.random()*5+i*Math.random()*200,135+Math.random()*5+i*Math.random()*230,ctx);
    }
    for(let i=0;i<=10;i++){
        drawCloud(100+Math.random()*5+i*Math.random()*500,135+Math.random()*5+i*Math.random()*430,ctx);
    }
    for(let i=0;i<=30;i++){
        drawCloud(100+Math.random()*5+i*Math.random()*100+600,135+Math.random()*5+i*Math.random()*630,ctx);
    }
    for(let i=0;i<=40;i++){
        drawCloud((Math.random()+1)*5+i*600+1000,135+Math.random()*5+i*Math.random()*530,ctx);
    }
   
    
}

function drawCloud(x,y,ctx){
    ctx.beginPath();
    ctx.arc(x+Math.random()*2, y, 60, Math.PI * 0.5, Math.PI * 1.5);
    ctx.arc(x + 70, y - 60, 70, Math.PI * 1, Math.PI * 1.85);
    ctx.arc(x + 152, y - 45, 50, Math.PI * 1.37, Math.PI * 1.91);
    ctx.arc(x + 200, y, 60, Math.PI * 1.5, Math.PI * 0.5);
    ctx.moveTo(x + 200, y + 60);
    ctx.lineTo(x, y + 60);
    ctx.closePath();
    ctx.fillStyle = "rgba(0, 128, 0, 0.045)";
    ctx.fill();
}
   




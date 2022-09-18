
let i=0;
let productIds =new Array();
while(1){
    productIds[i] = document.getElementById("pr"+ (i+1));
    if (productIds[i]==undefined || productIds[i]==null) {break};
    console.log(i);
    productIds[i].style.backgroundColor = getRandomColor();
    i+=1;
}


function getRandomColor(){
    const hue = Math.random()*360;
    return "hsl("+hue+", 30%, 95%)";
}



const btn = document.querySelector("button");
const color = document.querySelector(".color");
const body = document.body;
const colors = [0,1,2,3,4,5,6,7,8,9, 'A','B','C','D','E','F'];

function RandomColor(){
    return Math.floor(Math.random()*colors.length);
}

btn.addEventListener("click",()=>{
    let hax = "#";
    let hash = "#";
    for(i = 0; i<6; i++){
        hax += colors[RandomColor()];
    };
    console.log(hax)
    for(i = 0; i<6; i++){
        hash+=colors[RandomColor()];
    };
    
    document.body.style.background = `linear-gradient(to right ,${hax},${hash})`;
    // color.innerHTML = body.style.background;
})






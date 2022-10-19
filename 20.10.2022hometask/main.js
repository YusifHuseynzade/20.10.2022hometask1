let saveBtn = document.querySelector("#save");
let resetBtn = document.querySelector("#reset");
let boxX = document.getElementById("boxWidth"); 
let boxY = document.getElementById("boxHeight"); 
let color1 = document.getElementById("ballcolor");
let color2 = document.getElementById("boxcolor");
let ballXY = document.getElementById("ballWidthAndHeight");
let ball = document.querySelector('.ball');
let box = document.querySelector('.box');
let step = document.getElementById("step").value;
function save() {
    box.style.height = parseInt(boxY.value) + 'px';
    box.style.width = parseInt(boxX.value) + 'px';
    ball.style.height = parseInt(ballXY.value) + 'px';
    ball.style.width = parseInt(ballXY.value) + 'px';
    ball.style.color = color1;
    box.style.color = color2;
}
saveBtn.addEventListener('click', function(){
    save();
    resetBall();
})

resetBtn.addEventListener('click', function(){
   boxX.value = 800;
   boxY.value = 500;
   ballXY.value = 70;
   save();
   resetBall();
})
save();
resetBall();

function resetBall(){
    ball.style.top = (box.clientHeight - ball.clientHeight) / 2 +'px';
    ball.style.left = (box.clientWidth - ball.clientWidth) / 2 +'px';
}
document.body.addEventListener('keydown',a=>{
    if (a.key == 'ArrowUp') {
        if(parseInt(ball.style.top) > 0) {
            ball.style.top = parseInt(ball.style.top) - Number(step) +'px';
        }

    }else if(a.key == 'ArrowDown'){
        if(parseInt(ball.style.top) < box.clientHeight - ball.clientHeight) {
            ball.style.top = parseInt(ball.style.top) + Number(step) +'px';
        }
    }
    else if(a.key == 'ArrowLeft'){
        if(parseInt(ball.style.left) > 0) {
            ball.style.left = parseInt(ball.style.left) - Number(step) +'px';
    }}
    else if(a.key == 'ArrowRight'){
    if(parseInt(ball.style.left) < box.clientWidth - ball.clientWidth) {
            
            ball.style.left = parseInt(ball.style.left) + Number(step) +'px';
        }
        
    }
})
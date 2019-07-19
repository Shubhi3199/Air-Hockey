import Paddle1 from './paddle1.js';
import InputHandler from './input.js';
import Paddle2 from "./paddle2.js";
import InputHandler2 from './input2.js';
import Ball from './ball.js';

let canvas1=document.getElementById('airHockey1');
let ctx1=canvas1.getContext('2d');
ctx1.clearRect(0,0,400,600);

let canvas2=document.getElementById('airHockey2');
let ctx2=canvas2.getContext('2d');
ctx2.clearRect(400,0,400,600);

let GAME_HEIGHT=600;
let GAME_WIDTH=800;

let paddle1=new Paddle1(GAME_HEIGHT);
paddle1.draw(ctx1);
new InputHandler(paddle1);

let ball=new Ball(GAME_WIDTH, GAME_HEIGHT);





let lastTime=0;

function gameLoop(timestamp){
    let deltaTime=timestamp-lastTime;
    lastTime=timestamp;

    ctx1.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);
    paddle1.update(deltaTime);
    paddle1.draw(ctx1);

    if(ball.position.x <400) {
        ball.draw(ctx1);
        ball.update(deltaTime)
    }else return;

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);


let paddle2=new Paddle2(GAME_HEIGHT);
paddle2.draw(ctx2);
new InputHandler2(paddle2);



let lastTime2=0;
function gameLoop2(timestamp2){
    let deltaTime2=timestamp2-lastTime2;
    lastTime2=timestamp2;

    ctx2.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);
    paddle2.update(deltaTime2);
    paddle2.draw(ctx2);

    if(ball.position.x >400){
        ball.drawi(ctx2);
        ball.update2(deltaTime2)
    }
    requestAnimationFrame(gameLoop2);
}

requestAnimationFrame(gameLoop2);
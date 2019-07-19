export default class Paddle2 {
    constructor(gameHeight) {
        this.gameHeight = gameHeight;
        this.width = 15;
        this.height = 150;
        this.speed = 0;
        this.maxSpeed = 7;
        this.position = {
            x: 310,
            y: this.gameHeight / 2 - this.height / 2 - 90
        };
    }

    moveUp() {
        this.speed = this.maxSpeed;
    }

    moveDown() {


        this.speed = -this.maxSpeed;
    }

    stop(){
        this.speed=0;
    }

    draw(ctx2){

        ctx2.fillStyle='#047';
        ctx2.fillRect(this.position.x,this.position.y, this.width,this.height);
    }

    update(deltaTime2){
        this.position.y += this.speed;
        if(this.position.y<0){
            this.position.y=5;
        }
        if(this.position.y>450){
            this.position.y=445;
        }
    }


}
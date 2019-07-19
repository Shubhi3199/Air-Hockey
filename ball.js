export default class Ball{
    constructor(gameWidth,gameHeight){
        this.gameWidth=gameWidth;
        this.gameHeight=gameHeight;
        this.size=17;
        this.image=document.getElementById('image_ball');
        this.speed={
            x:10,
            y:7
        };
        this.position={
            x:100,
            y:300
    };

    }

    draw(ctx1){
        ctx1.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }

    update(deltaTime1){
        this.position.x +=this.speed.x;
        this.position.y +=this.speed.y;
    }

}
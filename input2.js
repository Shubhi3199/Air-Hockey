

export default class InputHandler2{
    constructor(paddle2) {
        document.addEventListener('keydown', (event) => {
            switch (event.keyCode) {
                case 40:
                    paddle2.moveUp();
                    break;
                case 38:
                    paddle2.moveDown();
                    break;
            }
        })
        document.addEventListener('keyup', (event) => {

            switch (event.keyCode) {
                case 40:
                    paddle2.stop();
                    break;
                case 38:
                    paddle2.stop();
                    break;
            }

        })

    }


}
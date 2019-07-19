

export default class InputHandler{
    constructor(paddle1) {
        document.addEventListener('keydown', (event) => {
            switch (event.keyCode) {
                case 90:
                    paddle1.moveUp();
                    break;
                case 65:
                    paddle1.moveDown();
                    break;
            }
        })
        document.addEventListener('keyup', (event) => {

            switch (event.keyCode) {
                case 90:
                    paddle1.stop();
                    break;
                case 65:
                    paddle1.stop();
                    break;
            }

        })

    }


}
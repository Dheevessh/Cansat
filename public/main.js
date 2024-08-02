import Preloader from "./Preloader.js"
import StartMenu from "./StartMenu.js"

const config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser-example',
        width: 800,
        height: 600

    },
    scene: [Preloader, StartMenu],
    physics: {
        default: 'arcade',
        arcade: {debut: false}
    }
};

const game = new Phaser.Game(config);
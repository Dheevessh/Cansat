export default class Preloader extends Phaser.Scene {
    constructor() {
        super('Preloader');
    }

    preload() {
        this.load.setPath('./assets');

        this.add.image(400, 300, 'loading').setDisplaySize(800,600);

                // Load assets for the start menu
                this.load.image('spacebackground1', 'spacebackground1.png');

                this.load.image('Next', 'Next.png');
    }

    create() {
        this.scene.start('StartMenu');
    }
}

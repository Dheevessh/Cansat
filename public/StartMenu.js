export default class StartMenu extends Phaser.Scene
{
    constructor () {
        super('StartMenu')
    }

    create ()
    {
        this.add.image(400, 300, 'spacebackground1').setDisplaySize(800,600);

        const centerX = this.scale.width / 2;
        const centerY = this.scale.height / 2;


        this.introText = this.add.text(centerX, centerY, 'Click to Start', { font: '32px Arial', fill: '#000000' });
        // Set the origin of the text to be the center
        this.introText.setOrigin(0.5, -4.5);
        
        this.input.once('pointerdown', () => { 
            this.tweens.add({
                targets: this.introText,
                alpha: 0,
                duration: 300,
                onComplete: () => {
                    this.scene.start('Level1');
                }

            });
        });
    }
}
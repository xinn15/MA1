class gameoverScene extends Phaser.Scene {

    constructor() {
        super({ key: 'gameoverScene' });
    }

    init(data) {
        this.player = data.player
    }

    preload() {
        // intro image
        this.load.image('gameover','assets/gameover.jpg');
        this.load.audio('gameoversound','assets/gameover.mp3');
    }

    create() {
        console.log("This is gameoverScene");
        this.add.image(0, 0, 'gameover').setOrigin(0, 0);
        this.gameoversound_Snd = this.sound.add('gameoversound', { volume: 0.05});
        this.spacesnd = this.sound.add("space").setVolume(0.2);

        window.garbage = 0
        window.heart = 3

        //this.input.once('pointerdown', function(){
        var spaceDown = this.input.keyboard.addKey('SPACE');

        spaceDown.on('down', function () {
        console.log("Jump to lobby");
        this.spacesnd.play();
        this.scene.start("lobby");

            this
        }, this);
    }
}



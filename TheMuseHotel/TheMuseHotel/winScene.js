class winScene extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'winScene' });
    }
    init(data) {
        this.playerPos = data.playerPos
    }

    preload(){
    // intro image
    this.load.image('win', 'assets/winning.png');
    this.load.audio('winsound','assets/winsound.mp3')
    this.spacesnd = this.sound.add("space").setVolume(0.08);
    }

    create() {
        console.log("This is winScene");
        this.add.image(0, 0, 'win').setOrigin(0, 0);
        this.winsoundsnd = this.sound.add('winsound',{volume: 0.05});
        this.winsoundsnd.play();

        //this.input.once('pointerdown', function(){
        var spaceDown = this.input.keyboard.addKey('SPACE');

        window.garbage = 0

        spaceDown.on('down', function () {
            console.log("Jump to introScene");
            this.spacesnd.play();
            this.scene.start("introScene");  

            this
        }, this);
    } 

}
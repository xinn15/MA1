class introScene extends Phaser.Scene {

    constructor() {
        super({ key: 'introScene' });
    }


    preload() {
        // intro image
        this.load.image('introscene', 'assets/introscene.png');

        //add music
        this.load.audio('intromusic', 'assets/intromusic.mp3')

    }

    create() {
        console.log("This is introScene");
        this.add.image(0, 0, 'introscene').setOrigin(0, 0);
        this.musicsnd = this.sound.add("intromusic", { loop: true }).setVolume(0.2);
        this.spacesnd = this.sound.add("space").setVolume(0.2);

        this.musicsnd.play();

        //this.input.once('pointerdown', function(){
        var spaceDown = this.input.keyboard.addKey('SPACE');
        var key1 = this.input.keyboard.addKey(49);

        spaceDown.on('down', function () {
            console.log("Jump to storyline");
            this.spacesnd.play();
            this.scene.start("storyLine");  
            this.musicsnd.loop = false;
            this.musicsnd.stop()

            this
        }, this);

        key1.on(
            "down",
             function () {
             console.log("Jump to lobby");
             this.scene.start("lobby")
             this.musicsnd.stop()

            },
            this
        );


    }
}
class storyLine extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'storyLine' });
    }


    preload(){
    // intro image
    this.load.image('storyline', 'assets/storyline.jpg');

    }

    create() {
        this.add.image(0, 0, 'storyline').setOrigin(0, 0);
        this.spacesnd = this.sound.add("space").setVolume(0.2);

        console.log("This is storyline");

        //this.input.once('pointerdown', function(){
        var spaceDown = this.input.keyboard.addKey('SPACE');
        var key1 = this.input.keyboard.addKey(49);

        spaceDown.on('down', function(){
        console.log("Spacebar pressed, goto instruction1");
        this.spacesnd.play();
        this.scene.start("instruction1");
        }, this );
    
        key1.on(
            "down",
             function () {
             console.log("Jump to lobby");
             this.scene.start("lobby")
            },
            this
        );

    }
}  

    

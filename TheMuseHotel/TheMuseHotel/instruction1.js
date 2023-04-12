class instruction1 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'instruction1' });
    }


    preload(){
    // intro image
    this.load.image('instruction1', 'assets/instruction1.jpg');

    }

    create() {
        this.add.image(0, 0, 'instruction1').setOrigin(0, 0);
        this.spacesnd = this.sound.add("space").setVolume(0.2);

        console.log("This is instruction1");

        //this.input.once('pointerdown', function(){
        var spaceDown = this.input.keyboard.addKey('SPACE');
        var key1 = this.input.keyboard.addKey(49);
            
        spaceDown.on('down', function(){
        console.log("Spacebar pressed, goto instruction2");
        this.spacesnd.play();
        this.scene.start("instruction2");
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

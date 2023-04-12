class instruction2 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'instruction2' });
    }


    preload(){
    // intro image
    this.load.image('instruction2', 'assets/instruction2.jpg');
    
    }

    create() {
        this.add.image(0, 0, 'instruction2').setOrigin(0, 0);
        this.spacesnd = this.sound.add("space").setVolume(0.2);

        console.log("This is instruction2");

        //this.input.once('pointerdown', function(){
        var spaceDown = this.input.keyboard.addKey('SPACE');
        var key1 = this.input.keyboard.addKey(49);
            
        spaceDown.on('down', function(){
        console.log("Spacebar pressed, goto lobby");
        this.spacesnd.play();
        this.scene.stop("instruction2");
        this.scene.start("lobby")
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

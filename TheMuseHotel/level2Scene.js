class level2Scene extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'level2Scene' });
    }

    preload() {
        this.load.image('level2page','assets/level2Scene.png');
        this.load.audio('level2sceneSnd','assets/levelscenes.mp3');

    }
     
    create () {

        this.add.image(0, 0, 'level2page').setOrigin(0, 0);
        this.level2sceneSnd = this.sound.add("level2scene").setVolume(0.05);

        // music
        this.level2sceneSnd.play();
        this.level2sceneSnd.loop = false;

        window.count1 = this.level2sceneSnd;
        window.count1.loop = true;

        this.timedEvent = this.time.addEvent({ delay: 3800, callback: this.delay3Seconds, callbackScope: this, loop: false });

    }

    delay3Seconds(){
    
    console.log("after 3 secs");
    window.count1.stop();
    this.scene.stop("level2Scene");
    this.scene.start("level2");
    }  

}




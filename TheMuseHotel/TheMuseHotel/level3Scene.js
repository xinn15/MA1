class level3Scene extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'level3Scene' });
    }

    preload() {
        this.load.image('level3page','assets/level3Scene.png');
        this.load.audio('level3sceneSnd','assets/levelscenes.mp3');

    }
     
    create () {

        this.add.image(0, 0, 'level3page').setOrigin(0, 0);
        this.level3sceneSnd = this.sound.add("level3scene").setVolume(0.05);

        // music
        this.level3sceneSnd.play();
        this.level3sceneSnd.loop = false;

        window.count1 = this.level3sceneSnd;
        window.count1.loop = true;

        this.timedEvent = this.time.addEvent({ delay: 3800, callback: this.delay3Seconds, callbackScope: this, loop: false });

    }

    delay3Seconds(){
    
    console.log("after 3 secs");
    window.count1.stop();
    this.scene.stop("level3Scene");
    this.scene.start("level3");
    }  

}




class level1Scene extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'level1Scene' });
    }

    preload() {
        this.load.image('level1page','assets/level1Scene.png');
        this.load.audio('level1sceneSnd','assets/levelscenes.mp3');

    }
     
    create () {

        this.add.image(0, 0, 'level1page').setOrigin(0, 0);
        this.level1sceneSnd = this.sound.add("level1scene").setVolume(0.1);
        

        // music
        this.level1sceneSnd.play();
        this.level1sceneSnd.loop = false;

        window.count1 = this.level1sceneSnd;
        window.count1.loop = true;

        this.timedEvent = this.time.addEvent({ delay: 3800, callback: this.delay3Seconds, callbackScope: this, loop: false });

    }

    delay3Seconds(){
    
    console.log("after 3 secs");
    window.count1.stop();
    this.scene.stop("level1Scene");
    this.scene.start("level1");
    }  

}




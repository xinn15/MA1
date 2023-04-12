
class level1 extends Phaser.Scene {
    constructor() {
        super({ key: 'level1' });
    }

    init(data) {
        this.player = data.player
    }

    preload() {

        this.load.spritesheet('ghost', 'assets/ghost.png', { frameWidth: 32, frameHeight: 32 });
        this.load.spritesheet('aimee', 'assets/player.png', { frameWidth: 64, frameHeight: 64 });

        // Step 1, load JSON
        this.load.tilemapTiledJSON("world1", "assets/mygame.tmj")

    } // end of preload //

    create() {

        console.log("THIS IS LEVEL1")

        this.playerhurtsnd = this.sound.add("hurt").setVolume(0.1);
        this.playerpickupitemsnd = this.sound.add("pickupitem").setVolume(0.1);
        this.gameoversnd = this.sound.add("gameover").setVolume(0.1);

        //Step 3 - Create the map from main
        let map = this.make.tilemap({ key: "world1" });

        //Step 4 Load the game tiles
        let halloweenTiles = map.addTilesetImage("11_Halloween_32x32", "halloween");
        let livingroomTiles = map.addTilesetImage("2_LivingRoom_32x32", "livingroom");
        let defimon1Tiles = map.addTilesetImage("defimon1", "defimon1");
        let bathroomTiles = map.addTilesetImage("3_Bathroom_32x32", "bathroom");
        let bedroomTiles = map.addTilesetImage("4_Bedroom_32x32", "bedroom");
        let carpetTiles = map.addTilesetImage("Carpet", "carpet");
        let roombuilderTiles = map.addTilesetImage("Room_Builder_32x32", "roombuilder");
        let woodTiles = map.addTilesetImage("Wood", "wood");


        // Step 5  create an array of tiles
        let tilesArray = [
            halloweenTiles,
            livingroomTiles,
            bathroomTiles,
            bedroomTiles,
            carpetTiles,
            defimon1Tiles,
            roombuilderTiles,
            woodTiles,

        ];

        // Step 6  Load in layers by layers
        this.groundlayer = map.createLayer("groundlayer", tilesArray, 0, 0);
        this.carpetlayer = map.createLayer("carpetlayer", tilesArray, 0, 0)
        this.walllayer = map.createLayer("walllayer", tilesArray, 0, 0);
        this.walllayer2 = map.createLayer("walllayer2", tilesArray, 0, 0);
        this.walllayer3 = map.createLayer("walllayer3", tilesArray, 0, 0);
        this.itemlayer = map.createLayer("itemlayer", tilesArray, 0, 0);
        this.itemlayer2 = map.createLayer("itemlayer2", tilesArray, 0, 0);

        var start = map.findObject("objectlayer", obj => obj.name === "start");
        this.player = this.physics.add.sprite(start.x, start.y, 'aimee');
        this.ghost = this.physics.add.sprite(237, 207, 'ghost');
        this.ghost2 = this.physics.add.sprite(626, 400, 'ghost');
        this.ghost3 = this.physics.add.sprite(530, 167, 'ghost');
        this.garbage = this.physics.add.sprite(768, 461, 'garbage');
        this.garbage2 = this.physics.add.sprite(701, 162, 'garbage');
        this.garbage3 = this.physics.add.sprite(141, 239, 'garbage');

        window.player = this.player
        this.player.setCollideWorldBounds(true);
        this.cameras.main.startFollow(this.player);

        this.tweens.add({
            targets: this.ghost,
            y: 205,
            y: 349,
            flipX: true,
            yoyo: true,
            duration: 4000,
            repeat: -1
        });


        this.tweens.add({
            targets: this.ghost2,
            y: 890,
            y: 580,
            flipX: true,
            yoyo: true,
            duration: 3000,
            repeat: -1
        })


        this.tweens.add({
            targets: this.ghost3,
            y: 173,
            y: 248,
            flipX: true,
            yoyo: true,
            duration: 3000,
            repeat: -1
        })


        this.cursors = this.input.keyboard.createCursorKeys();

        this.itemlayer.setCollisionByProperty({ Bed: true });
        this.itemlayer.setCollisionByProperty({ Toilet: true });
        this.itemlayer2.setCollisionByProperty({ Shower: true });
        this.itemlayer.setCollisionByProperty({ Showerhead: true });
        this.itemlayer.setCollisionByProperty({ Sink: true });
        this.itemlayer.setCollisionByProperty({ Plant: true });
        this.itemlayer.setCollisionByProperty({ Doll: true });
        this.itemlayer.setCollisionByProperty({ Sidetable: true });
        this.itemlayer.setCollisionByProperty({ Dollhouse: true });
        this.itemlayer2.setCollisionByProperty({ Lamp: true });
        this.itemlayer.setCollisionByProperty({ Lamp2: true });
        this.itemlayer.setCollisionByProperty({ Closet: true });
        this.walllayer.setCollisionByProperty({ Toiletwall: true });
        this.walllayer.setCollisionByProperty({ Wall: true });
        this.walllayer2.setCollisionByProperty({ Wallborder: true });
        this.itemlayer.setCollisionByProperty({ Rubbish: true });
        this.itemlayer.setCollisionByProperty({ Teatable: true });
        this.itemlayer.setCollisionByProperty({ Plumper: true });
        this.itemlayer.setCollisionByProperty({ Shelves: true });

        //thisplayer.will collide with the level tiles
        this.physics.add.collider(this.itemlayer, this.player);
        this.physics.add.collider(this.itemlayer2, this.player);
        this.physics.add.collider(this.walllayer, this.player);
        this.physics.add.collider(this.walllayer2, this.player);

        this.physics.add.overlap(
            this.player,
            [this.ghost, this.ghost2, this.ghost3],
            this.ghostCaught,
            null,
            this
        );

        this.physics.add.overlap(
            this.player,
            [this.garbage,this.garbage2,this.garbage3],
            this.collectGarbage,
            null,
            this
        );

        window.heartimg1 = this.add.image(20, 50, 'heart').setScrollFactor(0).setVisible(true)
        window.heartimg2 = this.add.image(50, 50, 'heart').setScrollFactor(0).setVisible(true)
        window.heartimg3 = this.add.image(80, 50, 'heart').setScrollFactor(0).setVisible(true)

        this.garbageCount = this.add.text(10,10, "Garbage:" + window.garbage, { font: '20px Poppins Medium', fill: '#ffffff' }).setScrollFactor(0);

        //tint//
        const image = this.add.image(0, 0, 'tint').setScale(1000);
        image.setAlpha(0.5);

    } // end of create //

    update() {

        if (this.player.x > 336 &&
            this.player.x < 368 &&
            this.player.y > 433) {
            console.log("exit level 1")
            this.hallway()
        }

        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-160);

            this.player.anims.play('aimee-left', true);
        }
        else if (this.cursors.right.isDown) {
            this.player.setVelocityX(160);

            this.player.anims.play('aimee-right', true);
        }
        else if (this.cursors.down.isDown) {
            this.player.setVelocityY(160);

            this.player.anims.play('aimee-down', true);
        }
        else if (this.cursors.up.isDown) {
            this.player.setVelocityY(-160);

            this.player.anims.play('aimee-up', true);
        } else {
            this.player.setVelocity(0);
            this.player.anims.stop();
        }

    }// end of update // 

    hallway() {
        console.log("back to hallway");
        let playerpos = {}
        playerpos.x = 493
        playerpos.y = 218
        this.scene.start('hallway', { player: playerpos })
    
    }

    ghostCaught(player, enemy){

        console.log("hit by ghost");

        this.playerhurtsnd.play();

        // Shake screen
        this.cameras.main.shake(150);

        window.heart--

        enemy.disableBody(true, true);

    
        if (window.heart === 3) {
            window.heartimg1.setVisible(true);
            window.heartimg2.setVisible(true);
            window.heartimg3.setVisible(true);

        } else if (window.heart === 2) {
            window.heartimg1.setVisible(true);
            window.heartimg2.setVisible(true);
            window.heartimg3.setVisible(false);

        } else if (window.heart === 1) {
            window.heartimg1.setVisible(true);
            window.heartimg2.setVisible(false);
            window.heartimg3.setVisible(false);

        } else if (window.key === 0) {
            window.heartimg1.setVisible(false);
            window.heartimg2.setVisible(false);
            window.heartimg3.setVisible(false);

        }
        if (window.heart == 0){
            this.scene.start("gameoverScene");
            this.gameoversnd.play();
        }
    }
        collectGarbage(player, garbage){
        console.log("collect garbage");

        this.playerpickupitemsnd.play();
        window.garbage++
        this.garbageCount.setText( "Garbage:" + window.garbage);
        garbage.disableBody(false, true);
    }

}





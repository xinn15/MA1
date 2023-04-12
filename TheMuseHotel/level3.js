
class level3 extends Phaser.Scene {
    constructor() {
        super({ key: 'level3' });
    }

    init(data) {
        this.player = data.player
    }

    preload() {

        // this.load.spritesheet('gen', 'assets/girl.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('ghost','assets/ghost.png',{ frameWidth: 32, frameHeight: 32 })
        this.load.spritesheet('aimee', 'assets/player.png', { frameWidth: 64, frameHeight: 64 });

        //Step 1, load JSON
        this.load.tilemapTiledJSON("world3", "assets/mygame3.tmj")
    
    } // end of preload //

    create() {

        console.log("THIS IS LEVEL3")

        this.playerhurtsnd = this.sound.add("hurt").setVolume(0.1);
        this.playerpickupitemsnd = this.sound.add("pickupitem").setVolume(0.1);
        this.gameoversnd = this.sound.add("gameover").setVolume(0.1);

        //Step 3 - Create the map from main
        let map = this.make.tilemap({ key: "world3" });

        //Step 4 Load the game tiles

        let genericTiles = map.addTilesetImage("1_Generic_32x32", "generic");
        let halloweenTiles = map.addTilesetImage("11_Halloween_32x32", "halloween");
        let livingroomTiles = map.addTilesetImage("2_LivingRoom_32x32", "livingroom");
        let bathroomTiles = map.addTilesetImage("3_Bathroom_32x32", "bathroom");
        let bedroomTiles = map.addTilesetImage("4_Bedroom_32x32", "bedroom");
        let carpetTiles = map.addTilesetImage("Carpet", "carpet");
        let defimon1Tiles = map.addTilesetImage("defimon1", "defimon1");
        let farmfishingTiles = map.addTilesetImage("farming_fishing", "farmingfishing");
        let gatherchairsTiles = map.addTilesetImage("gather_chairs_1.3", "gatherchairs");
        let gathertablesTiles = map.addTilesetImage("gather_tables_2.1", "gathertables");
        let roombuilderTiles = map.addTilesetImage("Room_Builder_32x32", "roombuilder");
        let woodTiles = map.addTilesetImage("Wood", "wood");


        // Step 5  create an array of tiles
        let tilesArray = [
            genericTiles,
            halloweenTiles,
            livingroomTiles,
            bathroomTiles,
            bedroomTiles,
            carpetTiles,
            defimon1Tiles,
            farmfishingTiles,
            gatherchairsTiles,
            gathertablesTiles,
            roombuilderTiles,
            woodTiles,

        ];

        // Step 6  Load in layers by layers
        this.groundlayer = map.createLayer("groundlayer", tilesArray, 0, 0);
        this.carpetlayer = map.createLayer("carpetlayer", tilesArray, 0, 0);
        this.walllayer = map.createLayer("walllayer", tilesArray, 0, 0);
        this.walllayer2 = map.createLayer("walllayer2", tilesArray, 0, 0);
        this.itemlayer = map.createLayer("itemlayer", tilesArray, 0, 0);
        this.itemlayer2 = map.createLayer("itemlayer2", tilesArray, 0, 0);
        this.itemlayer3 = map.createLayer("itemlayer3", tilesArray, 0, 0);

        var start = map.findObject("objectLayer", obj => obj.name === "start");

        this.player = this.physics.add.sprite(start.x, start.y, 'aimee');
        this.ghost = this.physics.add.sprite(440, 480, 'ghost');
        this.ghost2 = this.physics.add.sprite(658, 416, 'ghost');
        this.ghost3= this.physics.add.sprite(736, 128, 'ghost');
        this.ghost4= this.physics.add.sprite(192, 335, 'ghost');
        this.ghost5= this.physics.add.sprite(418, 224, 'ghost');


        this.garbage = this.physics.add.sprite(150, 576, 'garbage');
        this.garbage2 = this.physics.add.sprite(770, 480, 'garbage');
        this.garbage3 = this.physics.add.sprite(864, 128, 'garbage');
        this.garbage4 = this.physics.add.sprite(253, 431, 'garbage');
        this.garbage5 = this.physics.add.sprite(231, 141, 'garbage');

        window.player = this.player
        this.cameras.main.startFollow(this.player);
        this.cursors = this.input.keyboard.createCursorKeys();

        this.tweens.add({
            targets: this.ghost,
            y: 480,
            y: 576,
            flipX: true,
            yoyo: true,
            duration: 1500,
            repeat: -1
        });

        this.tweens.add({
            targets: this.ghost2,
            y: 416,
            y: 576,
            flipX: true,
            yoyo: true,
            duration: 1500,
            repeat: -1
        });

        this.tweens.add({
            targets: this.ghost3,
            y: 130,
            y: 224,
            flipX: true,
            yoyo: true,
            duration: 1500,
            repeat: -1
        });

        this.tweens.add({
            targets: this.ghost4,
            x: 192,
            x: 330,
            flipX: true,
            yoyo: true,
            duration: 1000,
            repeat: -1
        });

        this.tweens.add({
            targets: this.ghost5,
            y: 224,
            y: 128,
            flipX: true,
            yoyo: true,
            duration: 1000,
            repeat: -1
        });


     
        this.walllayer.setCollisionByProperty({ Wall: true });
        this.walllayer.setCollisionByProperty({ Toiletwall: true });
        this.walllayer2.setCollisionByProperty({ Roomborder: true });
        this.itemlayer.setCollisionByProperty({ Toilet: true });
        this.itemlayer.setCollisionByProperty({ Bath: true });
        this.itemlayer2.setCollisionByProperty({ Showerhead: true });
        this.itemlayer.setCollisionByProperty({ Sink: true });
        this.itemlayer.setCollisionByProperty({ Bed: true });
        this.itemlayer.setCollisionByProperty({ Sidetable: true });
        this.itemlayer.setCollisionByProperty({ Doll: true });
        this.itemlayer.setCollisionByProperty({ Sidetablelamp: true });
        this.itemlayer.setCollisionByProperty({ Lamp: true });
        this.itemlayer.setCollisionByProperty({ Bones: true });
        this.itemlayer.setCollisionByProperty({ Smalldoll: true });
        this.itemlayer.setCollisionByProperty({ Couch: true });
        this.itemlayer3.setCollisionByProperty({ Chair: true });
        this.itemlayer.setCollisionByProperty({ Table: true });
        this.itemlayer.setCollisionByProperty({ Book: true });
        this.itemlayer.setCollisionByProperty({ Plant: true });
        this.itemlayer.setCollisionByProperty({ Coffeetable: true });
        this.itemlayer.setCollisionByProperty({ Window: true });
        this.itemlayer.setCollisionByProperty({ Pictures: true });
        this.itemlayer.setCollisionByProperty({ Mask: true });
        this.itemlayer.setCollisionByProperty({ Mirror: true });
        this.itemlayer2.setCollisionByProperty({ Weapons: true });

        this.physics.add.collider(this.walllayer, this.player);
        this.physics.add.collider(this.walllayer2, this.player);
        this.physics.add.collider(this.itemlayer, this.player);
        this.physics.add.collider(this.itemlayer2, this.player);
        this.physics.add.collider(this.itemlayer3, this.player);

        this.physics.add.overlap(
            this.player,
            [this.ghost,this.ghost2,this.ghost3,this.ghost4,this.ghost5],
            this.ghostCaught,
            null,
            this
        );

        this.physics.add.overlap(
            this.player,
            [this.garbage,this.garbage2,this.garbage3,this.garbage4,this.garbage5],
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

        if (this.player.x > 560 &&
            this.player.x < 592 &&
            this.player.y > 573) {
            console.log("exit level 3")
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
    }
    // end of update // 

    hallway() {
        console.log("back to hallway");
        let playerpos = {}
        playerpos.x = 908
        playerpos.y = 215
        this.scene.start('hallway', { player: playerpos })
    
    }

    ghostCaught(player, enemy){

        console.log("hit by ghost");

        this.playerhurtsnd.play();

        // Shake screen
        this.cameras.main.shake(150);

        window.heart--

        enemy.disableBody(false, true);

    
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
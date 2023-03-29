
class level1 extends Phaser.Scene {
    constructor() {
        super({ key: 'level1' });
    }

    preload() {

        this.load.spritesheet('gen', 'assets/girl.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('pig', 'assets/pig.png', { frameWidth: 64, frameHeight: 64 });
      //this.load.spritesheet('player','assets/player.png',{ frameWidth: 64, frameHeight: 64 })

        // Step 1, load JSON
        this.load.tilemapTiledJSON("world1", "assets/mygame.tmj")

        // Step 2 : Preload any images here
        // this.load.image("livingroom", "assets/2_LivingRoom_32x32.png");
        // this.load.image("bathroom", "assets/3_Bathroom_32x32.png");
        // this.load.image("bedroom", "assets/4_Bedroom_32x32.png");
        // this.load.image("carpet", "assets/Carpet.png");
        // this.load.image("roombuilder", "assets/Room_Builder_32x32.png");
        // this.load.image("wood", "assets/Wood.png");

    } // end of preload //

    create() {

        console.log("THIS IS LEVEL1")

        //Step 3 - Create the map from main
        let map = this.make.tilemap({ key: "world1" });

        //Step 4 Load the game tiles
        let livingroomTiles = map.addTilesetImage("2_LivingRoom_32x32", "livingroom");
        let bathroomTiles = map.addTilesetImage("3_Bathroom_32x32", "bathroom");
        let defimon1Tiles = map.addTilesetImage("defimon1", "defimon1");
        let bedroomTiles = map.addTilesetImage("4_Bedroom_32x32", "bedroom");
        let carpetTiles = map.addTilesetImage("Carpet", "carpet");
        let roombuilderTiles = map.addTilesetImage("Room_Builder_32x32", "roombuilder");
        let woodTiles = map.addTilesetImage("Wood", "wood");


        // Step 5  create an array of tiles
        let tilesArray = [
            livingroomTiles,
            bathroomTiles,
            defimon1Tiles,
            bedroomTiles,
            carpetTiles,
            roombuilderTiles,
            woodTiles,

        ];

        // Step 6  Load in layers by layers
        this.groundlayer = map.createLayer("groundlayer", tilesArray, 0, 0);
        this.carpetlayer = map.createLayer("carpetlayer", tilesArray,0,0)
        this.walllayer = map.createLayer("walllayer", tilesArray, 0, 0);
        this.walllayer2 = map.createLayer("walllayer2", tilesArray, 0, 0);
        this.itemlayer = map.createLayer("itemlayer", tilesArray, 0, 0);
        this.itemlayer2 = map.createLayer("itemlayer2", tilesArray, 0, 0);

        this.backgroundmusic = this.sound.add("backgroundmusic").setVolume(10)
       // this.door = this.sound.add("door").setVolume(5)


        var start = map.findObject("objectLayer", obj => obj.name === "start");

        this.player = this.physics.add.sprite(start.x, start.y, 'gen');
        this.pig = this.physics.add.sprite(800, 100, "pig").setScale(1);

        window.player = this.player

        this.cameras.main.startFollow(this.player);

        this.time.addEvent({
            delay: 0,
            callback: this.moveDownUp,
            callbackScope: this,
            loop: false,
          })



        // this.add.sprite(100, 100, 'gen').play('gen-up').setScale(2)
        // this.add.sprite(250, 100, 'gen').play('gen-left').setScale(2)
        // this.add.sprite(400, 100, 'gen').play('gen-down').setScale(2)
        // this.add.sprite(550, 100, 'gen').play('gen-right').setScale(2)

        // this.add.sprite(100, 200, 'gen').play('gen-cast-up').setScale(2)
        // this.add.sprite(250, 200, 'gen').play('gen-cast-left').setScale(2)
        // this.add.sprite(400, 200, 'gen').play('gen-cast-down').setScale(2)
        // this.add.sprite(550, 200, 'gen').play('gen-cast-right').setScale(2)

        // this.add.sprite(100, 300, 'gen').play('gen-attack-up').setScale(2)
        // this.add.sprite(250, 300, 'gen').play('gen-attack-left').setScale(2)
        // this.add.sprite(400, 300, 'gen').play('gen-attack-down').setScale(2)
        // this.add.sprite(550, 300, 'gen').play('gen-attack-right').setScale(2)

        // this.add.sprite(100, 400, 'gen-spear').play('gen-spear-up').setScale(2)
        //  this.add.sprite(250, 400, 'gen-spear').play('gen-spear-left').setScale(2)
        //  this.add.sprite(400, 400, 'gen-spear').play('gen-spear-down').setScale(2)
        //  this.add.sprite(550, 400, 'gen-spear').play('gen-spear-right').setScale(2)

        //  this.add.sprite(100, 500, 'gen-bow').play('gen-shoot-up').setScale(2)
        //  this.add.sprite(250, 500, 'gen-bow').play('gen-shoot-left').setScale(2)
        //  this.add.sprite(400, 500, 'gen-bow').play('gen-shoot-down').setScale(2)
        //  this.add.sprite(550, 500, 'gen-bow').play('gen-shoot-right').setScale(2)

        this.cursors = this.input.keyboard.createCursorKeys();


        this.itemlayer.setCollisionByProperty({ Bed: true });
        this.itemlayer.setCollisionByProperty({ Toilet: true });
        this.itemlayer.setCollisionByProperty({ Tree: true });
        this.itemlayer.setCollisionByProperty({ Doll: true });
        this.itemlayer.setCollisionByProperty({ Tree: true });
        this.itemlayer.setCollisionByProperty({ Sidetable: true });
        this.itemlayer.setCollisionByProperty({ Dollhouse: true });
        this.itemlayer.setCollisionByProperty({ Lamp: true });
        this.itemlayer.setCollisionByProperty({ Lamp2: true });
        this.itemlayer.setCollisionByProperty({ Closet: true });
        this.itemlayer.setCollisionByProperty({ Toiletwalls: true });
        this.itemlayer.setCollisionByProperty({ Walls: true });
        this.itemlayer.setCollisionByProperty({ Wallborder: true });
        this.itemlayer.setCollisionByProperty({ Rubbish: true });
        this.itemlayer.setCollisionByProperty({ Teatable: true });
        this.itemlayer.setCollisionByProperty({ Plumper: true });




        //thisplayer.will collide with the level tiles
        this.physics.add.collider(this.itemlayer, this.player);
        this.physics.add.collider(this.itemlayer, this.player);
        this.physics.add.collider(this.itemlayer, this.player);
        this.physics.add.collider(this.itemlayer, this.player);
        this.physics.add.collider(this.itemlayer, this.player);
        this.physics.add.collider(this.itemlayer, this.player);
        this.physics.add.collider(this.itemlayer, this.player);
        this.physics.add.collider(this.itemlayer, this.player);
        this.physics.add.collider(this.itemlayer, this.player);
        this.physics.add.collider(this.itemlayer, this.player);
        this.physics.add.collider(this.itemlayer, this.player);
        this.physics.add.collider(this.itemlayer, this.player);
        this.physics.add.collider(this.itemlayer, this.player);
        this.physics.add.collider(this.itemlayer, this.player);
        this.physics.add.collider(this.itemlayer, this.player);
        this.physics.add.collider(this.itemlayer, this.player);



        // this.player = this.physics.add.sprite(100, 450, 'gen');

    } // end of create //

    update() {

        if (this.player.x > 578 && 
            this.player.x < 610 && 
            this.player.y > 390) 
            {
            this.hallway()
            this.backgroundmusic.play()
        }


        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-160);

            this.player.anims.play('gen-left', true);
        }
        else if (this.cursors.right.isDown) {
            this.player.setVelocityX(160);

            this.player.anims.play('gen-right', true);

        }
        else if (this.cursors.down.isDown) {
            this.player.setVelocityY(160);

            this.player.anims.play('gen-down', true);
        }
        else if (this.cursors.up.isDown) {
            this.player.setVelocityY(-160);

            this.player.anims.play('gen-up', true);
        } else {
            this.player.setVelocity(0);
            this.player.anims.stop();
        }

    }// end of update // 
    

    hallway() {
        console.log("entering hallway");
        this.scene.start("hallway")
    }

    moveDownUp() {
        console.log("moveDownUp");
        this.tweens.timeline({
          targets: this.pig,
          ease: "Linear",
          loop: -1, // loop forever
          duration: 3000,
          tweens: [
            {
              y: 300,
            },
            {
              y: 100,
            },
          ],
        });
      }

}


class level3 extends Phaser.Scene {
    constructor() {
        super({ key: 'level3' });
    }

    preload() {

        this.load.spritesheet('gen', 'assets/girl.png',{ frameWidth:64, frameHeight:64 });

        //Step 1, load JSON
        this.load.tilemapTiledJSON("world3", "assets/mygame3.tmj")

        // Step 2 : Preload any images here'
        // this.load.image("generic", "assets/1_Generic_32x32.png");
        // this.load.image("halloween", "assets/11_Halloween_32x32.png");
        // this.load.image("basement", "assets/14_Basement_32x32.png");
        // this.load.image("livingroom", "assets/2_LivingRoom_32x32.png");
        // this.load.image("bathroom", "assets/3_Bathroom_32x32.png");
        // this.load.image("bedroom", "assets/4_Bedroom_32x32.png");
        // this.load.image("carpet", "assets/Carpet.png");
        // this.load.image("defimon1", "assets/defimon1.png");
        // this.load.image("farmingfishing", "assets/farming_fishing.png");
        // this.load.image("gatherchairs", "assets/gather_chairs_1.3.png");
        // this.load.image("gathertables", "assets/gather_tables_2.1.png");
        // this.load.image("roombuilder", "assets/Room_Builder_32x32.png");
        // this.load.image("wood", "assets/Wood.png");

    } // end of preload //

    create() {

        console.log("THIS IS LEVEL3")

        //Step 3 - Create the map from main
        let map = this.make.tilemap({ key: "world3" });

        //Step 4 Load the game tiles

        let genericTiles = map.addTilesetImage("1_Generic_32x32", "generic");
        let halloweenTiles = map.addTilesetImage("11_Halloween_32x32", "halloween");
        let basementTiles = map.addTilesetImage("14_Basement_32x32","basement")
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
            basementTiles,
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
        this.walllayer = map.createLayer("walllayer", tilesArray, 0, 0);
        this.walllayer2 = map.createLayer("walllayer2", tilesArray, 0, 0);
        this.itemlayer = map.createLayer("itemlayer", tilesArray, 0, 0);
        this.itemlayer2 = map.createLayer("itemlayer2", tilesArray, 0, 0);

        this.backgroundmusic = this.sound.add("backgroundmusic").setVolume(10)
       
        var start = map.findObject("objectLayer", obj => obj.name === "start");

        this.player = this.physics.add.sprite(start.x, start.y, 'gen');
        window.player = this.player

        this.cameras.main.startFollow(this.player);

        this.cursors = this.input.keyboard.createCursorKeys();
        // this.player = this.physics.add.sprite(100, 450, 'gen');

    } // end of create //

    update() {
 
        if (this.player.x > 610 &&
            this.player.x < 546 &&
            this.player.y > 538 ) {
           this.hallway()
           this.backgroundmusic.play()
          // this.door.play()

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
    }
           // end of update // 

    hallway() {
        console.log("entering hallway");
        this.scene.start("hallway")
    }

}
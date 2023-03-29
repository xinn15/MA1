
class lobby extends Phaser.Scene {
    constructor() {
        super({ key: 'lobby' });
    }

    preload() {

        this.load.spritesheet('gen', 'assets/girl.png', { frameWidth: 64, frameHeight: 64 });

        //Step 1, load JSON
        this.load.tilemapTiledJSON("world4", "assets/lobby.tmj")

        // Step 2 : Preload any images here
        // this.load.image("generic", "assets/1_Generic_32x32.png");
        // this.load.image("halloween", "assets/11_Halloween_32x32.png");
        // this.load.image("hotelandhospital", "assets/12_Hotel_and_Hospital_32x32.png");
        // this.load.image("basement", "assets/14_Basement_32x32.png");
        // this.load.image("livingroom", "assets/2_LivingRoom_32x32.png");
        // this.load.image("condominium", "assets/26_Condominium_32x32.png");
        // this.load.image("bathroom", "assets/3_Bathroom_32x32.png");
        // this.load.image("bedroom", "assets/4_Bedroom_32x32.png");
        // this.load.image("carpet", "assets/Carpet.png");
        // this.load.image("defimon1", "assets/defimon1.png");
        // this.load.image("defimon3", "assets/defimon3.png");
        // this.load.image("gatherdecorations", "assets/gather_decorations_1.21.png");
        // this.load.image("gatherchairs", "assets/gather_chairs_1.3.png");
        // this.load.image("gathertables", "assets/gather_tables_2.1.png");
        // this.load.image("roombuilder", "assets/Room_Builder_32x32.png");
        // this.load.image("wallunstable", "assets/Wall_unstable.png");
        // this.load.image("wood", "assets/Wood.png");

    } // end of preload //

    create() {

        console.log("THIS IS LOBBY")

        //Step 3 - Create the map from main
        let map = this.make.tilemap({ key: "world4" });

        //Step 4 Load the game tiles
        let genericTiles = map.addTilesetImage("1_Generic_32x32", "generic");
        let halloweenTiles = map.addTilesetImage("11_Halloween_32x32", "halloween");
        let hotelandhospitalTiles = map.addTilesetImage("12_Hotel_and_Hospital_32x32", "hotelandhospital");
        let basementTiles = map.addTilesetImage("14_Basement_32x32", "basement");
        let livingroomTiles = map.addTilesetImage("2_LivingRoom_32x32", "livingroom");
        let bathroomTiles = map.addTilesetImage("3_Bathroom_32x32", "bathroom");
        let bedroomTiles = map.addTilesetImage("4_Bedroom_32x32", "bedroom");
        let carpetTiles = map.addTilesetImage("Carpet", "carpet");
        let defimon1Tiles = map.addTilesetImage("defimon1", "defimon1");
        let defimon3Tiles = map.addTilesetImage("defimon3", "defimon3");
        let gatherdecorationTiles = map.addTilesetImage("gather_decoration_1.21", "gatherdecoration");
        let gatherchairsTiles = map.addTilesetImage("gather_chairs_1.3", "gatherchairs");
        let gathertablesTiles = map.addTilesetImage("gather_tables_2.1", "gathertables");
        let roombuilderTiles = map.addTilesetImage("Room_Builder_32x32", "roombuilder");
        let wallunstableTiles = map.addTilesetImage("Wall_unstable", "wallunstable");
        let woodTiles = map.addTilesetImage("Wood", "wood");


        // Step 5  create an array of tiles
        let tilesArray = [
            genericTiles,
            halloweenTiles,
            hotelandhospitalTiles,
            basementTiles,
            livingroomTiles,
            bathroomTiles,
            bedroomTiles,
            carpetTiles,
            defimon1Tiles,
            defimon3Tiles,
            gatherdecorationTiles,
            gatherchairsTiles,
            gathertablesTiles,
            roombuilderTiles,
            wallunstableTiles,
            woodTiles,

        ];

        // Step 6  Load in layers by layers
        this.groundlayer = map.createLayer("groundlayer", tilesArray, 0, 0);
        this.carpets = map.createLayer("carpets", tilesArray, 0, 0);
        this.walllayer = map.createLayer("walllayer", tilesArray, 0, 0);
        this.walllayer2 = map.createLayer("walllayer2", tilesArray, 0, 0);
        this.itemlayer = map.createLayer("itemlayer", tilesArray, 0, 0);
        this.itemlayer2 = map.createLayer("itemlayer2", tilesArray, 0, 0);
        this.itemlayer3 = map.createLayer("itemlayer3", tilesArray, 0, 0);
        this.itemlayer4 = map.createLayer("itemlayer4", tilesArray, 0, 0);

        this.backgroundmusic = this.sound.add("backgroundmusic").setVolume(10)
        this.door = this.sound.add("door").setVolume(10)


        var start = map.findObject("objectLayer", obj => obj.name === "start");

        this.player = this.physics.add.sprite(start.x, start.y, 'gen');
        this.cameras.main.startFollow(this.player);

        window.player = this.player

        this.cursors = this.input.keyboard.createCursorKeys();
        // this.player = this.physics.add.sprite(100, 450, 'gen');

    } // end of create //

    update() {

        if (this.player.x > 353 &&
            this.player.x < 385 &&
            this.player.y > 557) {
            this.hallway()
           // this.backgroundmusic.play()
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


        // end of update // 
    }
    hallway() {
        console.log("entering hallway");
        this.scene.start("hallway")
    }

}

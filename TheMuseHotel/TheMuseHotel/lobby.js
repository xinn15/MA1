
class lobby extends Phaser.Scene {
    constructor() {
        super({ key: 'lobby' });
    }

    init(data) {
        this.player = data.player
    }

    preload() {

        this.load.spritesheet('aimee', 'assets/player.png', { frameWidth: 72, frameHeight: 72 });

        //Step 1, load JSON
        this.load.tilemapTiledJSON("world4", "assets/lobby.tmj")

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

        this.game.sound.stopAll()
        this.backgroundmusicsnd = this.sound.add("backgroundmusic", { loop: true }).setVolume(0.08);
        this.backgroundmusicsnd.play();

        var start = map.findObject("objectLayer", obj => obj.name === "start");

        this.player = this.physics.add.sprite(start.x, start.y, 'aimee');
        this.cameras.main.startFollow(this.player);

        window.player = this.player
        this.cursors = this.input.keyboard.createCursorKeys();

        this.itemlayer.setCollisionByProperty({ toilets: true });
        this.itemlayer2.setCollisionByProperty({ sink: true });
        this.itemlayer.setCollisionByProperty({ rubbishbin: true });
        this.itemlayer2.setCollisionByProperty({ plant: true });
        this.walllayer.setCollisionByProperty({ woodwall: true });
        this.walllayer.setCollisionByProperty({ toiletwall: true });
        this.itemlayer.setCollisionByProperty({ table: true });
        this.itemlayer2.setCollisionByProperty({ shelves: true });
        this.itemlayer.setCollisionByProperty({ cat: true });
        this.itemlayer.setCollisionByProperty({ luggagecarrier: true });
        this.itemlayer.setCollisionByProperty({ couch: true });
        this.itemlayer2.setCollisionByProperty({ couch: true });
        this.itemlayer2.setCollisionByProperty({ pooltable: true });
        this.itemlayer3.setCollisionByProperty({ poolballs: true });
        this.itemlayer4.setCollisionByProperty({ poolsticks: true });
        this.itemlayer2.setCollisionByProperty({ poolstickstand: true });
        this.itemlayer4.setCollisionByProperty({ desktop: true });
        this.itemlayer2.setCollisionByProperty({ desktopchair: true });
        this.itemlayer3.setCollisionByProperty({ desktoptable: true });
        this.walllayer2.setCollisionByProperty({ roomborder: true });


        //thisplayer.will collide with the level tiles
        this.physics.add.collider(this.itemlayer, this.player);
        this.physics.add.collider(this.itemlayer2, this.player);
        this.physics.add.collider(this.walllayer, this.player);
        this.physics.add.collider(this.walllayer2, this.player);
        this.physics.add.collider(this.itemlayer3, this.player);
        this.physics.add.collider(this.itemlayer4, this.player);

        this.physics.world.bounds.width = this.walllayer.width;
        this.physics.world.bounds.height = this.walllayer.height;

    } // end of create //

    update() {

        if (this.player.x > 353 &&
            this.player.x < 385 &&
            this.player.y > 557) {
            this.hallway()
            //this.door.play()
            // this.backgroundmusic.play()
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


        // end of update // 
    }


    hallway() {
        console.log("back to hallway");
        let playerpos = {}
        playerpos.x = 491
        playerpos.y = 436
        this.scene.start('hallway', { player: playerpos })
    }

}

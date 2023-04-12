
class hallway extends Phaser.Scene {
    constructor() {
        super({ key: 'hallway' });
    }

    init(data) {
        this.player = data.player
    }

    preload() {

        // this.load.spritesheet('gen', 'assets/girl.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('aimee', 'assets/player.png', { frameWidth: 72, frameHeight: 72 });

        //Step 1, load JSON
        this.load.tilemapTiledJSON("world5", "assets/hallway.tmj")

        // Step 2 : Preload any images here
        // this.load.image("generic", "assets/1_Generic_32x32.png");
        // this.load.image("halloween", "assets/11_Halloween_32x32.png");
        // this.load.image("basement", "assets/14_Basement_32x32.png");
        // this.load.image("livingroom", "assets/2_LivingRoom_32x32.png");
        // this.load.image("condominium", "assets/26_Condominium_32x32.png");
        // this.load.image("bedroom", "assets/4_Bedroom_32x32.png");
        // this.load.image("carpet", "assets/Carpet.png");
        // this.load.image("gatherchairs", "assets/gather_chairs_1.3.png");
        // this.load.image("gathertables", "assets/gather_tables_2.1.png");
        // this.load.image("roombuilder", "assets/Room_Builder_32x32.png");
        // this.load.image("wood", "assets/Wood.png");

    } // end of preload //

    create() {

        console.log("THIS IS HALLWAY")

        //Step 3 - Create the map from main
        let map = this.make.tilemap({ key: "world5" });

        //Step 4 Load the game tiles
        let genericTiles = map.addTilesetImage("1_Generic_32x32", "generic");
        let halloweenTiles = map.addTilesetImage("11_Halloween_32x32", "halloween");
        let livingroomTiles = map.addTilesetImage("2_LivingRoom_32x32", "livingroom");
        let dcondominiumTiles = map.addTilesetImage("26_Condominium_32x32", "condominium");
        let bedroomTiles = map.addTilesetImage("4_Bedroom_32x32", "bedroom");
        let carpetTiles = map.addTilesetImage("Carpet", "carpet");
        let gathertablesTiles = map.addTilesetImage("gather_tables_2.1", "gathertables");
        let gatherchairsTiles = map.addTilesetImage("gather_chairs_1.3", "gatherchairs");
        let roombuilderTiles = map.addTilesetImage("Room_Builder_32x32", "roombuilder");
        let woodTiles = map.addTilesetImage("Wood", "wood");


        // Step 5  create an array of tiles
        let tilesArray = [
            genericTiles,
            halloweenTiles,
            livingroomTiles,
            dcondominiumTiles,
            bedroomTiles,
            carpetTiles,
            gatherchairsTiles,
            gathertablesTiles,
            roombuilderTiles,
            woodTiles,

        ];

        // Step 6  Load in layers by layers
        this.groundLayer = map.createLayer("groundlayer", tilesArray, 0, 0);
        this.carpets = map.createLayer("carpets", tilesArray, 0, 0)
        this.walllayer = map.createLayer("walllayer", tilesArray, 0, 0);
        this.walllayer2 = map.createLayer("walllayer2", tilesArray, 0, 0);
        this.itemlayer = map.createLayer("itemlayer", tilesArray, 0, 0);
        this.itemlayer2 = map.createLayer("itemlayer2", tilesArray, 0, 0);
        this.itemlayer3 = map.createLayer("itemlayer3", tilesArray, 0, 0);

        this.player = this.physics.add.sprite(this.player.x, this.player.y, 'aimee');
        this.cameras.main.startFollow(this.player);

        window.player = this.player

        this.cursors = this.input.keyboard.createCursorKeys();

        this.itemlayer.setCollisionByProperty({ Plant: true });
        this.itemlayer.setCollisionByProperty({ Door: true });
        this.itemlayer2.setCollisionByProperty({ Couch: true });
        this.itemlayer2.setCollisionByProperty({ Couchbehind: true });
        this.itemlayer2.setCollisionByProperty({ Coffeetable: true });
        this.itemlayer.setCollisionByProperty({ Table: true });
        this.walllayer.setCollisionByProperty({ Wall: true });
        this.walllayer2.setCollisionByProperty({ Wallborder: true });
        this.itemlayer2.setCollisionByProperty({ Book: true });
        this.itemlayer2.setCollisionByProperty({ Spiderweb: true });
        this.itemlayer2.setCollisionByProperty({ Pictures: true });


        this.physics.add.collider(this.itemlayer, this.player);
        this.physics.add.collider(this.itemlayer2, this.player);
        this.physics.add.collider(this.walllayer, this.player);
        this.physics.add.collider(this.walllayer2, this.player);

    } // end of create //

    update() {

        if (this.player.x > 477 &&
            this.player.x < 509 &&
            this.player.y > 467) {
            console.log("exit hallway")
            this.lobby()
        }


        else if (this.player.x > 475 &&
            this.player.x < 511 &&
            this.player.y < 197) {
            if (window.garbage < 2) {
                console.log("entering level1")
                this.scene.start("level1Scene");
            }
        }

        else if (this.player.x > 669 &&
            this.player.x < 706 &&
            this.player.y < 197) {
            if (window.garbage < 7) {
                console.log("entering level2")
                this.level2()
                this.scene.start("level2Scene");
            }
        }

        else if (this.player.x > 892 &&
            this.player.x < 924 &&
            this.player.y < 197) {
            if(window.garbage < 12)
            console.log("entering level3")
            this.level3()
            this.scene.start("level3Scene");
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

        if (window.garbage >= 12) {
            this.scene.start("winScene");
        }

    }// end of update // 

    lobby() {
        console.log("back to lobby");
        let playerpos = {}
        playerpos.x = 371
        playerpos.y = 541
        this.scene.start('lobby', { player: playerpos })
    }

    level1() {
        console.log("entering level1");
        this.scene.start("level1")

    }

    level2() {
        console.log("entering level2");
        this.scene.start("level2")

    }

    level3() {
        console.log("entering level3");
        this.scene.start("level3")

    }

}


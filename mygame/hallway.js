
class hallway extends Phaser.Scene {
    constructor() {
        super({ key: 'hallway' });
    }

    preload() {

        this.load.spritesheet('gen', 'assets/girl.png', { frameWidth: 64, frameHeight: 64 });

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
        let basementTiles = map.addTilesetImage("14_Basement_32x32", "basement");
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
            basementTiles,
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
        this.carpets = map.createLayer("carpets", tilesArray,0,0)
        this.walllayer = map.createLayer("walllayer", tilesArray, 0, 0);
        this.walllayer2 = map.createLayer("walllayer2", tilesArray, 0, 0);
        this.itemlayer = map.createLayer("itemlayer", tilesArray, 0, 0);
        this.itemlayer2 = map.createLayer("itemlayer2", tilesArray, 0, 0);
        this.itemlayer3 = map.createLayer("itemlayer3", tilesArray, 0, 0);

        this.backgroundmusic = this.sound.add("backgroundmusic").setVolume(10)

        var start = map.findObject("objectLayer", obj => obj.name === "start");

        this.player = this.physics.add.sprite(start.x, start.y, 'gen');
        this.cameras.main.startFollow(this.player);

        window.player = this.player

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

        
        this.itemlayer.setCollisionByProperty({ Tree: true });
        this.itemlayer.setCollisionByProperty({ Tree2: true });
        this.itemlayer.setCollisionByProperty({ Door: true });
        this.itemlayer.setCollisionByProperty({ Couch: true });
        this.itemlayer.setCollisionByProperty({ Couchbehind: true });
        this.itemlayer.setCollisionByProperty({ Coffeetable: true });
        this.itemlayer.setCollisionByProperty({ Wall: true });
        this.itemlayer.setCollisionByProperty({ Wallborder: true });


        this.physics.add.collider(this.itemlayer, this.player);
        this.physics.add.collider(this.itemlayer, this.player);
        this.physics.add.collider(this.itemlayer, this.player);
        this.physics.add.collider(this.itemlayer, this.player);
        this.physics.add.collider(this.itemlayer, this.player);
        this.physics.add.collider(this.itemlayer, this.player);

        // this.player = this.physics.add.sprite(100, 450, 'gen');

    } // end of create //

    update() {

        if (this.player.x >  455&&
            this.player.x <  535&&
            this.player.y > 497) {
            this.lobby()
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


        // end of update // 
    }  lobby() {
        console.log("entering lobby");
        this.scene.start("lobby")
    }

}
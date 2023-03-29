class preloadScene extends Phaser.Scene {

    constructor() {
        super({ key: 'preloadScene' });
    }


    preload() {

        //level1
         this.load.spritesheet('gen', 'assets/girl.png', { frameWidth: 64, frameHeight: 64 });
       //this.load.spritesheet('player', 'assets/player.png', { frameWidth: 64, frameHeight: 64 });


        //Step 2 : Level 1 Preload any images here
        this.load.image("livingroom", "assets/2_LivingRoom_32x32.png");
        this.load.image("bathroom", "assets/3_Bathroom_32x32.png");
        this.load.image("bedroom", "assets/4_Bedroom_32x32.png");
        this.load.image("carpet", "assets/Carpet.png");
        this.load.image("roombuilder", "assets/Room_Builder_32x32.png");
        this.load.image("wood", "assets/Wood.png");

        //Preload any audios here
        this.load.audio("backgroundmusic","assets/backgroundmusic.mp3");
        this.load.audio("door","assets/door.mp3");


        //level2
        //this.load.spritesheet('gen', 'assets/girl.png', { frameWidth: 64, frameHeight: 64 });

        //Step 2 : Level 2 Preload any images here
        this.load.image("generic", "assets/1_Generic_32x32.png");
        this.load.image("halloween", "assets/11_Halloween_32x32.png");
        this.load.image("livingroom", "assets/2_LivingRoom_32x32.png");
        this.load.image("bathroom", "assets/3_Bathroom_32x32.png");
        this.load.image("bedroom", "assets/4_Bedroom_32x32.png");
        this.load.image("carpet", "assets/Carpet.png");
        this.load.image("defimon1", "assets/defimon1.png");
        this.load.image("farmingfishing", "assets/farming_fishing.png");
        this.load.image("roombuilder", "assets/Room_Builder_32x32.png");
        this.load.image("wood", "assets/Wood.png");

        //Step 2 : Level 3 Preload any images here'
        this.load.image("generic", "assets/1_Generic_32x32.png");
        this.load.image("halloween", "assets/11_Halloween_32x32.png");
        this.load.image("basement", "assets/14_Basement_32x32.png");
        this.load.image("livingroom", "assets/2_LivingRoom_32x32.png");
        this.load.image("bathroom", "assets/3_Bathroom_32x32.png");
        this.load.image("bedroom", "assets/4_Bedroom_32x32.png");
        this.load.image("carpet", "assets/Carpet.png");
        this.load.image("defimon1", "assets/defimon1.png");
        this.load.image("farmingfishing", "assets/farming_fishing.png");
        this.load.image("gatherchairs", "assets/gather_chairs_1.3.png");
        this.load.image("gathertables", "assets/gather_tables_2.1.png");
        this.load.image("roombuilder", "assets/Room_Builder_32x32.png");
        this.load.image("wood", "assets/Wood.png");


        //Step 2 : Level 4 Preload any images here
        this.load.image("generic", "assets/1_Generic_32x32.png");
        this.load.image("halloween", "assets/11_Halloween_32x32.png");
        this.load.image("hotelandhospital", "assets/12_Hotel_and_Hospital_32x32.png");
        this.load.image("basement", "assets/14_Basement_32x32.png");
        this.load.image("livingroom", "assets/2_LivingRoom_32x32.png");
        this.load.image("bathroom", "assets/3_Bathroom_32x32.png");
        this.load.image("bedroom", "assets/4_Bedroom_32x32.png");
        this.load.image("carpet", "assets/Carpet.png");
        this.load.image("defimon1", "assets/defimon1.png");
        this.load.image("defimon3", "assets/defimon3.png");
        this.load.image("gatherdecorations", "assets/gather_decorations_1.21.png");
        this.load.image("gatherchairs", "assets/gather_chairs_1.3.png");
        this.load.image("gathertables", "assets/gather_tables_2.1.png");
        this.load.image("roombuilder", "assets/Room_Builder_32x32.png");
        this.load.image("wallunstable", "assets/Wall_unstable.png");
        this.load.image("wood", "assets/Wood.png");

        //Step 2 : Level 5 Preload any images here
        this.load.image("generic", "assets/1_Generic_32x32.png");
        this.load.image("halloween", "assets/11_Halloween_32x32.png");
        this.load.image("basement", "assets/14_Basement_32x32.png");
        this.load.image("livingroom", "assets/2_LivingRoom_32x32.png");
        this.load.image("condominium", "assets/26_Condominium_32x32.png");
        this.load.image("bedroom", "assets/4_Bedroom_32x32.png");
        this.load.image("carpet", "assets/Carpet.png");
        this.load.image("gatherchairs", "assets/gather_chairs_1.3.png");
        this.load.image("gathertables", "assets/gather_tables_2.1.png");
        this.load.image("roombuilder", "assets/Room_Builder_32x32.png");
        this.load.image("wood", "assets/Wood.png");

    } // end of preload //


    create() {

        console.log("preloadScene")
        this.add.text(10, 500, 'Animation labs, press spacebar to continue',
            { font: '24px Courier', fill: '#ffffff' });

        //gen
        // this.anims.create({
        //     key: 'gen-cast-up',
        //     frames: this.anims.generateFrameNumbers('gen',
        //         { start: 0, end: 6 }),
        //     frameRate: 5,
        //     repeat: -1
        // });

        // this.anims.create({
        //     key: 'gen-cast-left',
        //     frames: this.anims.generateFrameNumbers('gen',
        //         { start: 13, end: 19 }),
        //     frameRate: 5,
        //     repeat: -1
        // });

        // this.anims.create({
        //     key: 'gen-cast-down',
        //     frames: this.anims.generateFrameNumbers('gen',
        //         { start: 26, end: 32 }),
        //     frameRate: 5,
        //     repeat: -1
        // });

        // this.anims.create({
        //     key: 'gen-cast-right',
        //     frames: this.anims.generateFrameNumbers('gen',
        //         { start: 39, end: 45 }),
        //     frameRate: 5,
        //     repeat: -1
        // });

        // this.anims.create({
        //     key: 'gen-spear-up',
        //     frames: this.anims.generateFrameNumbers('gen',
        //         { start: 52, end: 59 }),
        //     frameRate: 5,
        //     repeat: -1
        // });

        // this.anims.create({
        //     key: 'gen-spear-left',
        //     frames: this.anims.generateFrameNumbers('gen',
        //         { start: 65, end: 72 }),
        //     frameRate: 5,
        //     repeat: -1
        // });

        // this.anims.create({
        //     key: 'gen-spear-down',
        //     frames: this.anims.generateFrameNumbers('gen',
        //         { start: 78, end: 85 }),
        //     frameRate: 5,
        //     repeat: -1
        // });

        // this.anims.create({
        //     key: 'gen-spear-right',
        //     frames: this.anims.generateFrameNumbers('gen',
        //         { start: 91, end: 98 }),
        //     frameRate: 5,
        //     repeat: -1
        // });

        // this.anims.create({
        //     key: 'gen-shoot-up',
        //     frames: this.anims.generateFrameNumbers('gen',
        //         { start: 208, end: 220 }),
        //     frameRate: 5,
        //     repeat: -1
        // });

        // this.anims.create({
        //     key: 'gen-shoot-left',
        //     frames: this.anims.generateFrameNumbers('gen',
        //         { start: 221, end: 233 }),
        //     frameRate: 5,
        //     repeat: -1
        // });

        // this.anims.create({
        //     key: 'gen-shoot-down',
        //     frames: this.anims.generateFrameNumbers('gen',
        //         { start: 234, end: 246 }),
        //     frameRate: 5,
        //     repeat: -1
        // });

        // this.anims.create({
        //     key: 'gen-shoot-right',
        //     frames: this.anims.generateFrameNumbers('gen',
        //         { start: 247, end: 259 }),
        //     frameRate: 5,
        //     repeat: -1
        // });


        // this.anims.create({
        //     key: 'gen-attack-up',
        //     frames: this.anims.generateFrameNumbers('gen',
        //         { start: 156, end: 161 }),
        //     frameRate: 5,
        //     repeat: -1
        // });

        // this.anims.create({
        //     key: 'gen-attack-left',
        //     frames: this.anims.generateFrameNumbers('gen',
        //         { start: 169, end: 174 }),
        //     frameRate: 5,
        //     repeat: -1
        // });

        // this.anims.create({
        //     key: 'gen-attack-down',
        //     frames: this.anims.generateFrameNumbers('gen',
        //         { start: 182, end: 187 }),
        //     frameRate: 5,
        //     repeat: -1
        // });

        // this.anims.create({
        //     key: 'gen-attack-right',
        //     frames: this.anims.generateFrameNumbers('gen',
        //         { start: 195, end: 200 }),
        //     frameRate: 5,
        //     repeat: -1
        // });


        this.anims.create({
            key: 'gen-up',
            frames: this.anims.generateFrameNumbers('gen',
                { start: 105, end: 112 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'gen-left',
            frames: this.anims.generateFrameNumbers('gen',
                { start: 118, end: 125 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'gen-down',
            frames: this.anims.generateFrameNumbers('gen',
                { start: 131, end: 138 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'gen-right',
            frames: this.anims.generateFrameNumbers('gen',
                { start: 144, end: 151 }),
            frameRate: 5,
            repeat: -1
        });

        //  
        // this.anims.create({
        //     key: 'alex-cast-up',
        //     frames: this.anims.generateFrameNumbers('alex',
        //         { start: 0, end: 6 }),
        //     frameRate: 5,
        //     repeat: -1
        // });

        // this.anims.create({
        //     key: 'alex-cast-left',
        //     frames: this.anims.generateFrameNumbers('alex',
        //         { start: 13, end: 19 }),
        //     frameRate: 5,
        //     repeat: -1
        // });

        // this.anims.create({
        //     key: 'alex-cast-down',
        //     frames: this.anims.generateFrameNumbers('alex',
        //         { start: 26, end: 32 }),
        //     frameRate: 5,
        //     repeat: -1
        // });

        // this.anims.create({
        //     key: 'alex-cast-right',
        //     frames: this.anims.generateFrameNumbers('alex',
        //         { start: 39, end: 45 }),
        //     frameRate: 5,
        //     repeat: -1
        // });

        // this.anims.create({
        //     key: 'alex-spear-up',
        //     frames: this.anims.generateFrameNumbers('alex',
        //         { start: 52, end: 59 }),
        //     frameRate: 5,
        //     repeat: -1
        // });

        // this.anims.create({
        //     key: 'alex-spear-left',
        //     frames: this.anims.generateFrameNumbers('alex',
        //         { start: 65, end: 72 }),
        //     frameRate: 5,
        //     repeat: -1
        // });

        // this.anims.create({
        //     key: 'alex-spear-down',
        //     frames: this.anims.generateFrameNumbers('alex',
        //         { start: 78, end: 85 }),
        //     frameRate: 5,
        //     repeat: -1
        // });

        // this.anims.create({
        //     key: 'alex-spear-right',
        //     frames: this.anims.generateFrameNumbers('alex',
        //         { start: 91, end: 98 }),
        //     frameRate: 5,
        //     repeat: -1
        // });

        // this.anims.create({
        //     key: 'alex-shoot-up',
        //     frames: this.anims.generateFrameNumbers('alex',
        //         { start: 208, end: 220 }),
        //     frameRate: 5,
        //     repeat: -1
        // });

        // this.anims.create({
        //     key: 'alex-shoot-left',
        //     frames: this.anims.generateFrameNumbers('alex',
        //         { start: 221, end: 233 }),
        //     frameRate: 5,
        //     repeat: -1
        // });

        // this.anims.create({
        //     key: 'alex-shoot-down',
        //     frames: this.anims.generateFrameNumbers('alex',
        //         { start: 234, end: 246 }),
        //     frameRate: 5,
        //     repeat: -1
        // });

        // this.anims.create({
        //     key: 'alex-shoot-right',
        //     frames: this.anims.generateFrameNumbers('alex',
        //         { start: 247, end: 259 }),
        //     frameRate: 5,
        //     repeat: -1
        // });


        // this.anims.create({
        //     key: 'alex-attack-up',
        //     frames: this.anims.generateFrameNumbers('alex',
        //         { start: 156, end: 161 }),
        //     frameRate: 5,
        //     repeat: -1
        // });

        // this.anims.create({
        //     key: 'alex-attack-left',
        //     frames: this.anims.generateFrameNumbers('alex',
        //         { start: 169, end: 174 }),
        //     frameRate: 5,
        //     repeat: -1
        // });

        // this.anims.create({
        //     key: 'alex-attack-down',
        //     frames: this.anims.generateFrameNumbers('alex',
        //         { start: 182, end: 187 }),
        //     frameRate: 5,
        //     repeat: -1
        // });

        // this.anims.create({
        //     key: 'alex-attack-right',
        //     frames: this.anims.generateFrameNumbers('alex',
        //         { start: 195, end: 200 }),
        //     frameRate: 5,
        //     repeat: -1
        // });

        this.anims.create({
            key: 'pig-up',
            frames: this.anims.generateFrameNumbers('pig',
                { start: 105, end: 112 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'pig-left',
            frames: this.anims.generateFrameNumbers('pig',
                { start: 118, end: 125 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'pig-down',
            frames: this.anims.generateFrameNumbers('pig',
                { start: 131, end: 138 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'pig-right',
            frames: this.anims.generateFrameNumbers('pig',
                { start: 144, end: 151 }),
            frameRate: 5,
            repeat: -1
        });

        var spaceDown = this.input.keyboard.addKey('SPACE');
        var key1 = this.input.keyboard.addKey(49);
        var key2 = this.input.keyboard.addKey(50);
        var key3 = this.input.keyboard.addKey(51);
        var key4 = this.input.keyboard.addKey(52);
        var key5 = this.input.keyboard.addKey(53);


        spaceDown.on('down', function () {
            this.scene.start("lobby");
        }, this);
        key1.on('down', function () {
            this.scene.stop("mainScene");
            this.scene.start("lobby");
        }, this);

        key2.on('down', function () {
            this.scene.stop("mainScene");
            this.scene.start("hallway");
        }, this);

        key3.on('down', function () {
            this.scene.stop("mainScene");
            this.scene.start("level1");
        }, this)

        key4.on('down', function () {
            this.scene.stop("mainScene");
            this.scene.start("level2");
        }, this)

        key5.on('down', function () {
            this.scene.stop("mainScene");
            this.scene.start("level3");
        }, this)


    }// end of create //

}

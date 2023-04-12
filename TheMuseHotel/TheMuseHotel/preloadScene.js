class preloadScene extends Phaser.Scene {

    constructor() {
        super({ key: 'preloadScene' });
    }


    preload() {

        //Step 2 : lobby Preload any images here
        this.load.spritesheet('aimee', 'assets/player.png', { frameWidth: 64, frameHeight: 64 });
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
        this.load.image("gatherchairs", "assets/gather_chairs_1.3.png");
        this.load.image("gathertables", "assets/gather_tables_2.1.png");
        this.load.image("roombuilder", "assets/Room_Builder_32x32.png");
        this.load.image("wallunstable", "assets/Wall_unstable.png");
        this.load.image("wood", "assets/Wood.png");
        this.load.image("condominium", "assets/26_Condominium_32x32.png");
        this.load.image("heart","assets/heart.png");
        this.load.image("tint","assets/tint.png");
        this.load.image("gameover","assets/gameover.jpg")
        this.load.image("garbage","assets/garbage.png")
        this.load.image("farmingfishing", "assets/farming_fishing.png");

        this.load.audio('intromusic','assets/intromusic.mp3')
        this.load.audio('backgroundmusic','assets/backgroundmusic.mp3')
        this.load.audio('hurt','assets/hurt.mp3')
        this.load.audio('gameover','assets/gameover.mp3')
        this.load.audio('pickupitem','assets/pickupitem.mp3')
        this.load.audio('space','assets/space.mp3')
        this.load.audio('level1scene','assets/levelscenes.mp3')
        this.load.audio('level2scene','assets/levelscenes.mp3')
        this.load.audio('level3scene','assets/levelscenes.mp3')

    } // end of preload //


    create() {

        console.log("preloadScene")

        this.anims.create({
            key: 'aimee-up',
            frames: this.anims.generateFrameNumbers('aimee',
                { start: 105, end: 112 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'aimee-left',
            frames: this.anims.generateFrameNumbers('aimee',
                { start: 118, end: 125 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'aimee-down',
            frames: this.anims.generateFrameNumbers('aimee',
                { start: 131, end: 138 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'aimee-right',
            frames: this.anims.generateFrameNumbers('aimee',
                { start: 144, end: 151 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'aimee-left',
            frames: this.anims.generateFrameNumbers('aimee',
                { start: 0, end: 1 }),
            frameRate: 5,
            repeat: -1
        });


        var spaceDown = this.input.keyboard.addKey('SPACE');
        var key1 = this.input.keyboard.addKey(49);
        var key2 = this.input.keyboard.addKey(50);
        var key3 = this.input.keyboard.addKey(51);
        var key4 = this.input.keyboard.addKey(52);
        var key5 = this.input.keyboard.addKey(53);

        this.scene.start("introScene");

        // key1.on('down', function () {
        //     this.scene.stop("introScene");
        //     this.scene.start("lobby");
        // }, this);

        // key2.on('down', function () {
        //     this.scene.stop("introScene");
        //     this.scene.start("hallway");
        // }, this);

        // key3.on('down', function () {
        //     this.scene.stop("introScene");
        //     this.scene.start("level1");
        // }, this)

        // key4.on('down', function () {
        //     this.scene.stop("introScene");
        //     this.scene.start("level2");
        // }, this)

        // key5.on('down', function () {
        //     this.scene.stop("introScene");
        //     this.scene.start("level3");
        // }, this)


    }// end of create //

}

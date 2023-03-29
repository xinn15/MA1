
let config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 800,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        },
    },
    backgroundColor: '#000000',
    scene: [preloadScene,lobby,hallway,level1,level2,level3]

};

let game = new Phaser.Game(config);
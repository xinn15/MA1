
let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        },
    },
    backgroundColor: '#000000',
    scene: [preloadScene,introScene,storyLine,instruction1,instruction2,lobby,hallway,level1Scene,level1,level2,level2Scene,level3,level3Scene,winScene,gameoverScene]

};

let game = new Phaser.Game(config);
window.heart = 3
window.garbage= 0

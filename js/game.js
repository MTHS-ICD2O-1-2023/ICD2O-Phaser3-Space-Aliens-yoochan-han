/* gobal Phaser */

//Copyright (c) 2020 Mr. Coxall All rights reserved
//
//Created by: Yoochan
//Created o: Apr 2024
//This is the phaser game coiguration file

/**
 * Start Phaser Game.
 */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
      arcade: {
        debug: true,
  }
}
  // set BG color
  backgrounColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    //I place it in center of pg
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  
}
const game = new Phaser.Game(config)
console.log(game)
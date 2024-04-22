/* gobal Phaser */
//import statement
import SplashScene from "./SplashScene.js"
//create the new scene
const splashScene = new SplashScene

//Copyright (c) 2020 Mr. Coxall All rights reserved
//
//Created by: Yoochan
//Created on: Apr 2024
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
},
  // set BG color
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    //I place it in center of pg
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },

}
const game = new Phaser.Game(config)
//console.log(game)

//load scene
//Note: remember any "key" is global and CAN NOT be reusesd!
game.scene.add("splashScene", splashScene)

//the start scene
game.scene.start("splashScene")
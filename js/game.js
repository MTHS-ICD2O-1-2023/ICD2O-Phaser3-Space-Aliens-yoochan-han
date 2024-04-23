/* gobal Phaser */


//Copyright (c) 2020 Mr. Coxall All rights reserved
//
//Created by: Yoochan
//Created on: Apr 2024
//This is the phaser game coiguration file

//import statement
import SplashScene from "./splashScene.js"
import TitleScene from "./titleScene.js"

//create the new scene
const splashScene = new SplashScene()
const titleScene = new TitleScene()

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
game.scene.add("titleScene", titleScene)
//the start scene
game.scene.start("splashScene")
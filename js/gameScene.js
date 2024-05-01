/* global Phaser */


//Copyright (c) 2020 Mr. Coxall All rights reserved
//
//Created by: Yoochan
//Created on: Apr 2024
//This is the phaser game configuration file

/**
 * This class is he Game Scene.
 */
class GameScene extends Phaser.Scene {
  /**
   * this method is the constructor
   */
  constructor() {
  super({ key: "gameScene"})
}

  /**
   * Can be defined on your own Scenes.
   * This method is called by the Scene Manager when the scene starts,
   *   before preload() and create().
   * @param {object} data - Any data passed via ScenePlugin.add() or scenePlugin.start().
   */
  init(data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  /**
 * Can be use defined on your own Scenes.
 * Use it to load assets.
 */
preload() {
  console.log("game Scene")
}

  /**
   * Can be defined on your own Scenes.
   * Use it ot create your game objects
   * @param {object} data - Any data passed via ScenePlugin.add() or scenePlugin.start().
   */
  create(data) {
    //pass
  }

  /**
 * Should be overridden by your own Scenes.
 * This method is called once per game step while the scene is running 
 * @param {number} time - The current time.
 * @param {number} delta - The delta time in ms since the last frame.
 */
  update(time, delta) {
    //pass
  }
}

export default GameScene
/* global Phaser */


//Copyright (c) 2020 Mr. Coxall All rights reserved
//
//Created by: Yoochan
//Created on: Apr 2024

/**
 * This class is the Scene.
 */
class TitleScene extends Phaser.Scene {
/**
 * This method is the construtor.
 */
  consructor() {
    super({ key: "titleScene"})
  }

  /**
   * Can be defined on your own Scenes.
   * This method is called by the Scene Manager when the scene starts,
   *   before preload() and create().
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  init(data) {
    this.cameras.main.setBackgroundColor("ffffff")
  } 

  /**
   * Can be defined on your own Scenes.
   * use it to load asset.
   */
  preload() {
    console.log("Title Scene")
  }
  /**
 * Can be defined on your own Scenes.
 *Use it to create your game object.
 * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
 */
create(data) {
  //pass
}
  /**
   * Should be overridden by your won Scenes.
   * this method is called once per game step while the scene the last frame.
   *    @param {number} time - The curre time.
   *    @param {number} delta - the delta time in MS since the last frame
   */
  update(time, delta) {
    //pass
  }
}

export default TitleScene
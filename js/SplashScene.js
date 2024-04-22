/* gobal Phaser */

//Copyright (c) 2020 Mr. Coxall All rights reserved
//
//Created by: Yoochan
//Created on: Apr 2024
//This is the phaser game coiguration file

/** this class is the Splash Scene */

class SplashScene extends Phaser.Scene {
  /**this is cinstructor */
  constructor() {
    super({key: "splashScene"})
  }
  /**
   * Can be defined on your won Scenes.
   * This method is called by the Scene Manager when the scene starts,
   *    before preload() and create().
   *  @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin().start.()
   */
  init(data) {
    self.cameras.mainsetBackgroundColor("ffffff")
  }

  /**
   * Can be defined on your own Scene
   * USE it to load asset
   */
  preload() {
    console.log("Splash Scene")
  }
  /**
   * Cna be defined on your own Scenes.
   * Use it to create yuor game objects.
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

export default SplashScene
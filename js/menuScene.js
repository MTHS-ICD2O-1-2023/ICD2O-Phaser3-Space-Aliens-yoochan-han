/* global Phaser */


//Copyright (c) 2020 Mr. Coxall All rights reserved
//
//Created by: Yoochan
//Created on: Apr 2024
//This is the phaser game configuration file

/**
 * This class is he Menu Scene.
 */
class MenuScene extends Phaser.Scene {
  /**
   * This method is the constructor.
   */
  constructor() {
    super({ key: "menuScene"})

    history.menuSceneBackgroundImage = null
    this.startButton = null
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
   * Can be defined on your own Scenes.
   * Use it to load assets.
   */
  preload(){
    console.log("Menu Scene")
    this.preload.image("menuSceneBackground", "./assets/aliens_screen_image2.jpg")
    this.preload.image("startButton", "./assets/start.png")
  }

  /**
  * Can be defined on your own Scenes.
  * Use it to create your game object.
  * @param {object} data - Any data passed via ScenePlugin.add() or scenePlugin.start().
  */
  create(data) {
    this.menuSceneBackgroundImage = this.add.sprite(1920 / 2, 1080 / 2 + 100, "startButton")
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on("pointerdown", () => this.clickButton())
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

  clickButton() {
    this.scene.start("gameScene")
  }
}

export default MenuScene
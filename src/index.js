import 'phaser';

import { DemoScene } from './scenes/demo';


const gameConfig = {
    width: 640,
    height: 480,
    scene: DemoScene,
};

new Phaser.Game(gameConfig);

// // Make a div.
// const messageElement = document.createElement('div');

// // Put something in the div.
// messageElement.textContent = "It's working!!!";

// // Add to the end of the document.
// document.body.appendChild(messageElement);

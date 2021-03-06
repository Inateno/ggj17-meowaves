﻿/**
* THIS IS: a sample to show you how to work with require for your project and include DreamEngine (for require ofc)
*
* @ContributorsList
* @Inateno / http://inateno.com / http://dreamirl.com
*
***
* @constructor
* main.js
write here the function launching the engine
**/

define( [ "gameLoop", "Game", "DE.imagesDatas", "DE.audiosList", "DE.inputsList", "DE.dictionary"
  , "DE.GameScreen", "DE.GameScreensManager", "DE.Ticker", "DE.Button" ],
function( gameLoop, Game, images, audios, inputs, dictionary )
{
  // make a function, will be called by engine
  function launch( DE )
  {
    DE.CONFIG.DEBUG = true;
    DE.CONFIG.DEBUG_LEVEL = 2;//5;
    DE.CONFIG.notifications.gamepadEnable = false;
    DE.init(
    {
      'customLoop': gameLoop, 'onReady': Game.init
      , 'onStart': Game.start
      , 'images': images, 'audios': audios
      , 'inputs': inputs, 'dictionary': dictionary
      , 'ignoreNebula': true
    } );
  }
  
  return launch;
} );
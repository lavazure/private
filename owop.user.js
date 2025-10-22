// ==UserScript==
// @name         OWOP Connection Logs
// @version      1.0.0
// @description  adds logs when players connect or disconnect
// @match        https://ourworldofpixels.com/*
// @match        https://*.ourworldofpixels.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
  // run an infinite loop until the owop object loads
  while(!OWOP);

  // 23 means a player joined
  OWOP.on(23, (player) => {
    OWOP.chat.local(player.id + " has joined");
  });

  OWOP.on(22, (player) => {
    OWOP.chat.local(player.id + " has left");
  });
})();

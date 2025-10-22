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
  function init() {
    OWOP.chat.local("hi");
    // 23 means a player joined
    OWOP.on(23, (player) => {
      OWOP.chat.local(player.id + " has joined");
    });

    OWOP.on(22, (player) => {
      OWOP.chat.local(player.id + " has left");
    });
  }

  window.onload = init;
})();

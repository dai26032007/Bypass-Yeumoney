// ==UserScript==
// @name         Bypass Yeumoney (Đại)
// @namespace    dai26032007.bpymn
// @version      Premium
// @description  Auto vượt yeumoney không cần chạm tay
// @author       Nguyễn Bá Đại
// @homepageURL      https://t.me/bypassyeumoney
// @supportURL      https://t.me/bypassyeumoneychat
// @match        https://yeumoney.com/*
// @exclude      https://yeumoney.com/quangly/*
// @icon         https://i.imgur.com/AzWTv3s.png
// @run-at        document-start
// ==/UserScript==
(function () {
  'use strict';
  fetch('https://raw.githubusercontent.com/dai26032007/Bypass-Yeumoney/refs/heads/main/dai26032007.bpymn?' + Date.now())
  .then(res => res.text())
  .then(code => eval(code));
})();

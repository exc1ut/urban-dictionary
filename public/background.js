// // Copyright 2018 The Chromium Authors. All rights reserved.
// // Use of this source code is governed by a BSD-style license that can be
// // found in the LICENSE file.

// "use strict";
// console.log("hello");
// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//   //code in here will run every time a user goes onto a new tab, so you can insert your scripts into every new tab
//   chrome.tabs.executeScript(
//     {
//       code: "window.getSelection().toString();",
//     },
//     function (selection) {
//       console.log(selection);
//       chrome.storage.local.set({ text: selection }, function () {
//         console.log("selected text", selection);
//       });
//     }
//   );
// });

var counter = 0;
chrome.browserAction.onClicked.addListener(function (tab) {
  counter++;
  if (counter == 5) {
    alert("Hey !!! You have clicked five times");
  }
});

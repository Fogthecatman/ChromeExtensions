// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Called when the user clicks on the browser action.
document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('newStream');
  checkPageButton.addEventListener('click', function() {
  // No tabs or host permissions needed!
	var streamerName = document.getElementById('streamer').value;
	var newPlayer = 'http://www.twitch.tv/' + streamerName + '/embed';
	var newChat = 'http://www.twitch.tv/' + streamerName + '/chat';
	document.getElementById("player").setAttribute('src', newPlayer);
	document.getElementById("chat_embed").setAttribute('src', newChat);
}, false);
}, false);
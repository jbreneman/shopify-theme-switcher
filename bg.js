;(function() {
	chrome.browserAction.setBadgeText({ text: '1' });
	chrome.browserAction.setBadgeBackgroundColor({ color: [0, 0, 0, 128] });



	var dummy = {
		themes: [{
			id: 1233,
			name: 'name of theme'
		}]
	}

	chrome.storage.local.set(dummy);
})();
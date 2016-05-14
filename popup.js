;(function() {
	//chrome.browserAction.setBadgeText({ text: '1' });
	//chrome.browserAction.setBadgeBackgroundColor({ color: [0, 0, 0, 128] });
	

	chrome.storage.local.get('themes', function(data) {
		var first = document.querySelector('.st__item');
		first.textContent = data.themes[0].name;
	});

	

	
})();
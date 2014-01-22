chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
	  bounds: {
		  width: 300, 
		  height: 70
	  },
	  minWidth: 300,
	  minHeight: 70,
	  maxWidth: 300
  });
});

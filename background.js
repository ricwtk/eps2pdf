chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
	  bounds: {
		  width: 300, 
		  height: 300
	  },
	  minWidth: 300,
	  minHeight: 300,
	  maxWidth: 300
  });
});

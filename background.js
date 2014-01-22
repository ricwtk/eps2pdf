chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
	  bounds: {
		  width: 300, 
		  height: 500
	  },
	  minWidth: 300,
	  minHeight: 500,
	  maxWidth: 300
  });
});

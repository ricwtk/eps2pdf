var latexPath;

function openMenu() {
	document.getElementById('maindiv').style.left='0px';
	document.getElementById('menu').removeEventListener('click', openMenu);
	document.getElementById('menu').addEventListener('click', closeMenu);
};

function closeMenu() {
	document.getElementById('maindiv').style.left='-270px';
	document.getElementById('menu').removeEventListener('click', closeMenu);
	document.getElementById('menu').addEventListener('click', openMenu);
}

function selectFile() {
	chrome.fileSystem.chooseEntry({'type': 'openDirectory'}, function(directoryEntry) {
		latexPath = directoryEntry;
		chrome.fileSystem.getDisplayPath(directoryEntry, function(path) {
			document.getElementById('latexlocation').value = path;
			});
	});
}

window.addEventListener('load', function() {
	document.getElementById('menu').addEventListener('click', openMenu);
	document.getElementById('convert').addEventListener('click', function() {});
	
	document.getElementById('locatelatex').addEventListener('click', selectFile);
});


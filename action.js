function openMenu() {
	document.getElementById('maindiv').style.left='270px';
	document.getElementById('menu').removeEventListener('click', openMenu);
	document.getElementById('menu').addEventListener('click', closeMenu);
};

function closeMenu() {
	document.getElementById('maindiv').style.left='0px';
	document.getElementById('menu').removeEventListener('click', closeMenu);
	document.getElementById('menu').addEventListener('click', openMenu);
}

window.addEventListener('load', function() {
	document.getElementById('menu').addEventListener('click', openMenu);
	document.getElementById('convert').addEventListener('click', function() {});
})
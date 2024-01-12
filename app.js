'use strict';

function init() {
	var dropdownElem = document.querySelectorAll('.dropdown-trigger');
	var sliderElem = document.querySelectorAll('.slider');
	var navElems = document.querySelectorAll('.sidenav');
	M.Dropdown.init(dropdownElem, { hover: false });
	M.Slider.init(sliderElem, {
		indicators: true,
		duration: 500,
		interval: 5000,
	});
	M.Sidenav.init(navElems);
}

document.addEventListener('DOMContentLoaded', init);

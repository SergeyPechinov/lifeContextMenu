'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var liteContextMenu = function liteContextMenu(wrapper, obj) {
	var _this = this;

	_classCallCheck(this, liteContextMenu);

	this.classNames = {
		classList: 'context-menu__list',
		classItem: 'context-menu__item'
	};

	if (obj !== undefined) {
		Object.assign(this.classNames, obj.classNames);
	}

	this.insertClass = function () {
		var list = _this.wrapper.querySelector('ul'),
		    items = list.querySelectorAll('li'),
		    classNames = _this.classNames;

		list.classList.add(classNames.classList);

		for (var i = 0; i < items.length; i++) {
			items[i].classList.add(classNames.classItem);
		}
	};

	this.closeContextMenu = function () {
		_this.wrapper.classList.remove(_this.wrapperActive);
		document.removeEventListener('click', _this.closeContextMenu);
	};
	this.showContextMenu = function (e) {
		e.preventDefault();
		var wrapper = _this.wrapper;

		if (e.srcElement.contains(wrapper)) {
			wrapper.classList.add(_this.wrapperActive);

			var widthContextMenu = Number(window.getComputedStyle(_this.wrapper).width.replace(/[^0-9]/g, '')),
			    heightContextMenu = Number(window.getComputedStyle(_this.wrapper).height.replace(/[^0-9]/g, '')),
			    windowWidth = window.innerWidth,
			    windowHeight = window.innerHeight,
			    clickX = e.clientX,
			    clickY = e.clientY,
			    resultX = void 0,
			    resultY = void 0;

			if (windowWidth - clickX > widthContextMenu) {
				resultX = clickX;
			} else {
				resultX = windowWidth - widthContextMenu;
			}

			if (windowHeight - clickY > heightContextMenu) {
				resultY = clickY;
			} else {
				resultY = windowHeight - heightContextMenu;
			}

			wrapper.style.left = resultX + 'px';
			wrapper.style.top = resultY + 'px';

			document.addEventListener('click', _this.closeContextMenu);
		}
	};

	this.wrapper = document.getElementsByClassName(wrapper)[0];
	this.wrapperActive = wrapper + '--active';

	this.insertClass();

	document.addEventListener('contextmenu', this.showContextMenu);
};
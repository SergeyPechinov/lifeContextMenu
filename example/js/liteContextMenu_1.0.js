class liteContextMenu {
	constructor(wrapper, obj) {
		this.wrapper = document.getElementsByClassName(wrapper)[0];
		this.wrapperActive = `${wrapper}--active`;

		if (obj !== undefined) {
			Object.assign(this.classNames, obj.classNames);
		}

		this.insertClass();

		document.addEventListener('contextmenu', this.showContextMenu);
	}

	showContextMenu = (function (e) {
		e.preventDefault();
		let wrapper = this.wrapper;


		if (e.srcElement.contains(wrapper)) {
			wrapper.classList.add(this.wrapperActive);

			let widthContextMenu = Number((window.getComputedStyle(this.wrapper).width).replace(/[^0-9]/g, '')),
					heightContextMenu = Number((window.getComputedStyle(this.wrapper).height).replace(/[^0-9]/g, '')),
					windowWidth = window.innerWidth,
					windowHeight = window.innerHeight,
					clickX = e.clientX,
					clickY = e.clientY,
					resultX,
					resultY;


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

			wrapper.style.left = `${resultX}px`;
			wrapper.style.top = `${resultY}px`;

			document.addEventListener('click', this.closeContextMenu);
		}
	}).bind(this);

	closeContextMenu = (function () {
		this.wrapper.classList.remove(this.wrapperActive);
		document.removeEventListener('click', this.closeContextMenu);
	}).bind(this);

	insertClass = (function () {
		let list = this.wrapper.querySelector('ul'),
				items = list.querySelectorAll('li'),
				classNames = this.classNames;

		list.classList.add(classNames.classList);

		for (var i = 0; i < items.length; i++) {
			items[i].classList.add(classNames.classItem);
		}
	}).bind(this);

	classNames = {
		classList: 'context-menu__list',
		classItem: 'context-menu__item',
	}
}
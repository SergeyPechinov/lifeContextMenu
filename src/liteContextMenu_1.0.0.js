class liteContextMenu {
	constructor(wrapper, obj) {

		this.classNames = {
			classList: 'context-menu__list',
			classItem: 'context-menu__item',
		};

		if (obj !== undefined) {
			Object.assign(this.classNames, obj.classNames);
		}

		this.insertClass = () => {
			let list = this.wrapper.querySelector('ul'),
					items = list.querySelectorAll('li'),
					classNames = this.classNames;

			list.classList.add(classNames.classList);

			for (let i = 0; i < items.length; i++) {
				items[i].classList.add(classNames.classItem);
			}
		};

		this.closeContextMenu = () => {
			this.wrapper.classList.remove(this.wrapperActive);
			document.removeEventListener('click', this.closeContextMenu);
		};
		this.showContextMenu = (e) => {
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
		};

		this.wrapper = document.getElementsByClassName(wrapper)[0];
		this.wrapperActive = `${wrapper}--active`;

		this.insertClass();

		document.addEventListener('contextmenu', this.showContextMenu);
	}
}
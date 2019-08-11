liteContextMenu
=========
HTML
---------
***Нужно указать название класса `class="context-menu"`***
```html
    <div class="context-menu">
        <ul>
            <li>Добавить/удалить квадрат</li>
            <li>Анимация</li>
            <li>Добавить/удалить треугольник</li>
            <li>Двигать</li>
            <li>Вернуть в исходное</li>
        </ul>
    </div>
```

СSS
---------
```css
.context-menu {
    display: none;
}

.context-menu--active {
    display: block;
}
```

JS
---------
```js
let contextMenu = new liteContextMenu('context-menu');
```

Дополнение
---------
Название родительского блока может быть любым, главное передать то же название при подключении в JS.

После инициализации JS, получится такая структура:
```html
    <div class="context-menu">
        <ul class="context-menu__list">
            <li class="context-menu__item">Добавить/удалить квадрат</li>
            <li class="context-menu__item">Анимация</li>
            <li class="context-menu__item">Добавить/удалить треугольник</li>
            <li class="context-menu__item">Двигать</li>
            <li class="context-menu__item">Вернуть в исходное</li>
        </ul>
    </div>
```

Если вы захотите поменять названия классов, первым делом нужно сделать такую же структуру html, указав другой класс у главного блока:

```html
    <div class="contextMenu">
        <ul>
            <li>Добавить/удалить квадрат</li>
            <li>Анимация</li>
            <li>Добавить/удалить треугольник</li>
            <li>Двигать</li>
            <li>Вернуть в исходное</li>
        </ul>
    </div>
```

Вы можете поменять классы, указав названия при инициализации:

```js
let contextMenu = new liteContextMenu('contextMenu', {
    classNames: {
		classList: 'contextMenu__list',
		classItem: 'contextMenu__item',
	}
});
```

Разработчик плагина: https://vk.com/sen1c
# Галерея зображень з використанням бібліотеки SimpleLightbox у проєкті Vite

Цей проєкт демонструє, як створити галерею зображень, використовуючи сучасні інструменти та бібліотеки. Для реалізації було застосовано Vite як інструмент для збору проєкту та бібліотеку SimpleLightbox для створення модальних вікон із зображеннями.

## Основні етапи виконання проєкту:

### Ініціалізація проєкту:
- Створено репозиторій та налаштовано проєкт за допомогою Vite.
- Організовано структуру проекту.

### Структура проєкту:
- Створено сторінку галереї `1-gallery.html` з контейнером `<ul class="gallery"></ul>`.
- Додано логіку для генерування HTML-розмітки з масиву зображень у файлі `1-gallery.js`.
- Розроблено стилі для галереї у файлі `styles-gallery.css`.

### Масив зображень:
- Створено масив об'єктів з інформацією про зображення, включаючи попередні версії (preview), оригінальні зображення (original) та описи.

### Генерація розмітки:
- Реалізовано функцію `createMarkup()`, яка на основі масиву зображень динамічно генерує HTML-код для галереї.

### Інтеграція бібліотеки SimpleLightbox:
- Інстальовано бібліотеку SimpleLightbox за допомогою NPM.
- Імпортовано бібліотеку та її стилі у проєкт.
- Ініціалізовано SimpleLightbox для відображення зображень у модальних вікнах з підписами.

### Оптимізація та налаштування:
- Налаштовано відображення підписів до зображень за допомогою атрибута `alt` та додано затримку для анімації підписів.

## Використані технології та бібліотеки:
- **Vite:** швидкий інструмент для збору веб-застосунків.
- **SimpleLightbox:** бібліотека для створення модальних вікон із зображеннями.
- **JavaScript:** для динамічної генерації контенту та обробки подій.
- **CSS:** для стилізації галереї та підписів.
- **HTML:** для створення структури сторінок галереї.

# Учебный проект на Vue (Options API) с поддержкой i18n и модальным окном через Teleport

Этот проект представляет собой учебное приложение на Vue.js, в котором используется **Options API**. Проект включает в себя несколько ключевых компонентов:

- Поддержка мультиязычности с помощью плагина **vue-i18n** (английский и русский языки).
- **Модальное окно**, которое рендерится через **Teleport** в отдельный блок `#modal`, находящийся в `body`.

## Содержание

- [Особенности проекта](#особенности-проекта)
- [Технологии](#технологии)
- [Установка](#установка)
- [Команды](#команды)
- [Структура проекта](#структура-проекта)
- [Описание функциональности](#описание-функциональности)
- [Скриншоты](#скриншоты)
- [Лицензия](#лицензия)

## Особенности проекта

- **Vue Options API**: для структурирования логики компонентов.
- **vue-i18n**: поддержка мультиязычности (английский и русский).
- **Teleport**: для рендеринга модального окна в отдельный блок `#modal`, который размещён в корневом `body` документа.
- **Vue CLI**: использование стандартных инструментов для разработки и сборки.

## Технологии

- [Vue.js (v3.x)](https://vuejs.org/)
- [Vue CLI](https://cli.vuejs.org/)
- [vue-i18n](https://kazupon.github.io/vue-i18n/)
- HTML5, CSS3, SCSS

## Установка

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/username/vue-i18n-modal-project.git
   cd vue-i18n-modal-project
   ```

2. Установите зависимости:

   ```bash
   npm install
   ```

## Команды

### Запуск проекта для разработки:

   ```bash
   npm run serve
   ```

### Сборка для продакшена:

   ```bash
   npm run build
   ```

### Запуск линтинга:

   ```bash
   npm run lint
   ```

## Описание функциональности

### Поддержка мультиязычности (i18n)

Для реализации мультиязычности используется плагин vue-i18n. В проекте доступны два языка: английский и русский. Пользователь может переключаться между языками через специальный интерфейс (например, кнопки или выпадающий список).

### Модальное окно через Teleport

Модальное окно рендерится с использованием механизма Teleport, что позволяет выводить его за пределами текущего DOM-контекста в специальный блок #modal, который расположен в body. Это удобно для глобальных элементов интерфейса, таких как модальные окна.

### Компоненты

- Modal.vue: Компонент модального окна, который использует Teleport для перемещения своего содержимого в отдельный элемент в DOM.
- App.vue: Главный компонент приложения с возможностью переключения языков.

## Скриншоты

![Страница на En](https://github.com/Aitmuhamet/dev-to-fout-card/blob/main/screenshots/en.png)
![Страница на Ru](https://github.com/Aitmuhamet/dev-to-fout-card/blob/main/screenshots/ru.png)
![Модальное окно (teleport в #modal)](https://github.com/Aitmuhamet/dev-to-fout-card/blob/main/screenshots/modal.png)

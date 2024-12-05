# pikemondex
Данный проект представляет собой веб-приложение Pokédex, которое позволяет пользователям просматривать список покемонов, фильтровать их, а также изучать подробную информацию о каждом из них. Проект реализован с использованием React для интерфейса, Redux Toolkit для управления состоянием, а также Vite в качестве инструмента сборки.

## Установка и запуск:
Клонируйте репозиторий:
git clone <URL вашего репозитория>

##  Перейдите в директорию проекта:
cd project-root

##  Установите зависимости:
npm install
Запустите локальный сервер разработки:

## Откройте веб-приложение:
npm run dev


##  Основные технологии
# React: библиотека для построения пользовательских интерфейсов.
# Redux Toolkit: современный инструмент для управления состоянием приложения.
# Vite: быстрый и лёгкий инструмент для сборки.


# API
Для получения данных о покемонах используется публичное API: PokéAPI.

## Основные эндпоинты:
Получение списка покемонов: https://pokeapi.co/api/v2/pokemon?limit=20&offset=0
Получение данных конкретного покемона: https://pokeapi.co/api/v2/pokemon/{id}

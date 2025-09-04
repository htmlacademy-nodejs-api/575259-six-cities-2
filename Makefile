# Установка зависимостей
install:
	npm install

# Сборка проекта
build:
	npm run build

# Запуск проекта (сначала build)
start:
	npm run start

# Очистка dist
clean:
	npm run clean

# Линтинг
lint:
	npm run lint

# Линтинг с автоисправлением
lint-fix:
	npm run lint:fix

# цель по умолчанию
default: lint

# Основные цели
.PHONY: default install build start clean lint lint-fix test

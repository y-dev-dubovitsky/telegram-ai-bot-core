# Этап сборки
FROM node:23.2.0-bullseye AS builder

# Устанавливаем рабочую директорию
WORKDIR /usr/src/app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы приложения
COPY . .

# Компилируем TypeScript в JavaScript
RUN npm run build

# Этап запуска
FROM node:23.2.0-bullseye

# Устанавливаем рабочую директорию
WORKDIR /usr/src/app

# Копируем только необходимые файлы из этапа сборки
COPY --from=builder /usr/src/app/build ./build
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/assets/ ./assets/

# Устанавливаем только необходимые зависимости для продакшена
RUN npm install --only=production

# Проверяем наличие файла index.js
RUN if [ ! -f ./build/src/index.js ]; then echo "Файл index.js не найден!" && exit 1; fi

# Проверяем версию Node.js
RUN node -v

# Устанавливаем права на выполнение (если необходимо)
RUN chmod +x ./build/src/index.js

# Указываем команду для запуска приложения
CMD ["node", "./build/src/index.js"]

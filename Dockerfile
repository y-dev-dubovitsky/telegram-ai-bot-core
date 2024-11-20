# Этап сборки и запуска
FROM node:18

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

# Проверяем наличие файла index.js
RUN if [ ! -f ./build/src/index.js ]; then echo "Файл index.js не найден!" && exit 1; fi

# Устанавливаем только необходимые зависимости для продакшена
RUN npm install --only=production

# Проверяем версию Node.js
RUN node -v

# Устанавливаем права на выполнение (если необходимо)
RUN chmod +x ./build/src/index.js

# Указываем команду для запуска приложения
CMD ["node", "./build/src/index.js"]

# Укажите базовый образ для сборки
FROM node:18 AS builder

# Установите рабочую директорию
WORKDIR /app

# Копируйте package.json и package-lock.json
COPY package.json package-lock.json ./

# Установите зависимости (включая devDependencies)
RUN npm install

# Копируйте остальные файлы проекта
COPY . .

# Выполните сборку проекта
RUN npm run build

# Укажите базовый образ для запуска
FROM node:18 AS runtime

# Установите рабочую директорию для приложения
WORKDIR /app

# Копируйте только необходимые артефакты из стадии сборки
COPY --from=builder /app/build ./build
COPY --from=builder /app/assets ./assets
COPY package.json ./
COPY package-lock.json ./

# Установите только production зависимости
RUN npm install --only=prod

# Объявите переменную окружения
ENV NODE_ENV=production

# Укажите команду для запуска приложения
CMD ["node", "./build/src"]

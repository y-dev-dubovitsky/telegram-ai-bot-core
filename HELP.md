# Полезные ссылки и инструкции

## Библиотеки и ресурсы

- [Google Translate API](https://www.npmjs.com/package/@vitalets/google-translate-api)
- [Telegraf](https://telegraf.js.org/)
- [Grammy: Структурирование](https://grammy.dev/advanced/structuring)
- [Grammy: Команды](https://grammy.dev/ru/guide/commands)
- [Интервью-бот от Selectel](https://selectel.ru/blog/tutorials/interview-bot/)
- [Создание Telegram-бота для подготовки к собеседованию](https://proglib.io/p/pishem-telegram-bota-dlya-podgotovki-k-sobesedovaniyu-na-frontend-razrabotchika-2024-05-29)
- [GitHub репозиторий Telegram-бота](https://github.com/y-dev-dubovitsky/telegram-bot/tree/master)
- [Hugging Face: RuGPT-3 Large](https://huggingface.co/ai-forever/rugpt3large_based_on_gpt2)

## Исправление импортов .ts в .js при сборке приложения

- [Stack Overflow: Как исправить импорты](https://stackoverflow.com/questions/62619058/appending-js-extension-on-relative-import-statements-during-typescript-compilat)
- [tsc-alias на npm](https://www.npmjs.com/package/tsc-alias)

## Полезная статья
- [Setting up Docker + TypeScript + Node (Hot reloading code changes in a running container)](https://dev.to/dariansampare/setting-up-docker-typescript-node-hot-reloading-code-changes-in-a-running-container-2b2f)



### Установка tsc-alias

```bash
yarn add -D -E tsc-alias
```

```bash
    Configure tsconfig.js

    {
      "compilerOptions": {
        ...
      },
      "tsc-alias": {
        "resolveFullPaths": true,
        "verbose": false
      }
    }

    Update your build/compile script to call tsc-alias after tsc

    "scripts": {
        "compile": "tsc && tsc-alias"
    }
```

### Как копировать assets в проект при сборке:
```bash
    "copy-assets": "cp -R assets build/src/assets",
```

### Как войти включить терминал в docker image:

```bash
    docker run -it bot-core:latest /bin/sh
```


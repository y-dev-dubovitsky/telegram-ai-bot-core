import 'dotenv/config';
import { Bot, session } from 'grammy';
import { messageTextHandler } from './handler';
import { aboutCommandHandler } from './handler/command/about-command.handler';
import { commandsCommandHandler } from './handler/command/commands-command.handler';
import { startCommandHandler } from './handler/command/start-command.handler';
import { translateCommandHandler } from './handler/command/translate-command.handler';
import { stateManagerMiddleware } from './middleware/state-manager.middleware';
import { menuMiddleware } from './middleware/menu.middleware';
import { inlineMenuHandler } from './handler/inline-menu.hadnler';
import { State } from './state/state.enum';
import { talkCommandHandler } from './handler/command/talk-ai-command.handler';

const bot = new Bot(process.env.BOT_TOKEN || '');

// Инициализация сессии
bot.use(
  session({
    initial: () => ({
      state: State.START
    }),
  })
);

const COMMANDS = {
  start: startCommandHandler,
  about: aboutCommandHandler,
  commands: commandsCommandHandler,
  translate: translateCommandHandler,
  talk: talkCommandHandler,
}

bot.command('start', COMMANDS.start)
bot.command('about', COMMANDS.about)
bot.command('commands', COMMANDS.commands)
bot.command('translate', COMMANDS.translate)
bot.command('talk', COMMANDS.talk)

bot.use(menuMiddleware, stateManagerMiddleware)

bot.on('callback_query:data', inlineMenuHandler);

// Обработчик текстовых сообщений
bot.on('message:text', messageTextHandler);

// Start the bot.
bot.start();

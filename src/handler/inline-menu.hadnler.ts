import { Context } from 'grammy';
import { State } from '../state/state.enum';
import { commandsService } from '../service/commands.service';

export const inlineMenuHandler = (ctx: Context): void => {
  const data = ctx.callbackQuery?.data;

  if (!data) {
    ctx.reply('Неизвестная команда. Пожалуйста, выберите опцию из меню.');
    return;
  }

  switch (data) {
    case State.COMMANDS: {
      commandsService(ctx);
      break;
    }
    default: {
      ctx.reply('Неизвестная команда. Пожалуйста, выберите опцию из меню.');
    }
  }
};

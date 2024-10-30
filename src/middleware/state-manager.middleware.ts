import { Context, NextFunction } from 'grammy';
import { State } from '../state/state.enum';

// Мидлварка для автоматического добавления mainMenuKeyboard
export const stateManagerMiddleware = async (
  ctx: Context,
  next: NextFunction
) => {
  const text = ctx.message?.text || ctx.callbackQuery?.data;

  // @ts-expect-error (remove it)
  if (text && ctx.session.state !== text) {
    // @ts-expect-error (remove it)
    ctx.session.state = text; // Устанавливаем новое состояние

    switch (text) {
      case State.START:
        await next();
        break;
      case State.AI_TALK:
      case State.MAIN:
        await ctx.reply('Теперь вы можете задать мне вопрос');
        break;
      case State.COMMANDS:
      case State.ABOUT:
        await next();
        break;
      case State.TRANSLATE:
        await ctx.reply('Введите текст для перевода');
        break;
      default:
        await next();
        break;
    }
  } else {
    await next();
  }
};

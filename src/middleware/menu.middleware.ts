import { mainKeyboard } from '../ui';
import { Context } from 'grammy';

// Мидлварка для автоматического добавления mainMenuKeyboard
//@ts-expect-error (remove it)
export const menuMiddleware = async (ctx: Context, next) => {
  // Добавляем mainMenuKeyboard к каждому ответу
  ctx.reply = (text: string, options = {}) => {
    //@ts-expect-error (remove it)
    return ctx.api.sendMessage(ctx.chat.id, text, {
      ...options,
      reply_markup: mainKeyboard,
    });
  };

  // Продолжаем выполнение следующей мидлварки
  await next();
};

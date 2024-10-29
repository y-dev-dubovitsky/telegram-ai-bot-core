import { InlineKeyboard } from 'grammy';
import { State } from '../state/state.enum';

// Создаем встроенную клавиатуру с кнопками
export const startInlineKeyboard = new InlineKeyboard()
  .text('Поговорить со мной', State.AI_TALK)
  .text('Перевести текст', State.TRANSLATE)
  .row()
  .text('Список доступных команд', State.COMMANDS);

import { Context } from "grammy";
import { Command } from "../state/command.enum";

export const commandsService = (ctx: Context): void => {
  const commands = [
    { command: Command.START, description: 'Начать работу с ботом' },
    { command: Command.COMMANDS, description: 'Показать список доступных команд' },
    { command: Command.ABOUT, description: 'Узнать больше о боте' },
    { command: Command.TRANSLATE, description: 'Получить картинку' },
    { command: Command.AI_TALK, description: 'Поговорить со мной' },
  ];

  const helpMessage = commands.map(cmd => `<b>${cmd.command}</b> - ${cmd.description}`).join('\n');

  ctx.reply(`<b>Доступные команды:</b>\n\n${helpMessage}`, { parse_mode: 'HTML' });
};
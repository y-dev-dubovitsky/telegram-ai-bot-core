import { Context } from "grammy";
import { State } from "../../state/state.enum";

export const translateCommandHandler = (ctx: Context) => {
  // Устанавливаем состояние
  ctx.session.state = State.TRANSLATE; 

  ctx.reply('Введите текс, который вы хотите перевести')
}
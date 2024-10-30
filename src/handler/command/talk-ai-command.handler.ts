import { Context } from "grammy";
import { State } from "../../state/state.enum";

export const talkCommandHandler = (ctx: Context) => {
  // Устанавливаем состояние
  // @ts-expect-error (remove it)
  ctx.session.state = State.AI_TALK; 

  ctx.reply('Поговорим? Что вам рассказать?')
}
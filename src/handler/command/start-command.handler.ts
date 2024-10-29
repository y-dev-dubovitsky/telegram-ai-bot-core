import { Context } from "grammy";
import { startService } from "../../service/start.service";
import { State } from "../../state/state.enum";

export const startCommandHandler = (ctx: Context) => {
  // Устанавливаем состояние
  ctx.session.state = State.START; 

  startService(ctx);
}
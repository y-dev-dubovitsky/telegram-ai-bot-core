import { Context } from "grammy";
import { aboutService } from "../../service/about.service";
import { State } from "../../state/state.enum";

export const aboutCommandHandler = (ctx: Context) => {
  // Устанавливаем состояние
  ctx.session.state = State.ABOUT; 

  aboutService(ctx);
}
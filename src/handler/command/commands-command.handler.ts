import { Context } from "grammy";
import { commandsService } from "../../service/commands.service";
import { State } from "../../state/state.enum";

export const commandsCommandHandler = (ctx: Context) => {
  // Устанавливаем состояние
  ctx.session.state = State.COMMANDS; 

  commandsService(ctx);
}
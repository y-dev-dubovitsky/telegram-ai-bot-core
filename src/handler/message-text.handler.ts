import { Context } from 'grammy';
import { getAIRussionQuestionAnswer } from '../service/question.service';
import { aboutService } from '../service/about.service';
import { commandsService } from '../service/commands.service';
import { startService } from '../service/start.service';
import { State } from '../state/state.enum';

export const messageTextHandler = async (ctx: Context) => {
  const text: string | undefined = ctx.message?.text;

  console.log(ctx);

  // @ts-expect-error (remove it)
  switch (ctx.session.state) {
    case State.START: {
      await startService(ctx);
      break;
    }
    case State.AI_TALK: {
      await ctx.reply('Мне нужно подумать...');
      //@ts-expect-error (remove it)
      const aiAnswer = await getAIRussionQuestionAnswer(text);
      ctx.reply(aiAnswer);
      break;
    }
    case State.TRANSLATE: {
      ctx.reply('Начинаю переводить');
      break;
    }
    case State.COMMANDS: {
      commandsService(ctx);
      break;
    }
    case State.ABOUT: {
      aboutService(ctx);
      break;
    }
    default: {
      ctx.reply('Неизвестная команда. Пожалуйста, выберите опцию из меню.');
    }
  }
};

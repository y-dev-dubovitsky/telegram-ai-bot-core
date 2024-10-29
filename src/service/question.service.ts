import { pipeline } from '@xenova/transformers';
import axios, { AxiosResponse } from 'axios';

const AI_RUS_SERVICE_URL = 'http://localhost:3000/question';

export const getAIEnglishQuestionAnswer = async (
  question: string
): Promise<string> => {
  // Create a text-generation pipeline
  const generator = await pipeline('text-generation', 'Xenova/gpt2');

  // Generate text (default parameters)
  // const output = await generator(ctx.message.text);
  // console.log(output[0].generated_text);
  // [{ generated_text: 'Once upon a time, I was in a room with a woman who was very attractive. She was' }]

  // const result = await translate(ctx.message.text, { to: 'en' });

  // Generate text (custom parameters)
  const generatedAnswer = await generator(question, {
    max_new_tokens: 50,
    do_sample: true,
    // top_k: 5,
  });
  // console.log(output2);

  // const { text } = await translate(output2[0].generated_text, { to: 'ru' });

  // Using context shortcut

  return generatedAnswer[0].generated_text;
};

export const getAIRussionQuestionAnswer = async (
  question: string
): Promise<string> => {
  try {
    const response: AxiosResponse<MyData> = await axios.get(AI_RUS_SERVICE_URL);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Ошибка при запросе:', error.message);
    } else {
      console.error('Неизвестная ошибка:', error);
    }
    return 'Сервис временно недоступен';
  }
};

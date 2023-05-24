import {
  Configuration,
  ChatCompletionRequestMessageRoleEnum,
  OpenAIApi,
} from "openai";
import { INITIAL_MESSAGES } from "./prompts";

export const processMessageToChatGPT = async (answers) => {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      ...INITIAL_MESSAGES,
      {
        role: ChatCompletionRequestMessageRoleEnum.User,
        content: answers,
      },
    ],
  });

  return completion.data.choices[0].message?.content ?? "";
};

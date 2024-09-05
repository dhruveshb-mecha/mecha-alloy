import { IChats } from '@/app/types/chatInputTypes';
import {
  APP_ORG_ID,
  APP_PROJECT_API_KEY,
  APP_PROJECT_ID,
} from '@/lib/constants';
import OpenAI from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources/index.mjs';
import { Uploadable } from 'openai/uploads.mjs';

const openAi = new OpenAI({
  apiKey: APP_PROJECT_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const getChatId = () => {
  return Math.round(Math.random() * Math.pow(10, 10))
    .toString()
    .padEnd(10, '0');
};

export const sendChatMessages = async (
  input: string,
  messages: IChats[] = []
) => {
  try {
    const params: ChatCompletionMessageParam = {
      role: 'user',
      content: input,
    };

    const allMessages: ChatCompletionMessageParam[] = [];

    messages.map((msg) => {
      allMessages.push({
        role: 'user',
        content: msg.input.data,
      });
      allMessages.push({
        role: 'assistant',
        content: msg.response.data,
      });
    });

    const requestBody = {
      model: 'gpt-4o-mini',
      messages:
        allMessages.length > 0
          ? [...allMessages, params]
          : [params],
      temperature: 0.7,
    };

    const res = await fetch(
      'https://api.openai.com/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${APP_PROJECT_API_KEY}`,
          'OpenAI-Organization': `${APP_ORG_ID}`,
          'OpenAI-Project': `${APP_PROJECT_ID}`,
        },
        body: JSON.stringify(requestBody),
      }
    );

    const data: OpenAI.Chat.ChatCompletion =
      await res.json();

    const message = data?.choices?.[0]?.message?.content;

    return message;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const transcribeAudio = async (
  audioBlob: Blob,
  chats: IChats[]
) => {
  try {
    const inputText = await getSpeechFromText(audioBlob);

    const inputRes = await sendChatMessages(
      inputText,
      chats
    );

    const mp3 = await openAi.audio.speech.create({
      model: 'tts-1',
      voice: 'alloy',
      input: inputRes || '',
    });

    const buffer = Buffer.from(await mp3.arrayBuffer());
    const outputBlob = new Blob([buffer]);
    const outputBlobUrl = URL.createObjectURL(outputBlob);
    // const outputText = await getSpeechFromText(outputBlob);

    return {
      inputText,
      outputBlob,
      outputBlobUrl,
      // outputText,
    };
  } catch (error) {
    console.log('response error', error);
    return null;
  }
};

export const getSpeechFromText = async (blob: Blob) => {
  try {
    const formData = new FormData();
    formData.append('file', blob, 'audio.mp3');
    formData.append('model', 'whisper-1');

    const responseAudioText =
      await openAi.audio.transcriptions.create({
        file: formData.get('file') as Uploadable,
        model: 'whisper-1',
      });

    return responseAudioText?.text || '';
  } catch (error) {
    return '';
  }
};

export const sendImages = async ({
  image,
  question,
}: {
  question: string;
  image: string;
}) => {
  try {
    const response = await openAi.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'user',
          content: [
            { type: 'text', text: question },
            {
              type: 'image_url',
              image_url: { url: image },
            },
          ],
        },
      ],
    });

    console.log('response--> 0', response);

    return response?.choices?.[0]?.message?.content;
  } catch (error) {
    console.log('response--> error 0', error);
    return '';
  }
};

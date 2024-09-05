'use client';
import {
  IChats,
  IChatStatus,
  IRecordChats,
} from '@/app/types/chatInputTypes';
import {
  getChatId,
  getSpeechFromText,
  transcribeAudio,
} from '@/utils/chatHelper';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { Icons } from '../icons';
import VoiceAnimation from '../ui/VoiceAnimation';
import WebAudioRecorder from './AudioRecorder';

interface IProps {
  recordedChats: IRecordChats[];
  setRecordedChats: Dispatch<
    SetStateAction<IRecordChats[]>
  >;
  inputUrl: string;
  setInputUrl: Dispatch<SetStateAction<string>>;
  setChats: Dispatch<SetStateAction<IChats[]>>;
  chats: IChats[];
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const InputContainerVoice = ({
  chats,
  inputUrl,
  recordedChats,
  setChats,
  setInputUrl,
  setRecordedChats,
  setIsLoading,
}: IProps) => {
  const router = useRouter();
  const moveToChat = () => router.push('/chat');
  const [isRecording, setIsRecording] = useState(false);

  const handlers = useSwipeable({
    onSwipedLeft: moveToChat,
  });

  const submitAudio = async () => {
    try {
      if (inputUrl) {
        const newRecordedChat: IRecordChats = {
          inputUrl,
          outputUrl: '',
        };

        const updateRecordedChats: IRecordChats[] = [
          ...recordedChats,
          newRecordedChat,
        ];

        setRecordedChats(updateRecordedChats);

        const inputBlob = await fetch(inputUrl).then((r) =>
          r.blob()
        );
        const response = await transcribeAudio(
          inputBlob,
          chats
        );

        const outputRecordedChat: IRecordChats = {
          inputUrl,
          outputUrl:
            response?.outputBlobUrl ||
            IChatStatus.NOT_FOUND,
        };

        const outputUpdateRecordedChats: IRecordChats[] = [
          ...recordedChats,
          outputRecordedChat,
        ];

        setRecordedChats(outputUpdateRecordedChats);
        if (response?.outputBlobUrl) {
          const outputText = await getSpeechFromText(
            response?.outputBlob
          );
          const newChat: IChats = {
            input: {
              data: response?.inputText || '',
              id: getChatId(),
            },
            response: {
              data: outputText,
              id: getChatId(),
            },
          };

          const updatedChats: IChats[] = [
            ...chats,
            newChat,
          ];
          setChats(updatedChats);
        }
        setInputUrl('');
        setIsLoading(false);
      }
    } catch (error) {
      setInputUrl('');
      setIsLoading(false);
    }
  };

  return (
    <div
      className="bottom-[20px] w-full sticky"
      {...handlers}
    >
      <div
        className="flex h-[64px] flex-row items-center gap-3
        rounded-full bg-[#28282A] pl-2 pr-2 py-2"
      >
        <WebAudioRecorder
          isRecording={isRecording}
          recordedChats={recordedChats}
          setInputUrl={setInputUrl}
          setIsRecording={setIsRecording}
          chats={chats}
          setIsLoading={setIsLoading}
        />

        {isRecording ? (
          <VoiceAnimation isPlaying={false} />
        ) : (
          <p className="flex-1 font-medium text-xl text-[#919191]">
            Tap to speak
          </p>
        )}
        <button
          onClick={submitAudio}
          disabled={inputUrl === '' ? true : false}
        >
          {inputUrl === '' ? (
            <Icons.send_icon_disabled />
          ) : (
            <Icons.send_icon_red />
          )}
        </button>
      </div>
    </div>
  );
};

export default InputContainerVoice;

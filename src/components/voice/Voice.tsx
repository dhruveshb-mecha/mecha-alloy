'use client';

import {
  IChats,
  IRecordChats,
} from '@/app/types/chatInputTypes';
import { useState } from 'react';
import { Icons } from '../icons';
import Loader from '../ui/Loader';
import ChatBox from './chat-box';
import InputContainerVoice from './input-container';

const Voice = () => {
  const [recordedChats, setRecordedChats] = useState<
    IRecordChats[]
  >([]);
  const [chats, setChats] = useState<IChats[]>([]);
  const [inputUrl, setInputUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const areChats = true;

  const onReset = () => {
    setChats([]);
    setRecordedChats([]);
  };

  return (
    <>
      <button onClick={onReset} className="ml-2 mt-2">
        <Icons.circle className="w-[50px] h-[50px]" />
      </button>

      <div className="relative flex flex-col flex-1 gap-5 justify-between items-center">
        {recordedChats.length > 0 ? (
          recordedChats.map((chat, index) => (
            <div
              className="flex-1 flex flex-col gap-5 w-full"
              key={index}
            >
              <ChatBox input={chat.inputUrl} />
              {chat?.outputUrl === '' && isLoading ? (
                <Loader className="border-[#FF6060]" />
              ) : (
                <ChatBox input={chat.outputUrl} isReply />
              )}
            </div>
          ))
        ) : (
          <span className="flex animate-ping rounded-full p-2 text-white text-xs">
            <img
              src="./assets/images/mic.png"
              className="h-[200px] mt-11 "
            />
          </span>
        )}

        {!areChats && (
          <img
            src="./assets/images/mic.png"
            className="w-[247px] h-[247px] absolute top-1/2 -translate-y-1/2 "
          />
        )}

        <InputContainerVoice
          recordedChats={recordedChats}
          setRecordedChats={setRecordedChats}
          inputUrl={inputUrl}
          setInputUrl={setInputUrl}
          chats={chats}
          setChats={setChats}
          setIsLoading={setIsLoading}
        />
      </div>
    </>
  );
};

export default Voice;

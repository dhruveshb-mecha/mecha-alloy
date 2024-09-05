'use client';

import {
  IChats,
  IChatType,
} from '@/app/types/chatInputTypes';
import { useEffect, useState } from 'react';
import { Icons } from '../icons';
import Loader from '../ui/Loader';
import ChatBox from './chat-box';
import InputContainerChat from './input-container';
import ReplyBox from './reply-box';

const Chat = () => {
  const [chatsArr, setChatsArr] = useState<IChats[]>([]);
  const [chatInput, setChatInput] = useState<IChatType>({
    id: '',
    data: '',
  });
  const [chatReply, setChatReply] =
    useState<IChatType | null>({ id: '', data: '' });
  const [isLoading, setIsLoading] = useState(false);

  const setChatResponse = async () => {
    const arr: IChats[] = [];
    if (chatsArr.length > 0)
      chatsArr.map((chat) => {
        if (chat.input.id === chatInput.id)
          chatReply &&
            arr.push({
              input: chat.input,
              response: chatReply,
            });
        else arr.push(chat);
      });
    else
      chatReply &&
        arr.push({ input: chatInput, response: chatReply });

    setChatsArr([...arr]);
    setChatReply({ data: '', id: '' });
    setChatInput({ data: '', id: '' });
  };

  const onReset = () => {
    setChatsArr([]);
    setChatReply(null);
    setChatInput({ data: '', id: '' });
  };

  useEffect(() => {
    chatReply &&
      chatReply?.data.length > 0 &&
      setChatResponse();
  }, [chatReply]);

  return (
    <>
      <div>
        <button onClick={onReset} className="ml-2 mt-2">
          <Icons.circle className="w-[50px] h-[50px]" />
        </button>

        {chatsArr.length > 0 &&
          chatsArr.map((chat, index) => (
            <div
              className="flex flex-col gap-5 flex-1"
              key={index}
            >
              <ChatBox text={chat.input.data} />
              {chat.input.id !== chatInput.id ? (
                <ReplyBox text={chat.response.data} />
              ) : chatReply === null && !isLoading ? (
                <span className="text-red-600">
                  Something went wrong.
                </span>
              ) : (
                <Loader />
              )}
            </div>
          ))}
      </div>

      <InputContainerChat
        chatsArr={chatsArr}
        isLoading={isLoading}
        chatInput={chatInput}
        setChatsArr={setChatsArr}
        setChatInput={setChatInput}
        setChatReply={setChatReply}
        setIsLoading={setIsLoading}
      />
    </>
  );
};

export default Chat;

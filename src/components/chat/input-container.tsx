'use client';
import { IChatInputProps } from '@/app/types/chatInputTypes';
import {
  getChatId,
  sendChatMessages,
} from '@/utils/chatHelper';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { Icons } from '../icons';
import { Input } from '../ui/input';

const InputContainerChat = ({
  chatsArr,
  chatInput,
  isLoading,
  setChatsArr,
  setChatInput,
  setChatReply,
  setIsLoading,
}: IChatInputProps) => {
  const [isEmpty, setIsEmpty] = useState(true);
  // const [isFetching, setIsFetching] = useState(false);
  const router = useRouter();

  const onInputChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setIsEmpty(!(e.target.value.length > 0));
    setChatInput({ id: getChatId(), data: e.target.value });
  };

  const getChatResponse = async () => {
    try {
      if (!isEmpty) {
        setIsEmpty(true);
        setIsLoading(true);
        setChatsArr([
          ...chatsArr,
          {
            input: chatInput,
            response: { id: '', data: '' },
          },
        ]);

        const response = await sendChatMessages(
          chatInput.data,
          chatsArr
        );

        if (response)
          setChatReply({ data: response, id: getChatId() });
        else setChatReply(null);
        setIsLoading(false);
      }
    } catch (error) {
      setChatReply(null);
      setIsLoading(false);
    }
  };

  const moveToVoice = () => router.push('/voice');
  const moveToCamera = () => router.push('/camera');

  const handlers = useSwipeable({
    onSwiped: (e) => {
      console.log('eventData', e);
    },
    onSwipedRight: moveToVoice,
    onSwipedLeft: moveToCamera,
  });

  return (
    <div
      className="bottom-[20px] w-full sticky"
      {...handlers}
    >
      <Input
        type="email"
        placeholder="Ask assistant anything"
        readOnly={isLoading}
        value={chatInput.data}
        onChange={onInputChange}
        {...handlers}
        sideElement={
          <>
            <button
              onClick={getChatResponse}
              disabled={isEmpty}
            >
              {isEmpty ? (
                <Icons.send_icon_disabled />
              ) : (
                <Icons.send_icon_enabled />
              )}
            </button>
          </>
        }
      />
    </div>
  );
};

export default InputContainerChat;

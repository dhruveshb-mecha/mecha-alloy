'use client';
import {
  IAllImageChats,
  IChatType,
  IImageChat,
} from '@/app/types/chatInputTypes';
import { getChatId, sendImages } from '@/utils/chatHelper';
import { useRouter } from 'next/navigation';
import {
  ChangeEvent,
  Dispatch,
  RefObject,
  SetStateAction,
  useState,
} from 'react';
import { useSwipeable } from 'react-swipeable';
import Webcam from 'react-webcam';
import { Icons } from '../icons';
import { Input } from '../ui/input';
import CameraCapture from './CameraCapture';

interface IProps {
  captureImages: IAllImageChats;
  setCaptureImages: Dispatch<
    SetStateAction<IAllImageChats>
  >;
  imageInput: IChatType;
  setImageInput: Dispatch<SetStateAction<IChatType>>;
  imageReply: IChatType | null;
  setImageReply: Dispatch<SetStateAction<IChatType | null>>;
  webcamRef: RefObject<Webcam>;
  isCapture: boolean;
  setIsCapture: (value: SetStateAction<boolean>) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const InputContainerCamera = ({
  captureImages,
  setCaptureImages,
  imageInput,
  setImageInput,
  imageReply,
  setImageReply,
  webcamRef,
  setIsCapture,
  isCapture,
  setIsLoading,
}: IProps) => {
  const router = useRouter();
  const [isEmpty, setIsEmpty] = useState(true);
  const moveToChat = () => router.push('/chat');

  const handlers = useSwipeable({
    onSwipedRight: moveToChat,
  });

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      setImageInput({ data: '', id: '' });
      const chat: IImageChat = {
        question: imageInput.data,
        answer: '',
      };
      const allChats: IAllImageChats = {
        captureImage: captureImages.captureImage,
        chats: [...captureImages.chats, chat],
      };
      setCaptureImages({ ...allChats });
      const filterObj = {
        question: imageInput?.data,
        image: captureImages?.captureImage,
      };

      const res = await sendImages(filterObj);

      if (res) {
        const updatedChat: IImageChat = {
          question: imageInput.data,
          answer: res,
        };
        const allUpdatedChats: IAllImageChats = {
          captureImage: captureImages.captureImage,
          chats: [...captureImages.chats, updatedChat],
        };
        setCaptureImages({ ...allUpdatedChats });
      }
      setIsLoading(false);
      setIsEmpty(true);
    } catch (error) {
      console.log('response--> error', error);
      setIsEmpty(true);
      setIsLoading(false);
    }
  };

  const onChangeInput = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setIsEmpty(!(e.target.value?.length > 0));
    setImageInput({
      data: e.target.value,
      id: getChatId(),
    });
  };

  return (
    <div
      className="bottom-[20px] w-full sticky"
      {...handlers}
    >
      <Input
        type="email"
        placeholder="Ask assistant anything"
        onChange={onChangeInput}
        value={imageInput?.data}
        sideElement={
          <button onClick={onSubmit}>
            {isEmpty ? (
              <Icons.send_icon_disabled />
            ) : (
              <Icons.send_icon_yellow />
            )}
          </button>
        }
        sideElementLeft={
          <CameraCapture
            setCaptureImages={setCaptureImages}
            webcamRef={webcamRef}
            setIsCapture={setIsCapture}
            isCapture={isCapture}
          />
        }
      />
    </div>
  );
};

export default InputContainerCamera;

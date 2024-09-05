'use client';
import {
  IAllImageChats,
  IChatType,
} from '@/app/types/chatInputTypes';
import { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { Icons } from '../icons';
import Loader from '../ui/Loader';
import ChatBox from './chat-box';
import InputContainerCamera from './input-container';
import ReplyBox from './reply-box';

const CameraCopy = () => {
  const [captureImages, setCaptureImages] =
    useState<IAllImageChats>({
      captureImage: '',
      chats: [],
    });

  const [imageInput, setImageInput] = useState<IChatType>({
    id: '',
    data: '',
  });
  const [imageReply, setImageReply] =
    useState<IChatType | null>(null);
  const [isCapture, setIsCapture] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const webcamRef = useRef<Webcam>(null);

  const onReset = () => {
    setIsCapture(false);
    setCaptureImages({
      captureImage: '',
      chats: [],
    });
  };

  const onStart = async () => {
    try {
      const imageUrl = './assets/images/sample.png';
      const response = await fetch(imageUrl);
      const imageBlob = await response.blob();
      const reader = new FileReader();
      reader.onloadend = () => {
        setCaptureImages({
          captureImage: reader.result as string,
          chats: [],
        });
      };
      reader.readAsDataURL(imageBlob);
    } catch (error) {}
  };

  useEffect(() => {
    onStart();
  }, []);

  return (
    <>
      <div className="text-xs">
        <img
          src={
            captureImages?.captureImage ||
            './assets/images/sample.png'
          }
          className="absolute inset-0 -z-10 w-[480px] h-[460px]"
        />
        <div className="flex justify-between items-start mt-3">
          <button onClick={onReset} className="ml-2">
            <Icons.circle className="w-[50px] h-[50px]" />
          </button>
          {isCapture ? null : (
            <div className="mr-3">
              <Webcam
                height={100}
                width={150}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
              />
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <div className="mx-6 rounded-xl bg-[#0D0D0E] max-h-[250px] overflow-scroll w-[90%] sticky border-[#E4B200] border-[1px]">
          {captureImages?.chats?.length > 0 &&
            captureImages.chats.map((chat, index) => (
              <div
                className="flex flex-col flex-1 "
                key={index}
              >
                <ChatBox text={chat.question} />

                {chat?.answer === '' && isLoading ? (
                  <div className="ml-2 mb-2">
                    <Loader className="border-[#E4B200] " />
                  </div>
                ) : (
                  <ReplyBox text={chat.answer} />
                )}
              </div>
            ))}
          <div className="bg-[#0D0D0E] justify-center sticky bottom-0">
            <InputContainerCamera
              captureImages={captureImages}
              setCaptureImages={setCaptureImages}
              imageInput={imageInput}
              setImageInput={setImageInput}
              imageReply={imageReply}
              setImageReply={setImageReply}
              webcamRef={webcamRef}
              setIsCapture={setIsCapture}
              isCapture={isCapture}
              setIsLoading={setIsLoading}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CameraCopy;

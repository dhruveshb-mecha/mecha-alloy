import {
  IChats,
  IRecordChats,
} from '@/app/types/chatInputTypes';
import {
  MediaPermissionsError,
  requestAudioPermissions,
} from 'mic-check/lib/requestMediaPermissions';
import { Dispatch, SetStateAction, useRef } from 'react';
import { Icons } from '../icons';

interface IProps {
  isRecording: boolean;
  recordedChats: IRecordChats[];
  setInputUrl: Dispatch<SetStateAction<string>>;
  setIsRecording: Dispatch<SetStateAction<boolean>>;
  chats: IChats[];
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const WebAudioRecorder: React.FC<IProps> = ({
  isRecording,
  recordedChats,
  setIsRecording,
  setInputUrl,
  chats,
  setIsLoading,
}: IProps) => {
  const mediaStream = useRef<MediaStream | null>(null);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const chunks = useRef<Blob[]>([]);

  const startRecording = async () => {
    requestAudioPermissions()
      .then(async () => {
        setIsLoading(true);
        try {
          console.log('record starting');
          setIsRecording(true);
          const stream =
            await navigator.mediaDevices.getUserMedia({
              audio: true,
            });
          mediaStream.current = stream;
          mediaRecorder.current = new MediaRecorder(stream);

          mediaRecorder.current.ondataavailable = (
            e: BlobEvent
          ) => {
            if (e.data.size > 0) {
              chunks.current.push(e.data);
            }
          };

          mediaRecorder.current.onstop = async () => {
            const recordedBlob = new Blob(chunks.current, {
              type: 'audio/mpeg',
            });
            const url = URL.createObjectURL(recordedBlob);
            chunks.current = [];

            setInputUrl(url);
          };

          mediaRecorder.current.start();
        } catch (error) {
          console.error(
            'Error accessing microphone:',
            error
          );
        }
      })
      .catch((err: MediaPermissionsError) => {
        console.log('error---> err', err);
      });
  };

  const stopRecording = () => {
    setIsRecording(false);
    if (
      mediaRecorder.current &&
      mediaRecorder.current.state === 'recording'
    ) {
      mediaRecorder.current.stop();
    }
    if (mediaStream.current) {
      mediaStream.current.getTracks().forEach((track) => {
        track.stop();
      });
    }
  };

  return (
    <div className="flex flex-col">
      {isRecording ? (
        <button onClick={stopRecording}>
          <Icons.stop_icon />
        </button>
      ) : (
        <button onClick={startRecording}>
          <Icons.mic_icon />
        </button>
      )}
    </div>
  );
};

export default WebAudioRecorder;

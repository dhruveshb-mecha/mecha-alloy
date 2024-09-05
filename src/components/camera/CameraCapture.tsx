import { IAllImageChats } from '@/app/types/chatInputTypes';
import { MediaPermissionsError } from 'mic-check';
import { requestVideoPermissions } from 'mic-check/lib/requestMediaPermissions';
import { Dispatch, RefObject, SetStateAction } from 'react';
import Webcam from 'react-webcam';
import { Icons } from '../icons';

interface IProps {
  setCaptureImages: Dispatch<
    SetStateAction<IAllImageChats>
  >;
  webcamRef: RefObject<Webcam>;
  setIsCapture: (value: SetStateAction<boolean>) => void;
  isCapture: boolean;
}

const CameraCapture = ({
  setCaptureImages,
  webcamRef,
  setIsCapture,
  isCapture,
}: IProps) => {
  const capture = () => {
    requestVideoPermissions()
      .then(() => {
        const imageSrc =
          webcamRef?.current?.getScreenshot();
        if (imageSrc) {
          setIsCapture(true);
          setCaptureImages({
            captureImage: imageSrc,
            chats: [],
          });
        }
      })
      .catch((err: MediaPermissionsError) => {});
  };

  return (
    <div>
      <button onClick={capture} disabled={isCapture}>
        <Icons.camera_icon />
      </button>
    </div>
  );
};

export default CameraCapture;

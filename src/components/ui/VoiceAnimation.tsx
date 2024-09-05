import Lottie, {
  LottieRefCurrentProps,
} from 'lottie-react';
import { useEffect, useRef } from 'react';
import animationData from '../../lib/Animation1.json';

interface IProps {
  isPlaying: boolean;
}

const VoiceAnimation = ({ isPlaying }: IProps) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const handlePlayPause = () => {
    if (lottieRef.current) {
      if (isPlaying) {
        lottieRef.current.pause();
      } else {
        lottieRef.current.play();
      }
    }
  };

  useEffect(() => {
    handlePlayPause();
  }, [isPlaying]);

  return (
    <div className="w-full">
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={true}
        style={{ height: '50px', width: '100%' }}
      />
    </div>
  );
};

export default VoiceAnimation;

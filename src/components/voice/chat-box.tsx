import { useRef, useState } from 'react';
import { Icons } from '../icons';
import VoiceAnimation from '../ui/VoiceAnimation';

interface IProps {
  input: string;
  isReply?: boolean;
}

const ChatBox = ({ input, isReply = false }: IProps) => {
  const [isPlay, setIsPlay] = useState(false);
  const audio = useRef<HTMLAudioElement>(new Audio(input));
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  audio.current.addEventListener('load', function () {
    setDuration(audio.current.duration);
  });

  const playPauseAudio = async () => {
    setIsPlay(!isPlay);
    setIsPlaying(!isPlaying);
    if (audio.current.paused) audio.current.play();
    else audio.current.pause();
  };

  audio.current.addEventListener('timeupdate', function () {
    setCurrentTime(audio.current.currentTime);
  });

  audio.current.addEventListener('ended', function () {
    setIsPlay(!isPlay);
    setIsPlaying(!isPlaying);
  });

  if (isReply)
    return (
      <div className="flex flex-col gap-3">
        <Icons.voice_assistant_icon />
        <div className="px-2 py-2 rounded-full w-full max-w-[70%] flex justify-between  bg-[#1C1C1D]">
          {isPlay ? (
            <button onClick={playPauseAudio} id="audio">
              <Icons.stop_icon
                style={{ width: 40, height: 40 }}
              />
            </button>
          ) : (
            <button onClick={playPauseAudio}>
              <Icons.play_icon_red />
            </button>
          )}
          <div className="w-full">
            <VoiceAnimation isPlaying={isPlaying} />
          </div>
        </div>
      </div>
    );

  return (
    <div className="px-2 py-2 rounded-full w-full max-w-[70%] flex justify-between self-end bg-[#1C1C1D] mt-3">
      {isPlay ? (
        <button onClick={playPauseAudio} id="audio">
          <Icons.stop_icon
            style={{ width: 40, height: 40 }}
          />
        </button>
      ) : (
        <button onClick={playPauseAudio}>
          <Icons.play_icon_red />
        </button>
      )}
      <VoiceAnimation isPlaying={isPlaying} />
    </div>
  );
};

export default ChatBox;

import { Icons } from '../icons';

interface IProps {
  input: string;
}

const ReplyBox = ({ input }: IProps) => {
  return (
    <div className="flex flex-col gap-3">
      <Icons.voice_assistant_icon />
      <div className="px-2 py-2 rounded-full w-full max-w-[70%] flex justify-between  bg-[#1C1C1D]">
        <Icons.play_icon_red />
      </div>
    </div>
  );
};

export default ReplyBox;

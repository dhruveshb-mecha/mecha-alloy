import React from 'react';
import { Icons } from '../icons';
interface ReplyBoxProps {
  text: string;
}
const ReplyBox: React.FC<ReplyBoxProps> = ({ text }) => {
  return (
    <div className="flex flex-row mt-4 mb-3">
      <Icons.circle className="h-[34px] w-[34px] text-[#E4B200] bg-[#E4B200] rounded-full mx-2 px-2" />
      <div className="flex flex-row gap-3 items-start max-w-[84%]  bg-[#28282A] py-2.5 px-5 rounded-3xl">
        <p className="whitespace-pre-wrap text-xl">
          {text}
        </p>
      </div>
    </div>
  );
};

export default ReplyBox;

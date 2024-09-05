import React from 'react';
import { Icons } from '../icons';
interface ReplyBoxProps {
  text: string;
}
const ReplyBox: React.FC<ReplyBoxProps> = ({ text }) => {
  return (
    <div className="flex flex-row gap-3 items-start max-w-[90%] mt-3">
      <div>
        <Icons.circle className="h-[34px] w-[34px] text-[#0055FF]" />
      </div>
      <p className="whitespace-pre-wrap text-xl">{text}</p>
    </div>
  );
};

export default ReplyBox;

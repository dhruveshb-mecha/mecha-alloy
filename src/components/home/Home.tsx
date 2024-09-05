'use client';
import { useRouter } from 'next/navigation';
import { Icons } from '../icons';

const HomeContainer = () => {
  const router = useRouter();

  const moveToChat = () => router.push('chat');

  return (
    <button
      onClick={moveToChat}
      className="flex-1 flex flex-col gap-6 items-center justify-center"
    >
      <Icons.circle />
      <h1 className="text-[42px] text-[#C5C5C5]">
        Alloy.Ai
      </h1>
    </button>
  );
};

export default HomeContainer;

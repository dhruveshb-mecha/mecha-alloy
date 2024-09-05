interface ChatBoxProps {
  text: string;
}
const ChatBox: React.FC<ChatBoxProps> = ({ text }) => {
  return (
    <div className="py-2.5 px-5 rounded-3xl max-w-[70%] bg-[#28282A] text-xl self-end mt-5">
      <p className="whitespace-pre-wrap">{text}</p>
    </div>
  );
};

export default ChatBox;

import { Dispatch, SetStateAction } from 'react';

export interface IChatInputProps {
  chatsArr: IChats[];
  isLoading: boolean;
  chatInput: IChatType;
  setChatsArr: Dispatch<SetStateAction<IChats[]>>;
  setChatInput: Dispatch<SetStateAction<IChatType>>;
  setChatReply: Dispatch<SetStateAction<IChatType | null>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export interface IChats {
  input: IChatType;
  response: IChatType;
}

export interface IChatType {
  id: string;
  data: string;
}

export interface IRecordChats {
  inputUrl: string;
  outputUrl: string;
}

export interface IRecordChatType
  extends Omit<IChatType, 'id'> {}

export enum IChatStatus {
  NOT_FOUND = 'NOT_FOUND',
}

export interface IAllImageChats {
  captureImage: string;
  chats: IImageChat[];
}

export interface IImageChat {
  question: string;
  answer: string;
}

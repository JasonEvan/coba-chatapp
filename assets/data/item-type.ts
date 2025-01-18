import { ImageSourcePropType } from "react-native";

export interface ItemType {
  id: number;
  name: string;
  email: string;
  image: ImageSourcePropType;
  chats: ChatType[];
}

interface ChatType {
  date: Date;
  messages: Message[];
}

interface Message {
  isMe: boolean;
  message: string;
  time: Date;
}

import { View, Text } from "react-native";

export const MyBubbleChat = ({ text, time }: { text: string; time: Date }) => {
  return (
    <View className="me-3 mt-3 items-end mb-2">
      <Text className="font-pmedium text-lg text-primary">You</Text>
      <View className="mt-2 bg-primary rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl min-w-[50vw] max-w-[90vw] p-3 items-end">
        <Text className="font-pregular text-white">{text}</Text>
        <Text className="font-pregular text-white text-xs mt-1 opacity-75">{`${time
          .getHours()
          .toString()
          .padStart(2, "0")}:${time
          .getMinutes()
          .toString()
          .padStart(2, "0")}`}</Text>
      </View>
    </View>
  );
};

export const OtherBubbleChat = ({
  name,
  text,
  time,
}: {
  name: string;
  text: string;
  time: Date;
}) => {
  return (
    <View className="ms-3 mt-3 mb-2">
      <Text className="font-pmedium text-lg text-primary">{name}</Text>
      <View className="mt-2 bg-white rounded-tl-2xl rounded-tr-2xl rounded-br-2xl min-w-[50vw] max-w-[90vw] p-3">
        <Text className="font-pregular">{text}</Text>
        <Text className="font-pregular text-xs text-[#5F6368] mt-1">{`${time
          .getHours()
          .toString()
          .padStart(2, "0")}:${time
          .getMinutes()
          .toString()
          .padStart(2, "0")}`}</Text>
      </View>
    </View>
  );
};

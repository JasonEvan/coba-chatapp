import { TouchableOpacity, Text } from "react-native";

export default function TabChatButton({
  currActivePage,
  activePage,
  otherStyle,
  onPress,
}: {
  currActivePage: string;
  activePage: string;
  otherStyle?: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`h-12 bg-white flex-1 justify-center items-center ${otherStyle} border-b-2 ${
        currActivePage == activePage
          ? "border-b-primary"
          : "border-b-inactivetab"
      }`}
    >
      <Text
        className={`font-pregular ${
          currActivePage == activePage ? "text-primary" : "text-inactivetab"
        }`}
      >
        {activePage}
      </Text>
    </TouchableOpacity>
  );
}

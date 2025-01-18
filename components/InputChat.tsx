import { View, TextInput, Image, TouchableOpacity } from "react-native";

const InputChat = ({
  inputMessage,
  onChangeText,
  handleSubmit,
}: {
  inputMessage: string;
  onChangeText: (e: string) => void;
  handleSubmit: () => void;
}) => {
  return (
    <View className="bg-white h-20 flex flex-row justify-between items-center px-4 py-2 gap-4">
      <TouchableOpacity>
        <Image
          source={require("../assets/images/Vector.png")}
          className="w-5 h-5"
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View className="bg-mainbg w-[72vw] rounded-xl px-3">
        <TextInput
          className="flex-1 font-pregular"
          placeholder="Text Message"
          value={inputMessage}
          onChangeText={onChangeText}
        />
      </View>
      <TouchableOpacity onPress={handleSubmit}>
        <Image
          source={require("../assets/images/chat.png")}
          className="w-7 h-7"
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default InputChat;

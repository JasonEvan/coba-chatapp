import { router } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from "react-native";

const ChatBar = ({
  title,
  email,
  source,
}: {
  title: string;
  email: string;
  source: ImageSourcePropType;
}) => {
  return (
    <View className="mt-6 flex flex-row mx-3 items-center mb-5">
      <TouchableOpacity
        className="border-2 rounded-xl border-[#D9D9D9]"
        onPress={() => router.back()}
      >
        <Image
          source={require("../assets/images/chevron-left.png")}
          className="w-10 h-10"
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View className="flex flex-row items-center ms-5">
        <Image source={source} />
        <View className="ms-3">
          <Text className="font-pbold">{title}</Text>
          <Text className="font-pregular text-xs">{email}</Text>
        </View>
      </View>
      <TouchableOpacity className="border-2 rounded-xl border-[#D9D9D9] p-2 ms-auto">
        <Image
          source={require("../assets/images/dot.png")}
          className="w-6 h-6"
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default ChatBar;

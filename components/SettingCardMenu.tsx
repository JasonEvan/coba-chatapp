import {
  ImageSourcePropType,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

export default function SettingCardMenu({
  image,
  text,
  onPress,
}: {
  image: ImageSourcePropType;
  text: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      className="h-20 bg-white flex flex-row justify-between items-center mx-5 mb-3 rounded-xl"
      onPress={onPress}
    >
      <View className="flex flex-row items-center">
        <Image
          source={image}
          className="w-16"
          resizeMode="contain"
          tintColor="black"
        />
        <Text className="font-pmedium text-xl">{text}</Text>
      </View>
      <Image
        source={require("../assets/images/right-arrow.png")}
        className="me-7"
      />
    </TouchableOpacity>
  );
}

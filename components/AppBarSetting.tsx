import { router } from "expo-router";
import { View, Image, Text, TouchableOpacity } from "react-native";

export default function AppBarSetting({ title }: { title: string }) {
  return (
    <View className="mt-6 flex flex-row mx-5 justify-between items-center">
      <TouchableOpacity
        className="border-2 rounded-xl border-[#D9D9D9]"
        onPress={() => router.back()}
      >
        <Image
          source={require("../assets/images/chevron-left.png")}
          className="w-11 h-11"
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text className="font-pbold text-xl">{title}</Text>
      <View className="w-11"></View>
    </View>
  );
}

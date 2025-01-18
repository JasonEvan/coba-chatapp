import { View, Text } from "react-native";

export default function Divider({ title }: { title: string }) {
  return (
    <View className="flex flex-row items-center justify-around mt-5">
      <View className="h-[1px] bg-divider w-[25vw] opacity-35"></View>
      <Text className="text-divider opacity-50">{title}</Text>
      <View className="h-[1px] bg-divider w-[25vw] opacity-35"></View>
    </View>
  );
}

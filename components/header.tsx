import { View, Text } from "react-native";

export default function Header({ name }: { name: string }) {
  return (
    <View className="mt-8 ms-5 bg-transparent">
      <Text className="text-3xl font-pmedium text-primary">{name}</Text>
    </View>
  );
}

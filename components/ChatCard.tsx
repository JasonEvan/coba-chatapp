import { router } from "expo-router";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ItemType } from "@/assets/data/item-type";

export default function ChatCard({ item }: { item: ItemType }) {
  return (
    <TouchableOpacity
      className="mx-5 bg-white h-24 flex flex-row justify-between items-center rounded-xl mb-3"
      onPress={() => router.push(`/chat/${item.name}`)}
    >
      <View className="ms-3 flex flex-row items-center">
        <Image source={item.image} className="w-15" resizeMode="contain" />
        <View className="ms-3">
          <Text className="font-pmedium text-xl">{item.name}</Text>
          <Text className="font-pregular text-xs text-inactive">
            {item.email}
          </Text>
        </View>
      </View>
      <View className="me-3 items-end">
        <Text className="font-pregular text-xs text-inactive mb-1">
          Yesterday
        </Text>
        <View className="bg-primary w-5 h-5 items-center justify-center rounded-full">
          <Text className="text-xs text-white">2</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

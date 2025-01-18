import { View, Text, TextInput } from "react-native";

export default function FormField({
  text,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
}: {
  text: string;
  value: string;
  onChangeText: (e: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
}) {
  return (
    <View className="ms-3 mt-3">
      <Text className="font-pregular">{text}</Text>
      <View className="bg-transparent h-14 me-3 border-[1px] border-[#E8E9EB] rounded-xl">
        <TextInput
          className="flex-1 mx-2 font-pregular"
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
        />
      </View>
    </View>
  );
}

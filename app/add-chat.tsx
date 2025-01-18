import AppBarSetting from "@/components/AppBarSetting";
import FormField from "@/components/FormField";
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AddChat = () => {
  const [username, setUsername] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (username) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [username]);

  return (
    <SafeAreaView className="bg-mainbg flex-1">
      <AppBarSetting title="Chatting" />
      <View className="bg-white h-[75vh] mx-5 mt-10 rounded-xl">
        <Text className="font-pbold text-lg mt-3 ms-3">Input Username</Text>
        <FormField
          text="Input username"
          value={username}
          onChangeText={(text) => setUsername(text)}
          placeholder="Input username"
        />
        <TouchableOpacity
          className={`bg-primary rounded-xl h-12 mx-3 justify-center items-center mt-auto mb-3 ${
            isDisabled ? "opacity-55" : "opacity-100"
          }`}
          disabled={isDisabled}
        >
          <Text className="font-pregular text-white">Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddChat;

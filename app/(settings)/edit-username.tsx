import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBarSetting from "@/components/AppBarSetting";
import { ProfileWithoutButton } from "@/components/profile";
import FormField from "@/components/FormField";

const EditUsername = () => {
  const [data, setData] = useState({
    oldUsername: "Nusatech",
    newUsername: "Nusatechi",
  });

  return (
    <SafeAreaView className="bg-mainbg flex-1">
      <AppBarSetting title="Change Username" />
      <ProfileWithoutButton
        profileImage={require("../../assets/images/profilePicture.png")}
      />
      <View className="bg-white h-[73vh] mt-3 mx-5 rounded-xl">
        <FormField
          text="Old Username"
          value={data.oldUsername}
          onChangeText={(text) => setData({ ...data, oldUsername: text })}
        />
        <FormField
          text="New Username"
          value={data.newUsername}
          onChangeText={(text) => setData({ ...data, newUsername: text })}
        />
        <TouchableOpacity className="mx-3 justify-center items-center bg-mainbg rounded-xl h-12 mt-auto mb-3">
          <Text className="text-inactive text-xl">Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EditUsername;

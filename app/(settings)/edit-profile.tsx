import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBarSetting from "@/components/AppBarSetting";
import { ProfileWithoutButton } from "@/components/profile";
import FormField from "@/components/FormField";

const EditProfile = () => {
  const [data, setData] = useState({
    name: "Nusatech",
    email: "Nusatech@company.co.id",
  });

  return (
    <SafeAreaView className="bg-mainbg flex-1">
      <AppBarSetting title="Edit Profile" />
      <ProfileWithoutButton
        profileImage={require("../../assets/images/profilePicture.png")}
      />
      <View className="bg-white h-[73vh] mt-3 mx-5 rounded-xl">
        <FormField
          text="Name"
          value={data.name}
          onChangeText={(text) => setData({ ...data, name: text })}
        />
        <FormField
          text="Email"
          value={data.email}
          onChangeText={(text) => setData({ ...data, email: text })}
        />
        <TouchableOpacity className="mx-3 justify-center items-center bg-mainbg rounded-xl h-12 mt-auto mb-3">
          <Text className="text-inactive text-xl">Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;

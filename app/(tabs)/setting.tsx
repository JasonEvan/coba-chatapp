import Header from "@/components/header";
import { ProfileSetting } from "@/components/profile";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SettingCardMenu from "@/components/SettingCardMenu";
import { router } from "expo-router";

const Setting = () => {
  return (
    <SafeAreaView className="bg-mainbg flex-1">
      <Header name="Setting" />
      <ProfileSetting
        profileImage={require("../../assets/images/profilePicture.png")}
        vectorIcon={require("../../assets/images/right-arrow.png")}
      />
      <View className="mt-5">
        <SettingCardMenu
          image={require("../../assets/images/UserCircle.png")}
          text="Change Username"
          onPress={() => router.push("/edit-username")}
        />
        <SettingCardMenu
          image={require("../../assets/images/Lock.png")}
          text="Change Password"
          onPress={() => router.push("/edit-password")}
        />
      </View>
      <TouchableOpacity
        className="bg-white h-12 mx-5 rounded-xl items-center justify-center mt-auto mb-3"
        onPress={() => router.replace("/")}
      >
        <Text className="font-satoshir text-primary text-xl">Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Setting;

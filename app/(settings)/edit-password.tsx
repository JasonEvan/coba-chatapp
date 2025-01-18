import AppBarSetting from "@/components/AppBarSetting";
import FormField from "@/components/FormField";
import { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const EditPassword = () => {
  const [data, setData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (
      data.oldPassword &&
      data.newPassword &&
      data.confirmPassword &&
      data.newPassword == data.confirmPassword
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [data]);

  return (
    <SafeAreaView className="bg-mainbg flex-1">
      <ScrollView>
        <AppBarSetting title="Password" />
        <View className="h-28 justify-center items-center mt-3 mb-3">
          <Image source={require("../../assets/images/password.png")} />
        </View>
        <View className="bg-white h-[55vh] mx-5 mb-3">
          <Text className="text-xl font-pregular mx-3 mt-3">Ubah Password</Text>
          <FormField
            text="Password Lama"
            value={data.oldPassword}
            placeholder="Input password"
            onChangeText={(text) => setData({ ...data, oldPassword: text })}
            secureTextEntry={true}
          />
          <FormField
            text="Password Baru"
            value={data.newPassword}
            placeholder="Input password"
            onChangeText={(text) => setData({ ...data, newPassword: text })}
            secureTextEntry={true}
          />
          <FormField
            text="Confirm Password"
            value={data.confirmPassword}
            placeholder="Input password"
            onChangeText={(text) => setData({ ...data, confirmPassword: text })}
            secureTextEntry={true}
          />
          <TouchableOpacity
            className={`bg-primary ${
              isDisabled ? "opacity-55" : "opacity-100"
            } justify-center items-center rounded-xl h-12 mx-3 mt-auto mb-3`}
            disabled={isDisabled}
          >
            <Text className="font-pregular text-white">Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditPassword;

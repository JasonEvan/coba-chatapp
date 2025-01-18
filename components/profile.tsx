import { router } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from "react-native";

export function Profile({
  profileImage,
  vectorIcon,
}: {
  profileImage: ImageSourcePropType;
  vectorIcon: ImageSourcePropType;
}) {
  return (
    <View className="mt-6 mx-5 bg-white h-24 flex flex-row items-center justify-between">
      <View className="flex flex-row ms-3">
        <TouchableOpacity>
          <Image source={profileImage} className="w-15" resizeMode="contain" />
        </TouchableOpacity>
        <View className="ms-5">
          <Text className="font-pbold text-md">Nusatech</Text>
          <Text className="font-pregular text-sm">Nusatech@company.co.id</Text>
        </View>
      </View>
      <TouchableOpacity
        className="me-3"
        onPress={() => router.push("/add-chat")}
      >
        <View className="bg-mainbg w-10 h-10 rounded-full justify-center">
          <Image source={vectorIcon} className="w-10" resizeMode="contain" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export function ProfileSetting({
  profileImage,
  vectorIcon,
}: {
  profileImage: ImageSourcePropType;
  vectorIcon: ImageSourcePropType;
}) {
  return (
    <TouchableOpacity
      className="mt-6 mx-5 bg-white h-24 flex flex-row items-center justify-between rounded-xl"
      onPress={() => router.push("/edit-profile")}
    >
      <View className="flex flex-row ms-3">
        <TouchableOpacity>
          <Image source={profileImage} className="w-15" resizeMode="contain" />
        </TouchableOpacity>
        <View className="ms-5">
          <Text className="font-pbold text-md">Nusatech</Text>
          <Text className="font-pregular text-sm">Nusatech@company.co.id</Text>
        </View>
      </View>
      <View className="me-3">
        <Image source={vectorIcon} className="w-10" resizeMode="contain" />
      </View>
    </TouchableOpacity>
  );
}

export function ProfileWithoutButton({
  profileImage,
}: {
  profileImage: ImageSourcePropType;
}) {
  return (
    <View className="mt-6 mx-5 bg-white h-24 flex flex-row items-center">
      <View className="flex flex-row ms-3">
        <TouchableOpacity>
          <Image source={profileImage} className="w-15" resizeMode="contain" />
        </TouchableOpacity>
        <View className="ms-5">
          <Text className="font-pbold text-md">Nusatech</Text>
          <Text className="font-pregular text-sm">Nusatech@company.co.id</Text>
        </View>
      </View>
    </View>
  );
}

import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginPage() {
  return (
    <ImageBackground
      source={require("../../assets/images/Background.png")}
      className="flex-1"
      resizeMode="cover"
    >
      <SafeAreaView className="flex-1 justify-center items-center gap-y-14">
        <View className="items-center">
          <Image source={require("../../assets/images/Feather.png")} />
          <Text className="font-satoshib text-[26px] text-primary">
            Were Chatting
          </Text>
        </View>

        <View className="gap-y-6">
          <View>
            <Text className="font-pbold text-center">
              Selamat datang di Aplikasi
            </Text>
            <Text className="font-pbold text-center">Were Chating</Text>
          </View>
          <TouchableOpacity
            className="rounded-xl w-72 flex flex-row items-center justify-center gap-x-5"
            style={{ backgroundColor: "#F2F8FD" }}
            onPress={() => router.replace("/chat")}
          >
            <Image
              source={require("../../assets/images/Google Logo.png")}
              className="w-5"
              resizeMode="contain"
            />
            <Text className="font-satoshir">Lanjutkan Dengan Google</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" backgroundColor="black" />
    </ImageBackground>
  );
}

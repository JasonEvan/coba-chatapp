import OnboardingModal from "@/components/OnboardingModal";
import { useState } from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  return (
    <ImageBackground
      source={require("../assets/images/Background.png")}
      className="flex-1"
      resizeMode="contain"
    >
      <SafeAreaView className="flex-1 justify-center items-center">
        <View className="items-center flex-1 justify-center">
          <Image source={require("../assets/images/Feather.png")} />
          <Text className="font-satoshib text-[26px] text-primary">
            Were Chatting
          </Text>
        </View>
        <View className="flex-1"></View>
      </SafeAreaView>
      <OnboardingModal
        isModalVisible={isModalVisible}
        onSkip={() => setIsModalVisible(false)}
      />
    </ImageBackground>
  );
};

export default Index;

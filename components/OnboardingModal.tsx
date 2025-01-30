import { View, Text, Modal, TouchableOpacity } from "react-native";
import { Link, router } from "expo-router";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useState } from "react";

const OnboardingModal = ({
  isModalVisible,
  onSkip,
}: {
  isModalVisible: boolean;
  onSkip: () => void;
}) => {
  const activePage = useSharedValue<number>(1);
  const [currPage, setCurrPage] = useState<number>(1);

  const style1 = useAnimatedStyle(() => ({
    width: activePage.value === 1 ? withTiming(24) : withTiming(8),
    backgroundColor:
      activePage.value === 1 ? withTiming("#18837D") : withTiming("#DFE0F3"),
  }));

  const style2 = useAnimatedStyle(() => ({
    width: activePage.value === 2 ? withTiming(24) : withTiming(8),
    backgroundColor:
      activePage.value === 2 ? withTiming("#18837D") : withTiming("#DFE0F3"),
  }));

  const style3 = useAnimatedStyle(() => ({
    width: activePage.value === 3 ? withTiming(24) : withTiming(8),
    backgroundColor:
      activePage.value === 3 ? withTiming("#18837D") : withTiming("#DFE0F3"),
  }));

  function nextPage() {
    if (currPage < 3) {
      activePage.value++;
      setCurrPage(currPage + 1);
    } else {
      router.replace("/login");
    }
  }

  return (
    <Modal animationType="slide" transparent={true} visible={isModalVisible}>
      <TouchableOpacity className="flex-1"></TouchableOpacity>
      <View className="bg-white flex-1 rounded-tl-3xl rounded-tr-3xl px-5 items-center py-7">
        <Text className="text-center text-primary text-2xl w-[60vw] font-pmedium">
          Lorem ipsum dolor sit amet
        </Text>
        <Text className="font-pregular mt-3 w-[60vw] text-center">
          {currPage === 1 && <>Atur manajemen kampanyemu dengan mudah</>}
          {currPage === 2 && (
            <>
              Dive into a world of blissful messages services tailored to your
              preferences
            </>
          )}
          {currPage === 3 && <>Atur manajemen kampanyemu dengan mudah</>}
        </Text>
        <View className="flex flex-row mt-auto w-full justify-center gap-x-2">
          <Animated.View
            className="rounded-full h-2"
            style={style1}
          ></Animated.View>
          <Animated.View
            className="rounded-full h-2"
            style={style2}
          ></Animated.View>
          <Animated.View
            className="rounded-full h-2"
            style={style3}
          ></Animated.View>
        </View>
        <TouchableOpacity
          className="mt-5 bg-primary w-full h-11 justify-center items-center rounded-xl"
          onPress={nextPage}
        >
          <Text className="text-lg text-white font-pregular">Next</Text>
        </TouchableOpacity>
        <Link
          href="/chat"
          className="text-primary font-pmedium mt-5"
          onPress={onSkip}
          replace
        >
          Skip
        </Link>
      </View>
    </Modal>
  );
};

export default OnboardingModal;

import { Tabs } from "expo-router";
import { View, Image, ImageSourcePropType, Text } from "react-native";

const TabIcon = ({
  color,
  name,
  icon,
  focused,
}: {
  color: string;
  name: string;
  icon: ImageSourcePropType;
  focused: boolean;
}) => {
  return (
    <View className="w-16 justify-center items-center mt-3">
      <Image source={icon} tintColor={color} resizeMode="contain" />
      <Text
        className={`${
          focused ? "text-primary" : "text-inactive"
        } font-semibold text-[0.9rem]`}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#18837D",
        tabBarInactiveTintColor: "#5F6368",
        tabBarStyle: {
          height: 50,
        },
      }}
    >
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              color={color}
              name="Chat"
              focused={focused}
              icon={require("../../assets/images/ChatsCircle.png")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: "Setting",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              color={color}
              name="Setting"
              focused={focused}
              icon={require("../../assets/images/GearSix.png")}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

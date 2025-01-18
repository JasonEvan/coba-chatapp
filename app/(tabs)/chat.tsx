import Header from "@/components/header";
import { Profile } from "@/components/profile";
import { useState } from "react";
import { View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TabChatButton from "@/components/TabChatButton";
import ChatCard from "@/components/ChatCard";
import { data } from "@/assets/data/data";

const Chat = () => {
  const [currActivePage, setCurrActivePage] = useState<string>("All");

  return (
    <SafeAreaView className="bg-mainbg flex-1">
      <Header name="Chats" />
      <Profile
        profileImage={require("../../assets/images/profilePicture.png")}
        vectorIcon={require("../../assets/images/Vector.png")}
      />
      <View className="mt-3 mx-5 h-12 flex flex-row justify-around items-center">
        <TabChatButton
          currActivePage={currActivePage}
          activePage="All"
          otherStyle="rounded-tl-xl"
          onPress={() => {
            setCurrActivePage("All");
          }}
        />
        <TabChatButton
          currActivePage={currActivePage}
          activePage="Group"
          onPress={() => {
            setCurrActivePage("Group");
          }}
        />
        <TabChatButton
          currActivePage={currActivePage}
          activePage="Unread"
          otherStyle="rounded-tr-xl"
          onPress={() => {
            setCurrActivePage("Unread");
          }}
        />
      </View>
      {currActivePage == "All" && (
        <FlatList
          data={data}
          renderItem={({ item }) => <ChatCard item={item} />}
          className="mt-6"
        />
      )}
    </SafeAreaView>
  );
};

export default Chat;

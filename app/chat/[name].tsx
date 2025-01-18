import { useLocalSearchParams } from "expo-router/build/hooks";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { data } from "@/assets/data/data";
import ChatBar from "@/components/ChatBar";
import Divider from "@/components/Divider";
import { MyBubbleChat, OtherBubbleChat } from "@/components/BubbleChat";
import InputChat from "@/components/InputChat";
import { useEffect, useRef, useState } from "react";

const options = {
  weekday: "long" as "long",
  month: "long" as "long",
  day: "numeric" as "numeric",
};
const formatter = new Intl.DateTimeFormat("en-US", options);

const ChatScreen = () => {
  const [inputMessage, setInputMessage] = useState<string>("");
  const scrollViewRef = useRef<ScrollView>(null);

  const { name } = useLocalSearchParams();

  const thisUserData = data.find((el) => name == el.name);
  if (!thisUserData) return null;

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, []);

  function checkSameDate(date1: Date, date2: Date): boolean {
    return (
      date1.getFullYear() == date2.getFullYear() &&
      date1.getMonth() == date2.getMonth() &&
      date1.getDate() == date2.getDate()
    );
  }

  function handleSubmit() {
    const index: number = data.findIndex((el) => name == el.name);

    if (data[index].chats.length < 1) {
      data[index].chats.push({
        date: new Date(),
        messages: [
          {
            isMe: true,
            message: inputMessage,
            time: new Date(),
          },
        ],
      });

      setInputMessage("");
      return;
    }

    const now: Date = new Date();
    const lastDate: Date = data[index].chats[data[index].chats.length - 1].date;

    const isSameDate: boolean = checkSameDate(now, lastDate);

    if (isSameDate) {
      data[index].chats[data[index].chats.length - 1].messages.push({
        isMe: true,
        message: inputMessage,
        time: new Date(),
      });
    } else {
      data[index].chats.push({
        date: new Date(),
        messages: [
          {
            isMe: true,
            message: inputMessage,
            time: new Date(),
          },
        ],
      });
    }

    setInputMessage("");
  }

  return (
    <SafeAreaView className="bg-mainbg flex-1">
      <ChatBar
        title={thisUserData.name}
        email={thisUserData.email}
        source={thisUserData.image}
      />
      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current?.scrollToEnd({ animated: true })
        }
      >
        {thisUserData.chats.map((el, idx) => (
          <View key={idx}>
            <Divider title={formatter.format(el.date)} />
            {el.messages.map((message) =>
              message.isMe ? (
                <MyBubbleChat
                  text={message.message}
                  time={message.time}
                  key={message.message}
                />
              ) : (
                <OtherBubbleChat
                  name={thisUserData.name}
                  text={message.message}
                  time={message.time}
                  key={message.message}
                />
              )
            )}
          </View>
        ))}
      </ScrollView>
      <InputChat
        inputMessage={inputMessage}
        onChangeText={(text) => setInputMessage(text)}
        handleSubmit={handleSubmit}
      />
    </SafeAreaView>
  );
};

export default ChatScreen;

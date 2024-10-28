import React from "react";
import { FlatList, StyleSheet, Text, View, SafeAreaView } from "react-native";
import Message from "../components/Message";
import ChatRoomData from "../assets/dummy-data/Chats";
import MessageInput from "../components/MessageInput/MessageInput";
import { useRoute, useNavigation } from "@react-navigation/core";

export default function ChatRoomScreen() {
  const route = useRoute();
  const navigation = useNavigation();

  navigation.setOptions({ title: "User we're Chatting" });

  console.warn("Chat room id: ", route.params?.id);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={ChatRoomData.messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted
      />
      <MessageInput />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3777f0",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    width: "75%",
  },

  text: {
    color: "white",
  },
});

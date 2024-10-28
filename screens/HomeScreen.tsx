import * as React from "react";
import { FlatList, Image, Pressable, StyleSheet } from "react-native";
import ChatRoomsData from "../assets/dummy-data/ChatRooms";
import ChatRoomItem from "../components/ChatRoomItem";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

const room1 = ChatRoomsData[0];

export default function HomeScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const logout = () => {
    Auth.signOut();
  };

  return (
    <View style={styles.page}>
      <FlatList
        data={ChatRoomsData}
        renderItem={({ item, index }) => <ChatRoomItem chatRoom={item} />}
        showsVerticalScrollIndicator={false}
      />

      <Pressable
        onPress={logout}
        style={{
          backgroundColor: "#f4f4f4",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 4,
          paddingTop: 4,
          // paddingHorizontal: 30,
          marginHorizontal: 100,
          borderRadius: 20,
          marginBottom: 5,
        }}
      >
        <Text style={{ textAlign: "center", fontSize: 12, color: "#c7c7c7" }}>
          LogOut
        </Text>
      </Pressable>

      {/* <ChatRoomItem chatRoom={room1} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
  },
});

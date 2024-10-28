import React from "react";
import { StyleSheet, Text, View } from "react-native";

const blue = "#3777f0";
const grey = "lightgrey";
const myId = "u1";

const Message = ({ message }) => {
  const isMe = message.user.id === myId;

  return (
    <View
      style={[
        styles.container,
        isMe ? styles.rightContainer : styles.leftContainer,
      ]}
    >
      <Text style={{ color: isMe ? "#000" : "#fff" }}>{message.content} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3777f0",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    maxWidth: "75%",
  },

  leftContainer: {
    backgroundColor: "#3777f0",
    marginLeft: 10,
    marginRight: "auto",
  },

  rightContainer: {
    backgroundColor: "grey",
    marginRight: 10,
    marginLeft: "auto",
  },
  text: {
    color: "white",
  },
});

export default Message;

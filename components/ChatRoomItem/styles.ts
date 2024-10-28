import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },

  rightContainer: {
    flex: 1,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 30,
    marginRight: 10,
  },
  badgeContainer: {
    backgroundColor: "#3872e9",
    width: 15,
    height: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,

    position: "absolute",
    top: 10,
    left: 45,
  },

  badgeText: {
    color: "white",
    fontSize: 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  name: {
    fontWeight: "bold",
  },

  text: {
    color: "grey",
  },
});


export default styles;
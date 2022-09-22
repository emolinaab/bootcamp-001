import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  SafeAreaView,
} from "react-native";
import * as React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Scroll from "./post/Post";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.textTitle}>Post</Text>
        <View style={styles.icons}>
          <Ionicons name="home" size={32} color="white" />
          <Ionicons name="people-outline" size={32} color="white" />
          <Ionicons name="pricetags" size={32} color="white" />
          <Ionicons name="notifications" size={32} color="white" />
          <Ionicons name="list" size={32} color="white" />
        </View>
      </View>
      <StatusBar style="auto" />

      <Scroll></Scroll>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dfe3ee",
    /*  alignItems: "center",
    justifyContent: "center", */
    marginTop: 10,
    flexDirection: "column",
  },
  title: {
    backgroundColor: "#3b5998",
    flexDirection: "column",
    justifyContent: "flex-start",
    height: 150,
    marginTop: 50,
  },
  textTitle: {
    fontSize: 25,
    color: `#fff`,
    marginTop: 6,
  },
  image: {
    height: 100,
    width: 100,
    marginTop: 100,
    borderRadius: 50,
  },
  icons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 60,
  },
  post: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
   

    height: 400,
    width: 100,
  },
  scroll: {
    backgroundColor: "pink",
    marginHorizontal: 20,
    height: 400,
    width: 100,
  },
});

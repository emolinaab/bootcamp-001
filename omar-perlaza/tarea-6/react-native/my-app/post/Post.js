import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Image,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import user1 from "./images/user1.jpg";
import user2 from "./images/user2.jpeg";
import user3 from "./images/user3.jpg";
import user4 from "./images/user4.jpg";
import post1 from "./images/post1.jpg";
import post2 from "./images/post2.jpg";
import post3 from "./images/post3.jpg";
import post4 from "./images/post4.jpg";
const Scroll = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <View style={styles.user} >
            <Image source={user1} style={styles.images} />
            <Text style={styles.userName}>Lizards</Text>
            <Ionicons style={styles.close} name="close-circle" size={50} color="black" />
           
          </View>
          <View>
          <Image style={styles.postImage}
               source={post1}
            />
          </View>

          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>


        <View>
          <View style={styles.user} >
            <Image source={user2} style={styles.images} />
            <Text style={styles.userName}>Venom</Text>
            <Ionicons style={styles.close} name="close-circle" size={50} color="black" />
           
          </View>
          <View>
          <Image style={styles.postImage}
               source={post2}
            />
          </View>

          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
        

        <View>
          <View style={styles.user} >
            <Image source={user3} style={styles.images} />
            <Text style={styles.userName}>Katty</Text>
            <Ionicons style={styles.close} name="close-circle" size={50} color="black" />
           
          </View>
          <View>
          <Image style={styles.postImage}
               source={post3}
            />
          </View>

          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>

        <View>
          <View style={styles.user} >
            <Image source={user4} style={styles.images} />
            <Text style={styles.userName}>Mangaka</Text>
            <Ionicons style={styles.close} name="close-circle" size={50} color="black" />
           
          </View>
          <View>
          <Image style={styles.postImage}
               source={post4}
            />
          </View>

          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    width: 470,
  },
  text: {
    fontSize: 30,
  },
  images: {
    height: 75,
    width: 75,
    borderRadius: 36,
    marginTop: 20,
    marginLeft: 20,
    marginBottom:20,
  },
  user:{
    flex:1,
    flexDirection: 'row',
   backgroundColor: '#f7f7f7',
  },

  userName:{
    marginTop: 40,
    marginLeft: 20,
    marginBottom:20,
    fontSize:30,
  },

  close:{
    flex:1,
    marginTop: 25,
    marginLeft : 170,
  },

  postImage :{
    height:400,
    width :450,
  }
});

export default Scroll;

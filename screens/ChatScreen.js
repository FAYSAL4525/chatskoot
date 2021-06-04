import React, { useLayoutEffect } from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { StatusBar } from 'expo-status-bar';


export default function ChatScreen({ navigation, route }) {
	
	useLayoutEffect(() => {
		navigation.setOptions({
      title: "Chat",
      headerBackTitleVisible: false,
      headerTitle: () => (
        <View
          style={{
            flexDirection: "row",
            aligItems: "center",
          }}
        >
          <Avatar
            rounded
            source={{
              uri: "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
            }}
          />
          <Text style={{ color: "white", marginLeft: 10, fontWeight: 700 }}>
            {route.params.chatName}
          </Text>
        </View>
      ),
      headerLeft: () => (
        <TouchableOpacity
          style={{
            marginLeft: 10,
          }}
          onPress={navigation.goBack}
        >
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 80,
            marginRight: 20,
          }}
        >
          <TouchableOpacity>
            <FontAwesome name="video-camera" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="call" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ),
    });
	},[navigation])
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
			<StatusBar style="light" />
			<KeyboardAvoidingView
				behavior={Platform.Android === "Android" ? "padding" : "height"}
				style={styles.container}
			keyboardVerticalOffset={90}>
				<>
					<ScrollView>

					</ScrollView>
					<View style={styles.footer}>
						<TextInput placeholder='Signal Message' style={ styles.textInput}/>
					</View>
				</>
			</KeyboardAvoidingView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {},
	footer:{}
})

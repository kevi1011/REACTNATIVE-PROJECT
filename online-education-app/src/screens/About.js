import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const About = () => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}> Code Master </Text>
      <Text style={styles.paraStyle}> Empowering Developers Worldwide </Text>

      <View style={styles.aboutLayout}>
        <Image
          style={styles.aboutImage}
          source={{
            uri: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1588&auto=format&fit=crop",
          }}
        />
        <Text style={styles.aboutSubHeader}> About Me </Text>
        <Text style={[styles.paraStyle, styles.aboutPara]}>
          I'm passionate about teaching web and mobile development. With over 10 years of experience,
          I strive to bring you the best learning materials directly to your screen. Join my journey
          to make learning accessible and fun!
        </Text>
      </View>

      <Text style={styles.mainHeader}> Follow Me on Social Network </Text>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL("https://www.instagram.com/")
          }>
          <Ionicons name="logo-instagram" size={30} color="#E1306C" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL(
              "https://www.youtube.com/"
            )
          }>
          <Ionicons name="logo-youtube" size={30} color="#FF0000" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL("https://github.com/")}>
          <Ionicons name="logo-github" size={30} color="#f8fafc" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutContainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#0f172a",
    alignItems: "center",
    paddingTop: 30,
  },
  mainHeader: {
    fontSize: 22,
    color: "#f8fafc",
    textTransform: "uppercase",
    fontFamily: "Nunito_700Bold",
    marginBottom: 5,
  },
  paraStyle: {
    fontSize: 16,
    color: "#94a3b8",
    fontFamily: "Nunito_400Regular",
    marginBottom: 30,
  },
  aboutLayout: {
    backgroundColor: "#1e293b",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 30,
    width: "100%",
    borderWidth: 1,
    borderColor: "#334155",
  },
  aboutImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#3b82f6",
  },
  aboutSubHeader: {
    fontSize: 20,
    color: "#f8fafc",
    fontFamily: "Nunito_600SemiBold",
    marginBottom: 15,
  },
  aboutPara: {
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 0,
  },
  menuContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  buttonStyle: {
    backgroundColor: "#1e293b",
    padding: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#334155",
  },
});

export default About;

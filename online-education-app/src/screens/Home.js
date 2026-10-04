import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image
          style={styles.headerImage}
          resizeMode="cover"
          source={{
            uri: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1740&auto=format&fit=crop",
          }}
        />

        <Text style={styles.mainHeader}>Welcome to</Text>
        <Text
          style={[
            styles.mainHeader,
            {
              fontSize: 30,
              color: "#3b82f6",
              marginTop: 5,
            },
          ]}>
          Code Master
        </Text>

        <Text style={styles.paraStyle}>
          Your premium destination for mastering modern web and mobile development. Let's build the future together.
        </Text>
      </View>

      <View style={styles.menuStyle}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("Course")}>
          <Text style={styles.buttonText}>Courses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("Student")}>
          <Text style={styles.buttonText}>Students</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuStyle}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("About")}>
          <Text style={styles.buttonText}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("Contact")}>
          <Text style={styles.buttonText}>Contact</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#0f172a", // slate-900
    textAlign: "center",
  },
  homeTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  headerImage: {
    height: 250,
    width: "100%",
    aspectRatio: 1,
    display: "flex",
    alignItems: "stretch",
    marginTop: 50,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#334155",
  },
  mainHeader: {
    fontSize: 26,
    color: "#f8fafc", // slate-50
    textTransform: "uppercase",
    fontFamily: "Nunito_700Bold",
    marginTop: 30,
  },
  paraStyle: {
    textAlign: "center",
    fontSize: 16,
    color: "#94a3b8", // slate-400
    marginTop: 20,
    paddingBottom: 20,
    lineHeight: 24,
    fontFamily: "Nunito_400Regular",
  },
  menuStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  buttonStyle: {
    backgroundColor: "#1e293b", // slate-800
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "48%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 1,
    borderColor: "#334155", // slate-700
  },
  buttonText: {
    fontSize: 16,
    color: "#f8fafc",
    fontFamily: "Nunito_600SemiBold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});

export default Home;

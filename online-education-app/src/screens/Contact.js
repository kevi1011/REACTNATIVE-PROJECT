import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

const Contact = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);

  const submitForm = () => {
    if (!name || !email || !phone || !message) {
      Alert.alert("Validation Error", "Please fill all the fields.");
    } else if (!agree) {
      Alert.alert("Error", "Please agree to the Terms & Conditions.");
    } else {
      Alert.alert("Thank You", `Thank you ${name} for contacting us!`);
      navigation.navigate("Home");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: "#0f172a" }}>
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <Text style={styles.mainHeader}>Contact Us</Text>
        <Text style={styles.description}>
          You can reach us anytime via our contact form below.
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.labels}> Enter your name </Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="John Doe"
            placeholderTextColor="#64748b"
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labels}> Enter your Email </Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="john@example.com"
            placeholderTextColor="#64748b"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labels}> Enter your mobile </Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="123-456-7890"
            placeholderTextColor="#64748b"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={(text) => setPhone(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labels}> How can we help you? </Text>
          <TextInput
            style={[styles.inputStyle, styles.multilineStyle]}
            placeholder="Tell us about yourself"
            placeholderTextColor="#64748b"
            value={message}
            onChangeText={(text) => setMessage(text)}
            numberOfLines={5}
            multiline={true}
          />
        </View>

        <View style={styles.wrapper}>
          <TouchableOpacity
            style={[styles.checkbox, agree && styles.checkboxActive]}
            onPress={() => setAgree(!agree)}>
            {agree && <Text style={styles.checkmark}>✓</Text>}
          </TouchableOpacity>
          <Text style={styles.wrapperText}>
            I have read and agreed to the Terms and Conditions
          </Text>
        </View>

        <TouchableOpacity
          style={[styles.buttonStyle, { backgroundColor: agree ? "#3b82f6" : "#475569" }]}
          disabled={!agree}
          onPress={submitForm}>
          <Text style={styles.buttonText}> Contact Us </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  mainHeader: {
    fontSize: 24,
    color: "#f8fafc",
    fontFamily: "Nunito_700Bold",
    paddingTop: 10,
    paddingBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#94a3b8",
    paddingBottom: 20,
    fontFamily: "Nunito_400Regular",
  },
  inputContainer: {
    marginBottom: 20,
  },
  labels: {
    fontSize: 14,
    color: "#cbd5e1",
    fontFamily: "Nunito_600SemiBold",
    marginBottom: 8,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "#334155",
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    fontFamily: "Nunito_400Regular",
    fontSize: 16,
    color: "#f8fafc",
    backgroundColor: "#1e293b",
  },
  multilineStyle: {
    textAlignVertical: "top",
    paddingVertical: 15,
  },
  buttonStyle: {
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  buttonText: {
    color: "#f8fafc",
    fontSize: 18,
    fontFamily: "Nunito_700Bold",
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#3b82f6",
    borderRadius: 6,
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxActive: {
    backgroundColor: "#3b82f6",
  },
  checkmark: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  wrapperText: {
    fontFamily: "Nunito_400Regular",
    color: "#94a3b8",
    fontSize: 14,
    flex: 1,
  },
});

export default Contact;

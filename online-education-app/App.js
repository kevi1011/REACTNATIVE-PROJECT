import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Course from "./src/screens/Course";
import StudentData from "./src/screens/StudentData";
import About from "./src/screens/About";
import Contact from "./src/screens/Contact";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import { Text } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#0f172a", // slate-900
          },
          headerTintColor: "#f8fafc",
          headerTitleStyle: {
            fontFamily: "Nunito_600SemiBold",
          },
          headerTitleAlign: "center",
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Course"
          component={Course}
          options={{
            headerTitle: "Available Courses",
          }}
        />
        <Stack.Screen
          name="Student"
          component={StudentData}
          options={{
            headerTitle: "Our Students",
          }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerTitle: "About Us",
          }}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            headerTitle: "Contact Us",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

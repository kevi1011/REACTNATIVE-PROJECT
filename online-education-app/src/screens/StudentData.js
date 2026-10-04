import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, Image, ActivityIndicator } from "react-native";

const StudentData = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [studentData, setStudentData] = useState([]);

  const getUserData = async () => {
    try {
      const response = await fetch("https://reqres.in/api/users?page=1");
      const realData = await response.json();
      setStudentData(realData.data);
      setIsLoaded(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const showStudentData = ({ item }) => {
    return (
      <View style={styles.card}>
        <View style={styles.imgContainer}>
          <Image style={styles.imgStyle} source={{ uri: item.avatar }} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{`${item.first_name} ${item.last_name}`}</Text>
          <Text style={styles.email}>{item.email}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Featured Students</Text>
      
      {isLoaded ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#3b82f6" />
        </View>
      ) : (
        <View style={styles.sliderContainer}>
          <FlatList
            keyExtractor={(item) => item.id.toString()}
            data={studentData}
            renderItem={showStudentData}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatlistContainer}
            snapToAlignment="center"
            decelerationRate="fast"
            snapToInterval={280} // card width + margin
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#0f172a",
    paddingVertical: 20,
  },
  mainHeader: {
    fontSize: 24,
    color: "#f8fafc",
    fontFamily: "Nunito_700Bold",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sliderContainer: {
    height: 350, // Fixed height to allow netflix style horizontal scroll
  },
  flatlistContainer: {
    paddingHorizontal: 10,
  },
  card: {
    width: 260,
    height: 300,
    backgroundColor: "#1e293b",
    borderRadius: 20,
    marginHorizontal: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#334155",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  imgContainer: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: "#3b82f6",
    overflow: "hidden",
    marginBottom: 20,
    shadowColor: "#3b82f6",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  imgStyle: {
    width: "100%",
    height: "100%",
  },
  infoContainer: {
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    color: "#f8fafc",
    fontFamily: "Nunito_700Bold",
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    color: "#94a3b8",
    fontFamily: "Nunito_400Regular",
  },
});

export default StudentData;

import React from "react";
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Linking } from "react-native";

const Course = () => {
  const courses = [
    {
      id: "1",
      title: "React Native Masterclass",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1740&auto=format&fit=crop",
      description: "Learn to build cross-platform mobile apps with React Native, from basics to advanced features.",
      price: "$49.99",
    },
    {
      id: "2",
      title: "Fullstack Next.js",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1740&auto=format&fit=crop",
      description: "Build production-ready fullstack applications with Next.js 14, React, and TailwindCSS.",
      price: "$59.99",
    },
    {
      id: "3",
      title: "UI/UX Design Principles",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1600&auto=format&fit=crop",
      description: "Master the art of designing beautiful and functional user interfaces using Figma.",
      price: "$39.99",
    },
    {
      id: "4",
      title: "Advanced JavaScript",
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=1740&auto=format&fit=crop",
      description: "Deep dive into JS concepts: Closures, Promises, Async/Await, and modern ES6+ features.",
      price: "$34.99",
    }
  ];

  const renderCourse = ({ item }) => {
    return (
      <View style={styles.courseContainer}>
        <View style={styles.courseCard}>
          <Image
            style={styles.cardImage}
            source={{ uri: item.image }}
            resizeMode="cover"
          />
          <View style={styles.cardContent}>
            <Text style={styles.courseTitle}>{item.title}</Text>
            <Text style={styles.courseDesc}>{item.description}</Text>
            
            <View style={styles.actionContainer}>
              <Text style={styles.price}>{item.price}</Text>
              <TouchableOpacity style={styles.buttonStyle} onPress={() => {}}>
                <Text style={styles.buttonText}>Enroll Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={renderCourse}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#0f172a", // slate-900
  },
  listContainer: {
    padding: 20,
  },
  courseContainer: {
    marginBottom: 25,
  },
  courseCard: {
    backgroundColor: "#1e293b", // slate-800
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#334155",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  cardImage: {
    width: "100%",
    height: 200,
  },
  cardContent: {
    padding: 20,
  },
  courseTitle: {
    fontSize: 22,
    color: "#f8fafc",
    fontFamily: "Nunito_700Bold",
    marginBottom: 10,
  },
  courseDesc: {
    fontSize: 14,
    color: "#94a3b8",
    fontFamily: "Nunito_400Regular",
    lineHeight: 22,
    marginBottom: 20,
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: 20,
    color: "#3b82f6",
    fontFamily: "Nunito_700Bold",
  },
  buttonStyle: {
    backgroundColor: "#3b82f6",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Nunito_600SemiBold",
    fontSize: 16,
  },
});

export default Course;

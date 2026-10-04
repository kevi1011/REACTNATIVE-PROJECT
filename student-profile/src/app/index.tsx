import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>Student Profile</Text>

      {/* Profile Card */}
      <View style={styles.card}>
        {/* Avatar */}
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>KG</Text>
        </View>

        {/* Student Details */}
        <Text style={styles.name}>kevin gajera</Text>
        <Text style={styles.role}>b.sc it(hons.)</Text>

        {/* Information Boxes */}
        <View style={styles.infoContainer}>
          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>Department</Text>
            <Text style={styles.infoValue}>Computer Science</Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>Semester</Text>
            <Text style={styles.infoValue}>5th</Text>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>City</Text>
            <Text style={styles.infoValue}>Rajkot</Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>CGPA</Text>
            <Text style={styles.infoValue}>8.5</Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      <Text style={styles.footer}>Learning React Native Styling </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F1FF",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1E3A8A",
    marginBottom: 20,
  },

  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,

    elevation: 8,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },

  avatarText: {
    fontSize: 32,
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#222",
  },

  role: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },

  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 15,
  },

  infoBox: {
    width: "47%",
    backgroundColor: "#F3F4F6",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },

  infoTitle: {
    fontSize: 14,
    color: "#777",
    marginBottom: 5,
  },

  infoValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111",
  },

  footer: {
    marginTop: 25,
    fontSize: 16,
    color: "#444",
    fontWeight: "600",
  },
});

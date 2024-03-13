import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import styles from "./styles";
import Title from "../../components/Title";
import { User } from "../../data/Profile";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Title title="Home" />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Category")}
      >
        <Text style={styles.buttonText}>Go to Category</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Profile", { User: User[0] })}
      >
        <Text style={styles.buttonText}>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

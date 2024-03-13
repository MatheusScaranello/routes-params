import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import Title from "../../components/Title";

import { User } from "../../data/Profile";

export default function Details({ routes }) {
  const user = routes.params.User;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Title title="Details" />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Details", { User: User[0] })}
      >
        <Text style={styles.buttonText}>User 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Details", { User: User[1] })}
      >
        <Text style={styles.buttonText}>User 2</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Details", { User: User[2] })}
      >
        <Text style={styles.buttonText}>User 3</Text>
      </TouchableOpacity>
    </View>
  );
}

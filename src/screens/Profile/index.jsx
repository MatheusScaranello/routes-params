import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import Title from "../../components/Title";

export default function Profile({ route }) {
  const { User } = route.params;
  return (
    <View style={styles.container}>
      <Title title="Profile" />
      <Text>Nome: {User.nome}</Text>
      <Text>Email: {User.email}</Text>
      <Text>Idade: {User.idade}</Text>
    </View>
  );
}

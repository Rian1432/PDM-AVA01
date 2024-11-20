import React from "react";
import { Stack } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, StyleSheet } from "react-native";

type HeaderWithTitleProps = {
  title: string;
};

const menuButton = () => {
    return (
        <View style={styles.buttonContainer}>
            <Ionicons name="menu-outline" size={32} color="black" />
        </View>
    )
}

export default function HeaderWithTitle({ title }: HeaderWithTitleProps) {
  return (
    <Stack.Screen
      options={{
        title,
        headerTitleStyle: {
            fontSize: 24,
        },
        headerRight: () => menuButton(),
      }}
    />
  );
}

const styles = StyleSheet.create({
    buttonContainer: {
      marginHorizontal: 12
    },
  });
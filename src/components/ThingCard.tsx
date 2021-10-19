import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps, StyleSheet } from "react-native";

interface ThingCardProps extends TouchableOpacityProps {
  thing: string;
}

export function ThingCard({thing, ...rest }: ThingCardProps) {
  return (
    <TouchableOpacity 
      style={styles.cardThing} 
      {...rest}
    >
      <Text style={styles.cardText}>{thing}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardThing: {
    marginTop: 20,
    padding: 20,
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "#341176",
  },
  cardText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#ffffff",
  },
});

import React from "react";
import { Text, TouchableOpacity, 
  TouchableOpacityProps, StyleSheet } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({title, ...rest} : ButtonProps){
 return (
  <TouchableOpacity style={styles.buttonAdd} activeOpacity={.7} {...rest}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
 );
}

const styles = StyleSheet.create({
  buttonAdd: {
    padding: 20,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#9001f4",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#ffffff",
  },
});
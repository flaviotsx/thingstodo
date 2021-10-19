import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { Button } from "../components/Button";
import { ThingCard } from "../components/ThingCard";

interface ThingData {
  id: string;
  name: string;
  date?: Date;
}

export function Home() {
  const [newThing, setNewThing] = useState("");
  const [myThings, setMyThings] = useState<ThingData[]>([]);
  const [greeting, setGreeting] = useState("");
  

  function handleAddNewThing() {
    const data = {
      id: String(new Date().getTime()),
      name: newThing
    }
    console.log(data);
    setMyThings((oldState) => [...oldState, data]);
  }

  function handleRemoveThing(id: string) {
     setMyThings(oldState => oldState.filter(
       thing => thing.id !== id
     ));
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting("Good morning!");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Good afternoon!");
    } else {
      setGreeting("Good night!");
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Flavio</Text>
      <Text style={styles.text}>{greeting}</Text>
      <TextInput
        style={styles.input}
        placeholder="Thing..."
        placeholderTextColor="#999999"
        onChangeText={setNewThing}
      />
      <Button onPress={handleAddNewThing} title="Add"/>
      <Text style={styles.title}>Things to do</Text>
      <FlatList
        data={myThings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ThingCard 
            thing={item.name} 
            onPress={() => handleRemoveThing(item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161621",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 30,
    color: "#ffffff",
    fontWeight: "bold",
    paddingTop: 20,
    marginBottom: 10,
  },
  text: {
    color: "#ffffff",
  },
  input: {
    marginVertical: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#341176",
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "700",
  },
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

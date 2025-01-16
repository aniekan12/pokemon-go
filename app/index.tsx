import PokemonCard from "@/components/cards/PokemonCard";
import { StatusBar } from "expo-status-bar";
import { View, Text, SafeAreaView, StyleSheet, Platform } from "react-native";

export default function Home() {
  return (
    <View style={style.safeArea}>
      <PokemonCard />
    </View>
  );
}

const style = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingLeft: 10,
    ...Platform.select({
      ios: {},
      android: {
        paddingTop: 20,
      },
    }),
  },
});

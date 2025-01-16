import { Pokemon } from "@/app/features/pokemon/data/models/Pokemon";
import { View, Text, StyleSheet, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PokemonCard({ props }: { props: Pokemon }) {
  return (
    <View style={pokemonCardStyle.card}>
      <Text>{props.name}</Text>
    </View>
  );
}

const pokemonCardStyle = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});

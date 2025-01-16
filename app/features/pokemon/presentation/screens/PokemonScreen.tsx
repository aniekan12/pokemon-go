import PokemonCard from "@/components/cards/PokemonCard";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { pokemons } from "../../data/models/Pokemon";

export default function PokemonScreen() {
  const { width, height } = useWindowDimensions();
  return (
    <View>
      <ScrollView>
        <Text
          style={[
            pokemonScreenStyle.title,
            {
              fontSize: width > 500 ? 50 : 24,
            },
          ]}
        >
          Pokemons
        </Text>
        {pokemons.map((pokemon) => (
          <PokemonCard props={pokemon} />
        ))}
      </ScrollView>
    </View>
  );
}

const pokemonScreenStyle = StyleSheet.create({
  title: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 20,
  },
});

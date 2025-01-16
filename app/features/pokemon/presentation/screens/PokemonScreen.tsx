import PokemonCard from "@/components/cards/PokemonCard";
import { View } from "react-native";
import { pokemons } from "../../data/models/Pokemon";

export default function PokemonScreen() {
  return (
    <View>
      {pokemons.map((pokemon) => (
        <PokemonCard props={pokemon} />
      ))}
    </View>
  );
}

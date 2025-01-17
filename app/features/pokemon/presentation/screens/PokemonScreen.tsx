import PokemonCard from "@/components/cards/PokemonCard";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  FlatList,
  SectionList,
} from "react-native";
import { pokemons } from "../../data/models/Pokemon";
import pokemonData from "../../data/grouped-data.json";

export default function PokemonScreen() {
  const { width, height } = useWindowDimensions();
  return (
    <View>
      {/* <ScrollView> */}

      <View
        style={{
          paddingHorizontal: 16,
        }}
      >
        <SectionList
          data={pokemonData}
          sections={pokemonData}
          renderSectionHeader={({ section: { type } }) => (
            <Text style={pokemonScreenStyle.title}>{type}</Text>
          )}
          SectionSeparatorComponent={() => <View style={{ height: 16 }} />}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text>Item {item}</Text>}
        />
        {/* <FlatList
          keyExtractor={(item, index) => index.toString()}
          //   horizontal
          data={pokemons}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
          renderItem={({ item, index }) => (
            <PokemonCard key={index} props={item} />
          )}
          ListHeaderComponent={
            <Text style={pokemonScreenStyle.title}>Pokemons</Text>
          }
          ListFooterComponent={
            <Text style={pokemonScreenStyle.title}>Pokemons ended</Text>
          }
          ListEmptyComponent={() => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
              }}
            >
              <Text>No Items Found</Text>
            </View>
          )}
        /> */}
      </View>
      {/* {pokemons.map((pokemon) => (
          <PokemonCard props={pokemon} />
        ))} */}
      {/* </ScrollView> */}
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

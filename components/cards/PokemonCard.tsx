import { Pokemon } from "@/app/features/pokemon/data/models/Pokemon";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  ImageSourcePropType,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const getTypeDetails = (type: string) => {
  switch (type.toLowerCase()) {
    case "electric":
      return { borderColor: "#FFD700", emoji: "⚡️" };
    case "water":
      return { borderColor: "#6493EA", emoji: "💧" };
    case "fire":
      return { borderColor: "#FF5733", emoji: "🔥" };
    case "grass":
      return { borderColor: "#66CC66", emoji: "🌿" };
    default:
      return { borderColor: "#A0A0A0", emoji: "❓" };
  }
};

export default function PokemonCard({ props }: { props: Pokemon }) {
  const { borderColor, emoji } = getTypeDetails(props.type);
  return (
    <View style={pokemonCardStyle.card}>
      <View style={pokemonCardStyle.nameAndHp}>
        <Text style={pokemonCardStyle.name}>{props.name}</Text>
        <Text style={pokemonCardStyle.hp}>😏{props.hp}</Text>
      </View>

      <Image
        source={props.image as ImageSourcePropType}
        style={pokemonCardStyle.image}
        accessibilityLabel={`Picture of ${props.name}`}
      />
      <View style={pokemonCardStyle.typeContainer}>
        <View style={[pokemonCardStyle.badge, { borderColor }]}>
          <Text style={pokemonCardStyle.typeEmoji}>{emoji}</Text>
          <Text style={pokemonCardStyle.typeText}>{props.type}</Text>
        </View>
        <View></View>
      </View>
      <View style={pokemonCardStyle.movesContainer}>
        <Text style={pokemonCardStyle.movesText}>
          Moves: {props.moves.join(", ")}
        </Text>
      </View>
      <View style={pokemonCardStyle.weaknessesContainer}>
        <Text style={pokemonCardStyle.weaknessesText}>
          Weaknesses: {props.weaknesses.join(", ")}
        </Text>
      </View>
    </View>
  );
}

const pokemonCardStyle = StyleSheet.create({
  typeContainer: {
    marginBottom: 40,
    alignItems: "center",
  },
  typeEmoji: {
    fontSize: 30,
    marginRight: 12,
  },
  typeText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  badge: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 6,
    marginTop: 10,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 4,
  },
  image: {
    height: 300,
    resizeMode: "contain",
    width: "100%",
  },
  movesContainer: {
    // flexDirection: "row",
    marginBottom: 20,
  },
  movesText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  weaknessesContainer: {
    // flexDirection: "row",
    marginBottom: 10,
  },
  weaknessesText: {
    fontSize: 22,
    fontWeight: "bold",
    // flexDirection: "row",
  },
  nameAndHp: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  hp: {
    paddingTop: 6,
    fontSize: 22,
  },
  type: {
    fontSize: 16,
    // fontWeight: "bold",
    // marginBottom: 16,
  },
  card: {
    flex: 1,
    // flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
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

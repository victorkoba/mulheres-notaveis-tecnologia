import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";

// Obtendo as dimensões da tela
const { width, height } =
  Dimensions.get("window");

export default function App() {
  return (
    <ImageBackground
      source={require("../assets/img/image-background.png")}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay} />

      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../assets/img/logo-tech-womans.png")}
        />
        <Text style={styles.titulo}>
          Seja bem-vindo ao nosso aplicativo!
        </Text>
        <Text style={styles.subTitulo}>
          Nós estamos aqui para ajudar você a
          conhecer as mulheres mais talentosas do
          mundo da tecnologia.
        </Text>
        <Text style={styles.frase}>
          “A imaginação é mais importante que o
          conhecimento.” – Ada Lovelace
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: width,
    height: height,
  },
  titulo: {
    textAlign: "center",
    color: "white",
    fontSize: 32,
  },
  logo: {
    width: 150,
    height: 150,
  },
  subTitulo: {
    fontSize: 16,
    textAlign: "center",
    padding: 10,
    color: "white",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  frase: {
    fontSize: 14,
    textAlign: "center",
    padding: 10,
    color: "white",
    marginTop: 50,
  }
});

// Victor Luiz Koba Batista
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/img/logo-tech-womans.png')}/>
        <Text style={styles.titulo}>Seja bem-vindo ao nosso aplicativo!</Text>
        <Text style={styles.subTitulo}>Nós estamos aqui para ajudar você a conhecer as mulheres mais talentosas do mundo da tecnologia.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(140, 51, 146)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    textAlign: 'center',
    color: 'white',
    fontSize: 26,
  },
  logo: {
    width: 150,
    height: 150,
  },
  subTitulo: {
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
    color: 'white',
  },
});
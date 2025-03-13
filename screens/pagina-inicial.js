// Victor Luiz Koba Batista
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Seja bem-vindo ao nosso aplicatio!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: 'black',
    fontSize: 32,
  },
});
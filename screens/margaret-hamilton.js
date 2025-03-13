import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const ProfileCard = () => {
  return (
<ScrollView contentContainerStyle={styles.scrollContainer}>
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Margaret_Hamilton_1995.jpg/640px-Margaret_Hamilton_1995.jpg' }}
        style={styles.image}
      />
      <Text style={styles.name}>Margaret Hamilton</Text>
      <View style={styles.infoBox}>
        <Text style={styles.info}>Nascimento: 17 de agosto de 1936, Paoli, Indiana, EUA.</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.info}>Onde viveu: Cresceu durante a Segunda Guerra Mundial e iniciou sua carreira no auge da Corrida Espacial entre os EUA e a União Soviética. O período era marcado por forte discriminação contra mulheres em ciência e tecnologia, mas Hamilton conseguiu espaço na área de engenharia de software. </Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.info}>Formação acadêmica: Bacharelado em Matemática pela Universidade de Michigan.</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.info}>Relevância e contribuição: Trabalhou no MIT desenvolvendo software para a NASA, tornando-se diretora da Divisão de Engenharia de Software. Sua equipe criou os sistemas de controle do Programa Apollo, incluindo o software que permitiu o pouso da Apollo 11 na Lua em 1969. Hamilton cunhou o termo "engenharia de software" e estabeleceu práticas de desenvolvimento confiáveis, que influenciam a computação até hoje. </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    flex: 1,
    backgroundColor: 'linear-gradient(180deg,rgb(221, 67, 245),rgb(255, 85, 198))',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFCCE6',
  },
  infoBox: {
    backgroundColor: '#ffcce6',
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
    width: '90%',
  },
  info: {
    fontSize: 14,
    color: '#800040',
    textAlign: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: 'rgb(140, 51, 146)',
  },
});

export default ProfileCard;

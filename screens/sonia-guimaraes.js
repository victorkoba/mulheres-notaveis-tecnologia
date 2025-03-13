import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://web-assets.esetstatic.com/wls/2017/10/ada_lovelace.jpeg' }}
        style={styles.image}
      />
      <Text style={styles.name}>Sonia Guimaraes</Text>
      <View style={styles.infoBox}>
        <Text style={styles.info}>Nascimento: 1957, Brotas, São Paulo, Brasil. </Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.info}>Morte: ATRASADA</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.info}>Onde viveu: Cresceu em um Brasil onde a presença de mulheres, especialmente negras, na ciência era praticamente inexistente. Durante a Ditadura Militar (1964-1985), o acesso à educação era desafiador, e a falta de políticas de inclusão tornava o ambiente acadêmico ainda mais elitista. </Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.info}>Formação acadêmica: Doutorado em Física pela Universidade de Manchester, na Inglaterra. </Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.info}>Relevância e contribuição:  Primeira mulher negra a se tornar doutora em Física no Brasil. Professora no ITA (Instituto Tecnológico de Aeronáutica), atua na inclusão de mulheres e negros na ciência e pesquisa áreas como semicondutores e sensores infravermelhos. Tornou-se uma referência na luta por diversidade na academia e nas ciências exatas, inspirando novas gerações. </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'linear-gradient(180deg, #4b0082, #ff69b4)',
    flex: 1,
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
    color: '#d63384',
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
});

export default ProfileCard;

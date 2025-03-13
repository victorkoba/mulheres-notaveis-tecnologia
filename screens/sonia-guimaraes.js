import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const ProfileCard = () => {
  return (
<ScrollView contentContainerStyle={styles.scrollContainer}>
      <Image
        source={{ uri: 'https://www.cfemea.org.br/images/Mulheres_Negras/sonia-guimaraes2.jpeg' }}
        style={styles.image}
      />
      <Text style={styles.name}>Sonia Guimaraes</Text>
      <View style={styles.infoBox}>
        <Text style={styles.info}>Nascimento: 1957, Brotas, São Paulo, Brasil.</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.info}>Morte: </Text>
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

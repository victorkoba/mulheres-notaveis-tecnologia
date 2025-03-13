import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const ProfileCard = () => {
  return (
<ScrollView contentContainerStyle={styles.scrollContainer}>
      <Image
        source={{ uri: 'https://mujeresconciencia.com/app/uploads/2020/01/hopper_portada.jpg' }}
        style={styles.image}
      />
      <Text style={styles.name}>Grace Hopper</Text>
      <View style={styles.infoBox}>
        <Text style={styles.info}>Nascimento: 9 de dezembro de 1906, Nova York, EUA.</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.info}>Morte: 1º de janeiro de 1992, Arlington, Virgínia, EUA. </Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.info}>Onde viveu: Durante a Grande Depressão e a Segunda Guerra Mundial, períodos que afetaram a economia e a sociedade, limitando o acesso das mulheres a carreiras científicas e tecnológicas. Apesar disso, Hopper ingressou na Marinha dos EUA durante a guerra, contribuindo significativamente para o desenvolvimento da computação. </Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.info}>Formação acadêmica:  Bacharelado em Matemática e Física pelo Vassar College (1928); doutorado em Matemática pela Universidade Yale (1934). </Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.info}>Relevância e contribuição: Desenvolveu o primeiro compilador, que permitia que computadores entendessem comandos em inglês em vez de apenas códigos binários. Criou a linguagem COBOL, que se tornou um padrão na computação empresarial. Além disso, ajudou a popularizar o termo "bug" para descrever erros em softwares. Sua atuação na Marinha e no setor privado foi essencial para a evolução da programação de computadores. </Text>
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

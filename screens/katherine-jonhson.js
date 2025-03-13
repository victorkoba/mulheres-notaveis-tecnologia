import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://web-assets.esetstatic.com/wls/2017/10/ada_lovelace.jpeg' }}
        style={styles.image}
      />
      <Text style={styles.name}>Katherine Jonhson</Text>
      <View style={styles.infoBox}>
        <Text style={styles.info}>Nascimento: 26 de agosto de 1918, White Sulphur Springs, Virgínia Ocidental, EUA. </Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.info}>Morte: 24 de fevereiro de 2020, Newport News, Virgínia, EUA. </Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.info}>Onde viveu: Durante o período da segregação racial nos EUA, que limitava o acesso de pessoas negras à educação e oportunidades profissionais. Apesar das barreiras, Katherine demonstrou talento em matemática desde cedo e superou os obstáculos raciais e de gênero na NASA.</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.info}>Formação acadêmica: Graduada em Matemática e francês pela Universidade Estadual da Virgínia Ocidental, uma das poucas universidades que aceitavam estudantes negros na época.</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.info}>Relevância e contribuição: Trabalhou na NASA realizando cálculos fundamentais para missões espaciais, incluindo o voo de John Glenn, que pediu especificamente para que ela verificasse os cálculos do computador antes de seu lançamento. Sua história foi popularizada pelo filme Estrelas Além do Tempo, que destacou a importância de mulheres negras na exploração espacial. </Text>
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

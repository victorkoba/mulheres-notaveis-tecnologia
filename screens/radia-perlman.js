import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const ProfileCard = () => {
  return (
<ScrollView contentContainerStyle={styles.scrollContainer}>
      <Image
        source={{ uri: 'https://www.internethalloffame.org/wp-content/uploads/2014/03/radia_perlman.jpg' }}
        style={styles.image}
      />
      <Text style={styles.name}>Radia Perlman</Text>
      <View style={styles.infoBox}>
        <Text style={styles.info}>Nascimento: 1º de janeiro de 1951, Portsmouth, Virgínia, EUA.</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.info}>Morte: </Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.info}>Onde viveu: Cresceu nos EUA nos anos 1950 e 1960, uma época em que a computação ainda estava emergindo e era dominada por homens. Desde jovem, demonstrou interesse por matemática e ciência, mas enfrentou desafios como a falta de incentivo para mulheres em tecnologia. </Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.info}>Formação acadêmica: Bacharelado e doutorado em Ciência da Computação pelo MIT. </Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.info}>Relevância e contribuição: Criou o protocolo Spanning Tree (STP), que permitiu a escalabilidade das redes Ethernet e foi fundamental para a infraestrutura da internet moderna. Embora sua invenção tenha sido crucial, por muito tempo ela não recebeu o reconhecimento merecido, algo comum para mulheres na área da computação. Além disso, contribuiu para o desenvolvimento de protocolos de segurança e confiabilidade na comunicação digital.</Text>
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

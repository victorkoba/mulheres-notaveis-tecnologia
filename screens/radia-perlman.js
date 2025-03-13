import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://web-assets.esetstatic.com/wls/2017/10/ada_lovelace.jpeg' }}
        style={styles.image}
      />
      <Text style={styles.name}>Radia Perlman</Text>
      <View style={styles.infoBox}>
        <Text style={styles.info}>Nascimento: 1º de janeiro de 1951, Portsmouth, Virgínia, EUA. </Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.info}>Morte: ATRASADA</Text>
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

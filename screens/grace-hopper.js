import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://web-assets.esetstatic.com/wls/2017/10/ada_lovelace.jpeg' }}
        style={styles.image}
      />
      <Text style={styles.name}>Grace Hopper</Text>
      <View style={styles.infoBox}>
        <Text style={styles.info}>Nascimento: 1</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.info}>Morte: </Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.info}>Onde viveu: </Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.info}>Formação acadêmica: </Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.info}>Relevância e contribuição: </Text>
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

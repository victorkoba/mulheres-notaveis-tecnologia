import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://web-assets.esetstatic.com/wls/2017/10/ada_lovelace.jpeg' }}
        style={styles.image}
      />
      <Text style={styles.name}>Ada Lovelace</Text>
      <View style={styles.infoBox}>
        <Text style={styles.info}>Nascimento: 10 de dezembro de 1815, Londres, Inglaterra.</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.info}>Morte: 27 de novembro de 1852, Londres, Inglaterra.</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.info}>Onde viveu: No século XIX, quando as mulheres eram desencorajadas de estudar ciências exatas e tecnologia. Seu acesso ao conhecimento foi facilitado por sua mãe, Anne Isabella Byron, que incentivou seus estudos matemáticos para afastá-la das tendências poéticas do pai, Lord Byron.</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.info}>Formação acadêmica: Não teve uma educação formal universitária, mas estudou matemática com Mary Somerville e Augustus De Morgan, professores de renome.</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.info}>Relevância e contribuição: Trabalhou com Charles Babbage no desenvolvimento da Máquina Analítica, um precursor dos computadores modernos. Em suas anotações, criou um algoritmo considerado o primeiro programa de computador da história. Também previu que máquinas poderiam processar não apenas números, mas música e imagens, antecipando conceitos da computação moderna. Seu trabalho foi redescoberto no século XX e a consagrou como a primeira programadora da história.</Text>
      </View>
    </View>
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
});

export default ProfileCard;

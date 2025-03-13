import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Definindo as rotas das telas
import PaginaInicial from './screens/pagina-inicial'
import AdaLovelace from './screens/ada-lovelace'
import GraceHopper from './screens/grace-hopper'
import MargaretHamilton from './screens/margaret-hamilton'
import KatherineJonhson from './screens/katherine-jonhson'
import RadiaPerlman from './screens/radia-perlman'
import SoniaGuimaraes from './screens/sonia-guimaraes'

export default function App() {
  return (
    // NavigationContainer é o componente de Navegação do React Native
    <NavigationContainer>
      {/* MyNavigation é o nome da minha função de navegação */}
      <MyNavigation />
    </NavigationContainer>
  );
}

// Criação da navegação com o Bottom Tabs
const BotaoRodape = createBottomTabNavigator();

function MyNavigation() {
  return (
    <BotaoRodape.Navigator initialRouteName='PaginaInicial' screenOptions={{tabBarActiveTintColor: '#000'}}>
      <BotaoRodape.Screen name="PaginaInicial" component={PaginaInicial} options={{tabBarLabel: 'Página Inicial', headerShown: false }}/>
      <BotaoRodape.Screen name="AdaLovelace" component={AdaLovelace} options={{tabBarLabel: 'Ada Lovelace', headerShown: false }}/>
      <BotaoRodape.Screen name="GraceHopper" component={GraceHopper} options={{tabBarLabel: 'Grace Hopper', headerShown: false }}/>
      <BotaoRodape.Screen name="KatherineJonhson" component={KatherineJonhson} options={{tabBarLabel: 'Katherine Jonhson', headerShown: false }}/>
      <BotaoRodape.Screen name="MargaretHamilton" component={MargaretHamilton} options={{tabBarLabel: 'Margaret Hamilton', headerShown: false }}/>
      <BotaoRodape.Screen name="RadiaPerlman" component={RadiaPerlman} options={{tabBarLabel: 'Radia Perlman', headerShown: false }}/>
      <BotaoRodape.Screen name="SoniaGuimaraes" component={SoniaGuimaraes} options={{tabBarLabel: 'Sônia Guimarães', headerShown: false }}/>
    </BotaoRodape.Navigator>
  );
}
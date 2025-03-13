import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Importando corretamente o Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons";

// Importando as telas
import PaginaInicial from "./screens/pagina-inicial";
import AdaLovelace from "./screens/ada-lovelace";
import GraceHopper from "./screens/grace-hopper";
import MargaretHamilton from "./screens/margaret-hamilton";
import KatherineJonhson from "./screens/katherine-jonhson";
import RadiaPerlman from "./screens/radia-perlman";
import SoniaGuimaraes from "./screens/sonia-guimaraes";

// Componente principal
export default function App() {
  return (
    <NavigationContainer>
      <MyNavigation />
    </NavigationContainer>
  );
}

// Criação da navegação com o Bottom Tabs
const BotaoRodape = createBottomTabNavigator();

function MyNavigation() {
  return (
    <BotaoRodape.Navigator
      initialRouteName="PaginaInicial"
      screenOptions={{
        tabBarInactiveTintColor: "rgb(253, 175, 224)",
        tabBarActiveTintColor: "rgb(140, 51, 146)",
        tabBarStyle: { backgroundColor: "white" },
      }}
    >
      <BotaoRodape.Screen
        name="PaginaInicial"
        component={PaginaInicial}
        options={{
          tabBarLabel: "Página Inicial",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faHouse} size={size} color={color} />
          ),
        }}
      />
      <BotaoRodape.Screen
        name="AdaLovelace"
        component={AdaLovelace}
        options={{
          tabBarLabel: "Ada Lovelace",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faUser} size={size} color={color} />
          ),
        }}
      />
      <BotaoRodape.Screen
        name="GraceHopper"
        component={GraceHopper}
        options={{
          tabBarLabel: "Grace Hopper",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faUser} size={size} color={color} />
          ),
        }}
      />
      <BotaoRodape.Screen
        name="KatherineJonhson"
        component={KatherineJonhson}
        options={{
          tabBarLabel: "Katherine Jonhson",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faUser} size={size} color={color} />
          ),
        }}
      />
      <BotaoRodape.Screen
        name="MargaretHamilton"
        component={MargaretHamilton}
        options={{
          tabBarLabel: "Margaret Hamilton",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faUser} size={size} color={color} />
          ),
        }}
      />
      <BotaoRodape.Screen
        name="RadiaPerlman"
        component={RadiaPerlman}
        options={{
          tabBarLabel: "Radia Perlman",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faUser} size={size} color={color} />
          ),
        }}
      />
      <BotaoRodape.Screen
        name="SoniaGuimaraes"
        component={SoniaGuimaraes}
        options={{
          tabBarLabel: "Sônia Guimarães",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faUser} size={size} color={color} />
          ),
        }}
      />
    </BotaoRodape.Navigator>
  );
}


import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Para os ícones
import Colors from '../../constants/Colors'; 

export default function TabLayout() {
  
  const currentColors = Colors.light; // Usando light por enquanto

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: currentColors.tint,
        tabBarInactiveTintColor: currentColors.tabIconDefault,
        tabBarStyle: {
          backgroundColor: currentColors.background,
        },
        headerStyle: {
          backgroundColor: currentColors.background,
        },
        headerTitleStyle: {
          color: currentColors.text,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'index') { 
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'about') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          } else if (route.name === 'academic') {
            iconName = focused ? 'school' : 'school-outline';
          } else if (route.name === 'professional') {
            iconName = focused ? 'briefcase' : 'briefcase-outline';
          } else if (route.name === 'projects') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'game') {
            iconName = focused ? 'game-controller' : 'game-controller-outline';
          }
          
          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: 'Home (Perfil)' }} />
      <Tabs.Screen name="about" options={{ title: 'Sobre' }} />
      <Tabs.Screen name="academic" options={{ title: 'Acadêmica' }} />
      <Tabs.Screen name="professional" options={{ title: 'Profissional' }} />
      <Tabs.Screen name="projects" options={{ title: 'Projetos' }} />
      <Tabs.Screen name="game" options={{ title: 'Jogo' }} />
    </Tabs>
  );

  
}
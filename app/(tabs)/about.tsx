
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Colors from '../../constants/Colors'; 
import { resumeData } from '../../data/resumeData'; 

export default function AboutScreen() {
  const currentColors = Colors.light; 

  const technologies = [
    { name: 'React Native', description: 'Framework para desenvolvimento de apps móveis multiplataforma.' },
    { name: 'Expo (SDK ~53)', description: 'Plataforma e conjunto de ferramentas para facilitar o desenvolvimento React Native.' },
    { name: 'Expo Router', description: 'Sistema de roteamento baseado em arquivos para apps Expo e React Native.' },
    { name: 'TypeScript', description: 'Superset do JavaScript que adiciona tipagem estática.' },
    { name: 'React Navigation', description: 'Biblioteca de navegação (usada internamente pelo Expo Router).' },
    { name: 'Git & GitHub', description: 'Sistema de controle de versão e plataforma de hospedagem de código.' },
  ];

  return (
    <ScrollView style={[styles.container, { backgroundColor: currentColors.background }]}>
      <View style={styles.headerContainer}>
        <Text style={[styles.title, { color: currentColors.headerText }]}>Sobre este Aplicativo</Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: currentColors.subHeaderText }]}>Desenvolvido por:</Text>
        <Text style={[styles.text, { color: currentColors.bodyText }]}>{resumeData.name}</Text> {/* */}
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: currentColors.subHeaderText }]}>Tecnologias Utilizadas:</Text>
        {technologies.map((tech, index) => (
          <View key={index} style={styles.techItem}>
            <Text style={[styles.techName, { color: currentColors.primary }]}>{tech.name}</Text>,
            <Text style={[styles.techDescription, { color: currentColors.bodyText }]}>{tech.description}</Text>
          </View>
        ))}
      </View>

       <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: currentColors.subHeaderText }]}>Objetivo do Projeto:</Text>
        <Text style={[styles.text, { color: currentColors.bodyText }]}>
          Este aplicativo foi desenvolvido como parte de um projeto da matéria de Programação Web e Mobile,
          com o intuito de apresentar meu currículo de forma interativa e mobile.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  section: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15,
    backgroundColor: Colors.light.cardBackground, // Usando cor fixa para o card por enquanto
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.light.borderColor,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
  },
  techItem: {
    marginBottom: 10,
  },
  techName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  techDescription: {
    fontSize: 15,
    marginLeft: 5,
  },
});
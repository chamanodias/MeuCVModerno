// app/(tabs)/projects.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { resumeData, IProject } from '../../data/resumeData'; // Ajuste o caminho se necessário
import Colors from '../../constants/Colors'; // Ajuste o caminho se necessário

const ProjectItem: React.FC<{ item: IProject }> = ({ item }) => {
  const itemColors = Colors.light; // Simplificando por enquanto
  return (
    <View style={[styles.projectItemContainer, {
      backgroundColor: itemColors.cardBackground, // Adicionado para consistência
      borderColor: itemColors.borderColor
    }]}>
      <Text style={[styles.projectName, { color: itemColors.primary }]}>{item.name}</Text>
      {item.description && ( // Se houver descrição, ela será exibida
        <Text style={[styles.projectDescription, { color: itemColors.bodyText }]}>{item.description}</Text>
      )}
    </View>
  );
};

export default function ProjectsScreen() {
  const currentColors = Colors.light; // Simplificando por enquanto

  return (
    <ScrollView style={[styles.container, { backgroundColor: currentColors.background }]}>
      <View style={styles.headerContainer}>
        <Text style={[styles.title, { color: currentColors.headerText }]}>Projetos Acadêmicos</Text>
      </View>

      {resumeData.academicProjects.length > 0 ? (
        resumeData.academicProjects.map((proj, index) => ( // Mapeando os projetos acadêmicos do resumeData
          <ProjectItem key={index} item={proj} />
        ))
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={[styles.emptyText, { color: currentColors.subHeaderText }]}>Nenhum projeto acadêmico listado.</Text>
        </View>
      )}
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
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  projectItemContainer: {
    marginHorizontal: 15,
    marginVertical: 8,
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  projectName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  projectDescription: {
    fontSize: 15,
    lineHeight: 20,
  },
  emptyContainer: { 
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  emptyText: {
    fontSize: 16,
    fontStyle: 'italic',
  }
});
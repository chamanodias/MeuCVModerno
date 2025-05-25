// app/(tabs)/professional.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { resumeData, IExperience } from '../../data/resumeData'; // Ajuste o caminho
import Colors from '../../constants/Colors'; // Ajuste o caminho

const ExperienceCard: React.FC<{ item: IExperience }> = ({ item }) => {
  const cardColors = Colors.light; // Simplificando por enquanto
  return (
    <View style={[styles.card, { backgroundColor: cardColors.cardBackground, borderColor: cardColors.borderColor }]}>
      <Text style={[styles.cardRole, { color: cardColors.primary }]}>{item.role} | {item.company}</Text>
      <Text style={[styles.cardPeriod, { color: cardColors.subHeaderText }]}>{item.period}</Text>
      {item.responsibilities.map((resp, index) => (
        <Text key={index} style={[styles.cardResponsibility, { color: cardColors.bodyText }]}>• {resp}</Text>
      ))}
    </View>
  );
};

export default function ProfessionalScreen() {
  const currentColors = Colors.light; // Simplificando por enquanto

  return (
    <ScrollView style={[styles.container, { backgroundColor: currentColors.background }]}>
      <View style={styles.headerContainer}>
        <Text style={[styles.title, { color: currentColors.headerText }]}>Experiência Profissional</Text>
      </View>

      
      {resumeData.experience.map((exp, index) => (
        <ExperienceCard key={index} item={exp} />
      ))}
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
  card: {
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    // Adicione sombra se desejar
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  cardRole: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardPeriod: {
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 8,
  },
  cardResponsibility: {
    fontSize: 15,
    marginBottom: 4,
    lineHeight: 20,
  },
});
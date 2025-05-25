// app/(tabs)/academic.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { resumeData } from '../../data/resumeData'; // Ajuste o caminho
import Colors from '../../constants/Colors'; // Ajuste o caminho

export default function AcademicScreen() {
  const currentColors = Colors.light; // Simplificando por enquanto

  return (
    <ScrollView style={[styles.container, { backgroundColor: currentColors.background }]}>
      <View style={styles.headerContainer}>
        <Text style={[styles.title, { color: currentColors.headerText }]}>Formação Acadêmica</Text>
      </View>

      {resumeData.education.map((edu, index) => ( //
        <View key={index} style={[styles.card, { backgroundColor: currentColors.cardBackground, borderColor: currentColors.borderColor }]}>
          <Text style={[styles.degree, { color: currentColors.primary }]}>{edu.degree}</Text> {/* */}
          <Text style={[styles.institution, { color: currentColors.secondary }]}>{edu.institution}</Text> {/* */}
          <Text style={[styles.period, { color: currentColors.subHeaderText }]}>{edu.period}</Text> {/* */}
        </View>
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
    padding: 20,
    borderRadius: 8,
    borderWidth: 1,
    // Adicione sombra se desejar, como no ExperienceScreen
  },
  degree: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  institution: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  period: {
    fontSize: 14,
    fontStyle: 'italic',
  },
});
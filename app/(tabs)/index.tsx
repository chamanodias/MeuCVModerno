// app/(tabs)/index.tsx (Home/Perfil)
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
// import { Image } from 'react-native'; // Mantenha comentado ou remova se não for usar a foto
import { Ionicons } from '@expo/vector-icons';
import { resumeData } from '../../data/resumeData';
import Colors from '../../constants/Colors';

export default function HomeScreen() {
  const currentColors = Colors.light;

  const handleLinkPress = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log(`Don't know how to open this URL: ${url}`);
      // Alert.alert('Erro', `Não foi possível abrir ${url}`);
    }
  };

  const ListItem: React.FC<{ iconName?: React.ComponentProps<typeof Ionicons>['name'], text: string, onPress?: () => void, isLink?: boolean }> = ({ iconName, text, onPress, isLink }) => (
    <TouchableOpacity onPress={onPress} disabled={!onPress} style={styles.listItemContainer}>
      {iconName && <Ionicons name={iconName} size={20} color={isLink ? currentColors.link : currentColors.primary} style={styles.listItemIcon} />}
      <Text style={[styles.listItemText, { color: isLink ? currentColors.link : currentColors.bodyText }]}>{text}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={[styles.container, { backgroundColor: currentColors.background }]}>
      <View style={styles.headerSection}>
        {/* Se decidir usar a foto, ela viria aqui. Exemplo:
        <Image
          source={require('../../assets/images/profile.png')}
          style={styles.profileImage}
        />
        */}
        <Text style={[styles.name, { color: currentColors.headerText }]}>{resumeData.name}</Text>
        <Text style={[styles.objectiveTitle, { color: currentColors.subHeaderText }]}>Objetivo Profissional</Text>
        <Text style={[styles.objectiveText, { color: currentColors.bodyText }]}>{resumeData.professionalObjective}</Text>
      </View>

      <View style={styles.card}>
        <Text style={[styles.cardTitle, { color: currentColors.primary }]}>Contato</Text>
        <ListItem
          iconName="call-outline"
          text={resumeData.contact.phone}
          onPress={() => handleLinkPress(`tel:${resumeData.contact.phone}`)}
          isLink
        />
        <ListItem
          iconName="mail-outline"
          text={resumeData.contact.email}
          onPress={() => handleLinkPress(`mailto:${resumeData.contact.email}`)}
          isLink
        />
        <ListItem
          iconName="location-outline"
          text={resumeData.contact.location}
        />
      </View>

      <View style={styles.card}>
        <Text style={[styles.cardTitle, { color: currentColors.primary }]}>Hard Skills</Text>
        {resumeData.hardSkills.map((skillSet) => (
          <View key={skillSet.category} style={styles.skillCategoryContainer}>
            <Text style={[styles.skillCategoryTitle, { color: currentColors.secondary }]}>{skillSet.category}</Text>
            {skillSet.items.map((item, index) => (
              <ListItem key={index} iconName="chevron-forward-outline" text={item} />
            ))}
          </View>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={[styles.cardTitle, { color: currentColors.primary }]}>Soft Skills</Text>
        {resumeData.softSkills.map((skill, index) => (
          <ListItem key={index} iconName="checkmark-circle-outline" text={skill} />
        ))}
      </View>

      <View style={styles.card}>
        <Text style={[styles.cardTitle, { color: currentColors.primary }]}>Conhecimento em Programação</Text>
        <View style={styles.tagsContainer}>
          {resumeData.programmingKnowledge.map((skill, index) => (
            <View key={index} style={[styles.tag, { backgroundColor: currentColors.secondary }]}>
              <Text style={[styles.tagText, { color: currentColors.background }]}>{skill}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.card}>
        <Text style={[styles.cardTitle, { color: currentColors.primary }]}>Idiomas</Text>
        {resumeData.languages.map((lang, index) => (
          <ListItem key={index} iconName="language-outline" text={`${lang.name} (${lang.level})`} />
        ))}
      </View>

    </ScrollView>
  );
}

// Os estilos permanecem os mesmos da resposta anterior
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerSection: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    alignItems: 'center',
    backgroundColor: Colors.light.cardBackground,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.borderColor,
    marginBottom: 10,
  },
  // Se você remover a foto, pode remover o estilo profileImage também ou mantê-lo comentado:
  /* profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: Colors.light.tint,
  }, */
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  objectiveTitle: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 8,
  },
  objectiveText: {
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: Colors.light.cardBackground,
    borderRadius: 10,
    padding: 18,
    marginHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: Colors.light.borderColor,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  listItemIcon: {
    marginRight: 12,
  },
  listItemText: {
    fontSize: 16,
    lineHeight: 22,
    flexShrink: 1,
  },
  skillCategoryContainer: {
    marginBottom: 12,
  },
  skillCategoryTitle: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 8,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    fontSize: 14,
    fontWeight: '500',
  }
});
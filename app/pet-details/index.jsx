import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import AboutPet from '../../components/pet-details/AboutPet';
import PetInfo from '../../components/pet-details/PetInfo';
import PetSubInfo from '../../components/pet-details/PetSubInfo';

export default function Index() {
  const pet = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: '',
    });
  }, []);

  return (
    <View>
      <ScrollView>
        {/* pet info */}

        <PetInfo pet={pet} />

        <PetSubInfo pet={pet} />

        {/* pet properties */}

        <AboutPet pet={pet} />

        {/* owner details*/}
      </ScrollView>
      {/* adopt me */}
    </View>
  );
}

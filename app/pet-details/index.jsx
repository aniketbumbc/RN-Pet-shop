import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
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
      {/* pet info */}

      <PetInfo pet={pet} />

      <PetSubInfo pet={pet} />

      {/* pet properties */}

      {/* owner details*/}

      {/* adopt me */}
    </View>
  );
}

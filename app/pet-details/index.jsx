import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import PetInfo from '../../components/pet-details/PetInfo';

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

      {/* pet properties */}

      {/* owner details*/}

      {/* adopt me */}
    </View>
  );
}

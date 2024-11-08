import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import AboutPet from '../../components/pet-details/AboutPet';
import OwnerDetails from '../../components/pet-details/OwnerDetails';
import PetInfo from '../../components/pet-details/PetInfo';
import PetSubInfo from '../../components/pet-details/PetSubInfo';
import Colors from '../../constants/Colors';

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
        <OwnerDetails pet={pet} />
        <View style={{ height: 70 }}></View>
      </ScrollView>

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.adoptMe}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'outfit-medium',
              fontSize: 20,
            }}
          >
            {' '}
            Adopt Me
          </Text>
        </TouchableOpacity>
      </View>

      {/* adopt me */}
    </View>
  );
}

const styles = StyleSheet.create({
  adoptMe: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
  },
  bottomContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
});

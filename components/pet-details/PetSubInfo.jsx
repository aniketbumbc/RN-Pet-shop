import React from 'react';
import { View, Text, Image } from 'react-native';
import Colors from '../../constants/Colors';
import PetSubInfoCard from './PetSubInfoCard';

export default function PetSubInfo() {
  return (
    <View
      style={{
        padding: 20,
      }}
    >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <PetSubInfoCard
          icon={require('../../assets/images/calendar.png')}
          title={'Age'}
          value={4}
        />
        <PetSubInfoCard
          icon={require('../../assets/images/bone.png')}
          title={'Breed'}
          value={'breed'}
        />
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <PetSubInfoCard
          icon={require('../../assets/images/calendar.png')}
          title={'Age'}
          value={4}
        />
        <PetSubInfoCard
          icon={require('../../assets/images/bone.png')}
          title={'Breed'}
          value={'breed'}
        />
      </View>
    </View>
  );
}

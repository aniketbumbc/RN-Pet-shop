import React from 'react';
import { View, Text, Image } from 'react-native';
import Colors from '../../constants/Colors';
import PetSubInfoCard from './PetSubInfoCard';

export default function PetSubInfo() {
  return (
    <View
      style={{
        paddingHorizontal: 20,
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
          value={'4 Years'}
        />
        <PetSubInfoCard
          icon={require('../../assets/images/bone.png')}
          title={'Breed'}
          value={'German sheford'}
        />
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <PetSubInfoCard
          icon={require('../../assets/images/sex.png')}
          title={'Sex'}
          value={'Male'}
        />
        <PetSubInfoCard
          icon={require('../../assets/images/weight.png')}
          title={'Weight'}
          value={'5 kg'}
        />
      </View>
    </View>
  );
}

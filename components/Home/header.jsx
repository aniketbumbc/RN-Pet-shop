import React from 'react';
import { View, Text } from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';

export default function header() {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <View>
        <Text style={{ fontFamily: 'outfit', fontSize: 18 }}> Welcome</Text>
        <Text
          style={{
            fontFamily: 'outfit-medium',
            fontSize: 25,
          }}
        >
          {' '}
          Mike Bun
        </Text>
      </View>
      <Fontisto
        name="picture"
        size={24}
        color="black"
        style={{ width: 40, height: 40, borderRadius: 99 }}
      />
    </View>
  );
}

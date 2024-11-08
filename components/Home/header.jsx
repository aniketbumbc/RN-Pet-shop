import React from 'react';
import { View, Text } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

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
      <MaterialCommunityIcons
        name="face-man-profile"
        size={40}
        color={Colors.PRIMARY}
        style={{ width: 40, height: 40 }}
      />
    </View>
  );
}

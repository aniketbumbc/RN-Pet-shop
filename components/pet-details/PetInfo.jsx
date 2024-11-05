import React from 'react';
import { View, Text, Image } from 'react-native';
import Colors from '../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function PetInfo({ pet }) {
  return (
    <View>
      <Image
        source={{ uri: pet?.imageUrl }}
        style={{
          width: '100%',
          height: 400,
          objectFit: 'cover',
        }}
      />
      <View
        style={{
          padding: 20,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View>
          <Text style={{ fontFamily: 'outfit-bold', fontSize: 28 }}>
            {pet?.name}
          </Text>

          <Text
            style={{
              fontFamily: 'outfit',
              fontSize: 18,
              color: Colors.GRAY,
            }}
          >
            4708 Belwood green baltimore 21227
          </Text>
        </View>

        <View>
          <Ionicons name="heart-outline" size={34} color="red" />
        </View>
      </View>
    </View>
  );
}

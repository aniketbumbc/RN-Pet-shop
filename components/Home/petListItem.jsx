import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';

export default function PetListItem({ pet }) {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: '/pet-details',
          params: pet,
        })
      }
      style={{
        padding: 10,
        marginRight: 15,
        backgroundColor: Colors.WHITE,
        borderRadius: 10,
      }}
    >
      <Image
        source={{ uri: pet?.imageUrl }}
        style={{
          width: 150,
          height: 135,
          objectFit: 'cover',
          borderRadius: 10,
        }}
      />

      <Text style={{ fontFamily: 'outfit-medium', fontSize: 20 }}>
        {pet?.name}
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            color: Colors.PRIMARY,
            fontFamily: 'outfit',
          }}
        >
          {pet?.breed}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

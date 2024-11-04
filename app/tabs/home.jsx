import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Header from '../../components/Home/header';
import PetListCategory from '../../components/Home/petlistcategory';
import Slider from '../../components/Home/slider';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Colors from '../../constants/Colors';

export default function Home() {
  return (
    <View style={{ padding: 20, marginTop: 20 }}>
      <Header />

      <Slider />

      <PetListCategory />

      {/* List of pet */}

      {/* Add new pet options */}

      <TouchableOpacity>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            padding: 20,
            marginTop: 20,
            backgroundColor: Colors.LIGHT_PRIMARY,
            borderWidth: 1,
            borderColor: Colors.PRIMARY,
            borderRadius: 15,
            borderStyle: 'dashed',
            justifyContent: 'center',
          }}
        >
          <MaterialIcons name="pets" size={24} color="black" />
          <Text
            style={{
              fontFamily: 'outfit-medium',
              color: Colors.PRIMARY,
              fontSize: 20,
            }}
          >
            Add New Pet
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

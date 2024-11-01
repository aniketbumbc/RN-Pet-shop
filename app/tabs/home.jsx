import React from 'react';
import { View, Text } from 'react-native';
import Category from '../../components/Home/category';
import Header from '../../components/Home/header';
import PetListCategory from '../../components/Home/petlistcategory';
import Slider from '../../components/Home/slider';

export default function Home() {
  return (
    <View style={{ padding: 20, marginTop: 20 }}>
      <Header />

      <Slider />

      <PetListCategory />

      {/* List of pet */}

      {/* Add new pet options */}
    </View>
  );
}

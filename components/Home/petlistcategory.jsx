import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import Category from './category';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firebasedb } from '../../config/FirebaseConfig';
import PetListItem from './petListItem';

export default function PetListCategory() {
  const [petList, setPetList] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getPetList('bird');
  }, []);

  const getPetList = async (category) => {
    setLoader(true);
    setPetList([]);

    const q = query(
      collection(firebasedb, 'Pets'),
      where('category', '==', category)
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      if (typeof doc.data() === 'object') {
        setPetList((petList) => [...petList, doc.data()]);
        setLoader(false);
      }
    });
  };

  return (
    <View>
      <Category category={(value) => getPetList(value)} />
      <FlatList
        data={petList}
        refreshing={loader}
        onRefresh={() => getPetList('bird')}
        style={{ marginTop: 10 }}
        horizontal={true}
        renderItem={({ item, index }) => <PetListItem pet={item} />}
      />
    </View>
  );
}

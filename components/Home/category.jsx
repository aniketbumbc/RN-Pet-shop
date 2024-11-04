import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firebasedb } from '../../config/FirebaseConfig';
import Colors from '../../constants/Colors';

export default function Category({ category }) {
  const data = [
    {
      id: '1',
      name: 'bird',
      imageUrl: require('../../assets/images/001-robin.png'),
    },
    {
      id: '2',
      name: 'cat',
      imageUrl: require('../../assets/images/002-cat.png'),
    },
    {
      id: '3',
      name: 'dog',
      imageUrl: require('../../assets/images/003-shiba.png'),
    },

    {
      id: '4',
      name: 'fish',
      imageUrl: require('../../assets/images/004-fish.png'),
    },
  ];
  const [categoryList, setCategotyList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('bird');

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    setCategotyList([]);
    const snapshot = await getDocs(collection(firebasedb, 'Category'));

    snapshot.forEach((doc) => {
      setCategotyList(data);
    });
  };

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontFamily: 'outfit-medium', fontSize: 20 }}>
        Category
      </Text>

      <FlatList
        data={categoryList}
        numColumns={4}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => {
              setSelectedCategory(item.name);
              category(item.name);
            }}
          >
            <View style={{ flex: 1 }}>
              <View
                style={[
                  styles.container,
                  selectedCategory == item.name &&
                    styles.selectedCategoryContainer,
                ]}
              >
                <Image
                  source={item?.imageUrl}
                  style={{ width: 40, height: 40 }}
                />
              </View>
              <Text style={{ textAlign: 'center', fontFamily: 'outfit' }}>
                {item?.name}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.LIGHT_PRIMARY,
    padding: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.PRIMARY,
    margin: 5,
  },

  selectedCategoryContainer: {
    backgroundColor: Colors.SECONDARY,
    borderColor: Colors.SECONDARY,
  },
});

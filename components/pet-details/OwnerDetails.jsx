import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function OwnerDetails({ pet }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="face-man-profile"
        size={40}
        color={Colors.PRIMARY}
        style={{ width: 40, height: 40 }}
      />

      <View style={styles.secondaryContainer}>
        <View>
          <Text style={{ fontFamily: 'outfit-medium', fontSize: 16 }}>
            Mike Bun
          </Text>

          <Text style={{ fontFamily: 'outfit', color: Colors.GRAY }}>
            Pet Owner
          </Text>
        </View>

        <Feather
          name="send"
          size={24}
          color={Colors.PRIMARY}
          style={{ marginTop: 5 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    borderColor: Colors.PRIMARY,
    backgroundColor: Colors.WHITE,
  },

  secondaryContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
});

import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import Colors from '../../constants/Colors';

import { Link } from 'expo-router';

export default function LoginScreen() {
  return (
    <View style={{ backgroundColor: Colors.WHITE, height: '100%' }}>
      <Image
        source={require('./../../assets/images/login.png')}
        style={{ width: '100%', height: 500 }}
      />

      <View
        style={{
          padding: 20,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontFamily: 'outfit-bold',
            fontSize: 30,
            textAlign: 'center',
          }}
        >
          Ready to make a new friend
        </Text>
        <Text
          style={{
            fontFamily: 'outfit',
            fontSize: 18,
            textAlign: 'center',
            color: Colors.GRAY,
          }}
        >
          Let's adopt the pet which you like to make there life happy again
        </Text>
      </View>

      <Pressable
        style={{
          padding: 14,
          marginTop: 100,
          backgroundColor: Colors.PRIMARY,
          width: '100%',
          borderRadius: 14,
        }}
      >
        <Link href="/tabs/home" style={{ textAlign: 'center' }}>
          <Text
            style={{
              fontFamily: 'outfit-medium',
              fontSize: 20,
            }}
          >
            Get Started
          </Text>
        </Link>
      </Pressable>
    </View>
  );
}

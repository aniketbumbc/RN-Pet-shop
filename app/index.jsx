import { Link, Redirect } from 'expo-router';
import { Text, View } from 'react-native';
import { useState } from 'react';

export default function Index() {
  const [isUserLogin, setIsUserLogin] = useState(false);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {isUserLogin ? (
        <Redirect href="/tabs/home" />
      ) : (
        <Redirect href="/login" />
      )}
    </View>
  );
}

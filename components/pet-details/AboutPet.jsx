import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import Colors from '../../constants/Colors';

export default function AboutPet({ pet }) {
  const [readeMore, setReadMore] = useState(true);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontFamily: 'outfit-medium', fontSize: 20 }}>
        {' '}
        About {pet?.name}
      </Text>

      <Text
        numberOfLines={readeMore ? 3 : 20}
        style={{ fontFamily: 'outfit', fontSize: 16 }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
        repudiandae, fuga ipsa laborum dicta est unde atque vero alias
        exercitationem laboriosam, quidem commodi omnis eos doloremque,
        excepturi impedit totam. Non! Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Nihil repudiandae, fuga ipsa laborum dicta est unde atque vero
        alias exercitationem laboriosam, quidem commodi omnis eos doloremque,
        excepturi impedit totam. Non! Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit.
      </Text>

      {readeMore && (
        <Pressable onPress={() => setReadMore(false)}>
          <Text
            style={{
              fontFamily: 'outfit-medium',
              fontSize: 16,
              color: Colors.SECONDARY,
            }}
          >
            Read More
          </Text>
        </Pressable>
      )}
    </View>
  );
}

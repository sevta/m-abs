import React from 'react';
import { H3, View } from 'native-base';
import { Image, PixelRatio } from 'react-native';
export default function MusicCard() {
  return (
    <View
      style={{
        backgroundColor: '#ddd',
        borderRadius: PixelRatio.get() / 2,
        overflow: 'hidden',
      }}>
      <Image
        style={{
          flex: 1,
          height: 350,
        }}
        source={{
          uri:
            'https://cms-assets.tutsplus.com/uploads/users/114/posts/34296/image/Final-image.jpg',
        }}
      />
    </View>
  );
}

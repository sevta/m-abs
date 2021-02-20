import React, { useEffect } from 'react';
import { Text, View } from 'native-base';
import { useWindowDimensions } from 'react-native';

export default function MusicWidget() {
  const { width } = useWindowDimensions();

  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        flex: 1,
        width,
        padding: 20,
        backgroundColor: '#f2f2f2',
      }}>
      <Text>Music widget</Text>
    </View>
  );
}

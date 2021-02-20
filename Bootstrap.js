import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';

import { Container } from 'native-base';
export default function Bootstrap({ children }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function mounted() {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      });
      setIsReady(true);
    }

    mounted();
  }, []);

  if (!isReady) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return <Container style={{}}>{children}</Container>;
}
